import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import { checkOverload } from '@/helpers/check.conect'
import { checkEnable } from '@/utils'
import config from '@/configs/config'
import connectDB from '@/databases/connection'
import router from './routes'

const app = express()
app.use(morgan('dev'))
app.use(helmet())
app.use(express.json({ limit: '30mb' }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())
dotenv.config()
// init db
if (checkEnable(config.db.enable)) {
  connectDB
  checkOverload()
}
// init routes
app.use('', router)
// Handle error middleware
import { is404Handler, returnError } from './middlewares/error.middleware'
import logger from '@/configs/config.logs'
app.use(is404Handler)
app.use(returnError)

// init logger
import expressWinston from 'express-winston'

app.use(
  expressWinston.logger({
    winstonInstance: logger,
    statusLevels: true
  })
)
export default app
