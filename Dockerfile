# Build stage
FROM node:18-alpine as build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Build the Vite app
RUN npm run build

# Production stage
FROM node:18-alpine as production

# Set working directory
WORKDIR /app

# Install serve globally
RUN npm install -g serve

# Copy built files from build stage
COPY --from=build /app/dist ./dist

# Create a serve.json for SPA routing
RUN echo '{"rewrites": [{"source": "/**", "destination": "/index.html"}]}' > ./dist/serve.json

# Expose port
EXPOSE 10000

# Start the app
CMD ["serve", "-s", "dist", "-l", "10000"] 