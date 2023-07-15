# Base the Docker image on the official Node.js image.
FROM node:14-alpine

# Create a directory for the application
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the local code to the app directory
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD [ "npm", "run", "start" ]
