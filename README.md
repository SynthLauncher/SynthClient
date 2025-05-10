# SynthClient

## Prerequisites

- Java Development Kit (JDK) version 21 or higher
- Gradle

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/SynthClient.git
   cd SynthClient
   ```

2. **Configure the Build**
   Ensure you have the correct versions set in `gradle.properties`.

3. **Build the Project**
   ```bash
   ./gradlew build
   ```

4. **Run the Client Launcher**
   ```bash
   ./gradlew runClient
   ```

## Troubleshooting

- Ensure all dependencies are correctly set in `build.gradle`.
- Check the `gradle.properties` for correct version numbers.
- If you encounter memory issues, increase the `org.gradle.jvmargs` in `gradle.properties`.
