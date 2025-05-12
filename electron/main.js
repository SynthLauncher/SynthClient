const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const isDev = process.env.NODE_ENV !== 'production';
const MinecraftLauncher = require('./MinecraftLauncher');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    minWidth: 800,
    minHeight: 500,
    frame: false,
    transparent: true,
    backgroundColor: '#00000000',
    titleBarStyle: 'hidden',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    },
    vibrancy: 'dark',
    visualEffectState: 'active'
  });

  // Load the Vite development server URL in development
  // or the local index.html in production
  if (isDev) {
    mainWindow.loadURL('http://localhost:5173');
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
  }
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

// Handle game launch request
ipcMain.handle('launch-minecraft', async () => {
  try {
    const launcher = new MinecraftLauncher();
    await launcher.launch();
    return { success: true };
  } catch (error) {
    console.error('Failed to launch Minecraft:', error);
    return { success: false, error: error.message };
  }
});