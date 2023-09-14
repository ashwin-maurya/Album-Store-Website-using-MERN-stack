FROM node:19-alpine

# Copy package.json and package-lock.json
COPY package*.json /usr/app/

# Copy app files from src directory
COPY src /usr/app/src
COPY public /usr/app/public

# Set working directory
WORKDIR /usr/app

# Install app dependencies
RUN npm install

# Start the application
CMD ["npm", "start"]
