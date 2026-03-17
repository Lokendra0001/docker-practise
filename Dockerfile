# Use Node 22 image
FROM node:22

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy rest of the code
COPY . .

# Expose container port
EXPOSE 3000

# Start the backend
CMD ["node", "index.js"]