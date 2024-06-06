FROM node:alpine

WORKDIR /app/services/store

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8081

# Run yarn dev, as we would via the command line 
CMD ["npm", "run", "dev"]