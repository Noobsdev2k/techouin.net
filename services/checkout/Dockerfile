FROM node:alpine

WORKDIR /app/services/checkout

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8082

# Run yarn dev, as we would via the command line 
CMD ["npm", "run", "dev"]