# Use Node.js as the base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies with more verbose output
RUN npm install --verbose

# Copy all files
COPY . .

# Print directory contents for debugging
RUN ls -la

# Show package.json content for debugging
RUN cat package.json

# Build with more verbose output and debug info
RUN npm run build --verbose || (echo "Build failed. Showing error logs:" && cat npm-debug.log || true)

# Install serve to run the application
RUN npm install -g serve

# Expose the port that serve will use
EXPOSE 10000

# Start the application using serve
CMD ["serve", "-s", "dist", "-l", "10000"] 