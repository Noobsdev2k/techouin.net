FROM node:alpine

WORKDIR /app/services/auth

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8080

# Run yarn dev, as we would via the command line 
CMD ["npm", "run", "dev"]