require('dotenv').config()
import { exit } from 'process'

import { isOperationalError } from './api/middlewares'
import app from './api/app'
import logger from './configs/logs.config'

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
  logger.info(`------::----${process.env.SERVICE_NAME} start with port ${PORT}`)
})

process.on('SIGINT', () => {
  server.close((err) => console.log('SIG', err))
  // notify send (ping....)
})

// `kill` command
// catch all uncaught exceptions
process.on('unhandledRejection', (error) => {
  logger.error(error)
  throw error
})
process.on('uncaughtException', (error: any) => {
  // if isOperational is false -> exit service
  if (!isOperationalError(error)) {
    logger.error(error)
    exit()
  }
})
