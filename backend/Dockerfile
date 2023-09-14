# Use an official Node.js runtime based on Alpine Linux
FROM node:16.13.0-alpine

# Set the working directory within the container
WORKDIR /usr/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose the port that your Node.js application will listen on
EXPOSE 5000

# Specify the command to run when the container starts
CMD ["node", "index.js"]
