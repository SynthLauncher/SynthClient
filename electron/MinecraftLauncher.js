const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

class MinecraftLauncher {
    constructor() {
        this.javaPath = this.findJavaPath();
        this.gameDir = path.join(process.env.APPDATA || (process.platform === 'darwin' ? process.env.HOME + '/Library/Application Support' : process.env.HOME + '/.local/share'), '.minecraft');
    }

    findJavaPath() {
        // Default Java paths for different platforms
        const defaultPaths = {
            win32: 'C:\\Program Files\\Java\\bin\\java.exe',
            darwin: '/Library/Java/JavaVirtualMachines/temurin-21.jdk/Contents/Home/bin/java',
            linux: '/usr/bin/java'
        };

        return defaultPaths[process.platform] || 'java';
    }

    async launch() {
        // If in development, use Gradle to run the client directly
        if (process.env.NODE_ENV !== 'production') {
            return new Promise((resolve, reject) => {
                const gradlew = process.platform === 'win32' ? 'gradlew.bat' : './gradlew';
                const gradleProcess = spawn(gradlew, ['runClient'], {
                    cwd: path.join(__dirname, '..'),
                    stdio: 'inherit',
                    shell: true
                });
                gradleProcess.on('error', (error) => {
                    console.error('Failed to start Gradle runClient:', error);
                    reject(error);
                });
                gradleProcess.on('close', (code) => {
                    if (code === 0) {
                        resolve();
                    } else {
                        reject(new Error('Gradle runClient exited with code ' + code));
                    }
                });
            });
        }
        const fabricServerJar = path.join(__dirname, '../build/libs/SynthClient.jar');
        
        if (!fs.existsSync(fabricServerJar)) {
            throw new Error('Fabric mod JAR not found. Please build the project first.');
        }

        const jvmArgs = [
            '-Xmx2G',
            '-XX:+UnlockExperimentalVMOptions',
            '-XX:+UseG1GC',
            '-XX:G1NewSizePercent=20',
            '-XX:G1ReservePercent=20',
            '-XX:MaxGCPauseMillis=50',
            '-XX:G1HeapRegionSize=32M',
            '-Dfabric.development=true'
        ];

        const gameArgs = [
            '--version', '1.20.4',
            '--gameDir', this.gameDir,
            '--assetsDir', path.join(this.gameDir, 'assets'),
            '--assetIndex', '1.20.4',
            '--accessToken', '0', // Offline mode for development
            '--userProperties', '{}',
            '--username', 'Developer',
            '--tweakClass', 'net.fabricmc.loader.impl.launch.knot.KnotClient'
        ];

        const mcProcess = spawn(this.javaPath, [...jvmArgs, '-jar', fabricServerJar, ...gameArgs], {
            stdio: 'inherit'
        });

        mcProcess.on('error', (error) => {
            console.error('Failed to start Minecraft:', error);
        });

        return mcProcess;
    }
}

module.exports = MinecraftLauncher;