# Use the official Node.js LTS image as the base image
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if using npm) to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy all the source code to the container
COPY . .

# Build the NestJS project
RUN npm run build

# Expose the port that your NestJS app is running on (change the port if needed)
EXPOSE 3000

# Start the NestJS app
CMD ["npm", "run", "start:prod"]
