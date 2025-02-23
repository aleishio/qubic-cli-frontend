FROM --platform=linux/amd64 ubuntu:22.04
RUN apt-get update && apt-get install -y libstdc++6 && rm -rf /var/lib/apt/lists/*

# Copy your Linux binary into the container
COPY qubic-cli /usr/local/bin/qubic-cli

# Ensure the binary is executable
RUN chmod +x /usr/local/bin/qubic-cli

# Set the entrypoint to run your CLI
ENTRYPOINT ["/usr/local/bin/qubic-cli"]