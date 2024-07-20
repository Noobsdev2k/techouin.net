'use strict'

import { MyResponseType, ResponseType } from '@/configs/interfaces'
import { Response } from 'express'
import { StatusCodes, ReasonPhrases } from 'http-status-codes'

interface ISuccessResponse {
  send(res: Response, headers: object): Response
}

class SuccessResponse implements ISuccessResponse {
  private message: string
  private status: number
  private metadata: object | any
  constructor({ message = '', status = StatusCodes.OK, metadata = {} }) {
    this.message = message || ReasonPhrases.OK
    this.status = status
    this.metadata = metadata
  }

  send(res: Response, headers: object) {
    return res.status(this.status).set(headers).json(this)
  }
}

class Ok extends SuccessResponse {
  constructor({ message, metadata = {} }: ResponseType) {
    super({ message, metadata })
  }
}

class Create extends SuccessResponse {
  constructor({ message, metadata = {} }: ResponseType) {
    super({ message, status: StatusCodes.CREATED, metadata })
  }
}

const CREATED = ({ res, message, metadata, headers = {} }: MyResponseType) => {
  new Create({
    message,
    metadata
  }).send(res, headers)
}

const OK = ({ res, message, metadata, headers = {} }: MyResponseType) => {
  new Ok({
    message,
    metadata
  }).send(res, headers)
}

export { OK, CREATED }
