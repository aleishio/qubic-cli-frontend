_Last updated: 2025-02-24_

# Qubic CLI Electron Interface

This Electron app is a front-end version for the [Qubic CLI](https://github.com/qubic/qubic-cli) tool via Docker. It lets users configure settings, run commands, and view logs—all in a user-friendly interface. Compiling the Qubic CLI directly on macOS or Windows is quite hard and only works well with Linux. The reason we use Docker is to be able to run it on any computer no matter the OS. The Docker image is a compiled version for Linux.

## Prerequisites

- **Node.js and npm**: Download from [nodejs.org](https://nodejs.org). (v12+ recommended)
- **Docker Desktop**: Ensure it's installed and running. Get it from [Docker’s website](https://www.docker.com/products/docker-desktop).
- **Qubic CLI Docker Image**: Requires a Docker image for `qubic-cli` built for Linux/amd64. Follow the build instructions below.

## Running the Qubic CLI Docker Image and App

1. **Run the Docker Image**: If you haven't run it before or there's a new version, use:

   ```bash
   docker run --rm --platform linux/amd64 -d --name qubic-cli qubic-cli
   ```

2. **Install Dependencies**: Run the following command to install the necessary Node.js packages:

   ```bash
   npm install
   ```

3. **Start the App**: Use this command to start the Electron app:

   ```bash
   npm start
   ```

## Using the Interface

- **Basic Configuration Section**: Enter common parameters (e.g., `-conf`, `-seed`, `-nodeip`, etc.) at the top.
- **Command Selector**: Commands are in a dropdown. Select one to see input fields for additional parameters.
- **Run Command**: Click the button to run the command via Docker and see the output in logs.

### Example

To check an identity's balance:

1. Enter basic parameters (e.g., `-nodeip`).
2. Choose `-getbalance` in the selector.
3. Fill in the `IDENTITY` field.
4. Click Run Command. The app runs a Docker command like:

   ```bash
   docker run --rm --platform linux/amd64 qubic-cli -nodeip <your_node_ip> -getbalance <IDENTITY>
   ```

   Output appears in logs.

## Troubleshooting

- **Docker Issues**: Ensure Docker Desktop is running. Check if the `qubic-cli` image is built.
- **Command Errors**: Some commands need a running Qubic Core node. Verify connectivity or adjust parameters.
- **Platform Considerations**: On Apple Silicon Macs, use `--platform linux/amd64` for Docker images.

## Contributing

Contributions are welcome. Open an issue or submit a pull request for improvements or bug fixes.

## License

This project is under the MIT License. See the LICENSE file for details.


