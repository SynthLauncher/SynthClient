# SynthClient - Modern Minecraft Client with Fabric

<div align="center">

[![Fabric API](https://img.shields.io/badge/Fabric-1.20.4-blue.svg)](https://fabricmc.net/)
[![Electron](https://img.shields.io/badge/Electron-Latest-47848F.svg)](https://www.electronjs.org/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

</div>

SynthClient is a modern, customizable Minecraft client built with Fabric mod loader and featuring a sleek Electron-based launcher. It combines performance optimization mods with a user-friendly interface to enhance your Minecraft experience.

## ✨ Features

- **Modern Electron Launcher**
  - Cross-platform support (Windows, macOS, Linux)
  - Automatic Java detection and management
  - Clean, intuitive user interface

- **Integrated Mods**
  - Sodium for performance optimization
  - Iris Shaders for enhanced graphics
  - Mod Menu for easy configuration

- **Development Features**
  - Gradle-based build system
  - Hot-reload support in development
  - Fabric mod development environment

## 🚀 Getting Started

### Prerequisites

- Java Development Kit (JDK) 21 or later
- Node.js and npm
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/SynthClient.git
   cd SynthClient
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the project:
   ```bash
   ./gradlew build
   ```

4. Start the development environment:
   ```bash
   npm run dev
   ```

## 🔧 Development

### Project Structure

```
SynthClient/
├── src/                  # Source files
│   ├── main/             # Fabric mod sources
│   └── client/           # Client-specific code
├── electron/             # Electron launcher code
├── public/               # Static assets
└── build/                # Compiled files
```

### Building

- **Development Build**:
  ```bash
  npm run dev      # Start development environment
  ```

- **Production Build**:
  ```bash
  npm run build    # Build for production
  ```

## 🎮 Usage

1. Launch the client using the Electron launcher
2. The launcher will automatically detect your Java installation
3. Click "Play" to start Minecraft with the integrated mods
4. Use Mod Menu (press ESC in-game) to configure installed mods

## 🛠 Customization

### Adding Mods

1. Place additional Fabric mods in the `run/mods` directory
2. Restart the client to apply changes

### Shader Configuration

1. Access shader settings through Iris Shaders menu in-game
2. Default shaders are located in `run/shaderpacks`

## 📝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Fabric](https://fabricmc.net/) - Mod loader and development framework
- [Electron](https://www.electronjs.org/) - Cross-platform desktop applications
- [Sodium](https://github.com/CaffeineMC/sodium-fabric) - Performance optimization
- [Iris Shaders](https://irisshaders.net/) - Shader mod integration
