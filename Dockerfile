# Stage 1: Build the React application
FROM node:20-alpine3.17 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the local files to the container
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the React application from Nginx
FROM nginx:alpine

# Copy the React build from Stage 1
COPY --from=build /app/build /usr/share/nginx/html

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
