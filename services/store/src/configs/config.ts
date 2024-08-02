const config = {
  app: {
    port: process.env.PORT,
    env: process.env.NODE_ENV
  },
  db: {
    enable: process.env.MONGO_ENABLE,
    host: process.env.MONGO_HOST,
    port: process.env.MONGO_PORT,
    name: process.env.MONGO_DATABASE,
    username: process.env.MONGO_USERNAME,
    password: process.env.MONGO_PASSWORD
  },
  upload: {
    cloud_name: 'dk4gkjn0g',
    api_key: '778434668915849',
    api_secret: process.env.CLOUDINARY_API_SECRET
  },
  rabbitmq: {
    amqpUri: process.env.AMQP_URI
  }
}

export default config
