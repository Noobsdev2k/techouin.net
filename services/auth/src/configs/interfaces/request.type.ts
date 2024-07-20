'use strict'

import { Request } from 'express'

export interface IRequest extends Request {
  apikey: {
    key: string
    status: boolean
    permissions: Array<string>
  }
  keyStore: object
  user: {
    userId: string
    role: object | any
  }
  refreshToken: string | string[]
}
