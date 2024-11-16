# Dockerfile for Nginx as a Standalone Service

# Use the official Nginx image as the base image
FROM nginx:latest

# Copy your custom Nginx configuration file to the container
COPY ./nginx.conf /etc/nginx/nginx.conf

# Expose port 8081 (or whichever port you configured in your nginx.conf)
EXPOSE 8081

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]