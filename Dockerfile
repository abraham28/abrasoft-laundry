# Use an official Node.js base image
FROM node:20-alpine3.18

# Set the working directory inside the container
WORKDIR /nextjs

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the content of the local src directory to the working directory
COPY . .

# Build the Next.js app
# RUN npm run builds

# Define the command to run your app
# CMD ["npm", "start"]
CMD ["npm", "run", "dev"]
