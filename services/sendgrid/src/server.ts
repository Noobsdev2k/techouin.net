require('dotenv').config()
import app from './api/app'
const nodeEnv = process.env.NODE_ENV
console.log(nodeEnv)

// config dotenv by environment
require('dotenv').config({
  path: `.env.${nodeEnv}`
})

console.log('ENV:::', nodeEnv, ' PORT:::', process.env.PORT)
const PORT = process.env.PORT || 3055

// start server nodejs

const server = app.listen(PORT, () => {
  console.log(`------::----${process.env.SERVICE_NAME} start with port ${PORT}`)
})

process.on('SIGINT', () => {
  server.close((err) => console.log('SIG', err))
  // notify send (ping....)
})
