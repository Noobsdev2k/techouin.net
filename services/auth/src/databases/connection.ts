'use strict'

import mongoose from 'mongoose'
import config from '@/configs/config'
import { countConnect } from '@/helpers/check.conect'
const {
  db: { username, password, host, name, port }
} = config

const connectString = `mongodb://${username}:${password}@${host}:${port}/${name}?authSource=admin`


const MAX_POLL_SIZE = 50
const TIME_OUT_CONNECT = 3000

console.log(connectString)
mongoose.set('strictQuery', true)

class Database {
  private static instance: Database
  constructor() {
    this.connect()
  }
  // connect
  connect(type = 'mongodb') {
    if (1 === 1) {
      mongoose.set('debug', true)
      mongoose.set('debug', { color: true })
    }

    mongoose
      .connect(connectString, {
        serverSelectionTimeoutMS: TIME_OUT_CONNECT,
        maxPoolSize: MAX_POLL_SIZE
      })
      .then((_result: any) => {
        try {
          countConnect()
        } catch (e) {
          console.log(e)
        }
        console.log(`Connected mongodb success `)
      })
      .catch((err: any) => console.log(`Error connect!`))

    mongoose.connection.on('connected', () => {
      console.log('Mongodb connected to db success')

      // insert sql ...
    })
    mongoose.connection.on('error', (err: any) => {
      console.error('Mongodb connected to db error' + err)
    })
    mongoose.connection.on('disconnected', () => {
      console.log('Mongodb disconnected db success')
    })
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database()
    }

    return Database.instance
  }
}

const instanceMongoDb = Database.getInstance()
export default instanceMongoDb
