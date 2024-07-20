import { IRequest } from '@/configs/interfaces'
import { Request, Response, NextFunction } from 'express'
import { Api403Error } from './error.response'

function isValidEmail(email: string): boolean {
  // This regex is more comprehensive but can still be fooled by some invalid emails
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validateRegister = (req: IRequest, res: Response, next: NextFunction) => {
  const registerRequest = req.body

  //check format email
  if (!isValidEmail(registerRequest.email)) throw new Api403Error('Invalid email address')
  // check name
  if (!registerRequest.name || registerRequest.name.length < 8) {
    throw new Api403Error('Name invalid')
  }
  // check email
  if (!registerRequest.email || registerRequest.email.length < 8) {
    throw new Api403Error('Email invalid')
  }
  // check password
  if (!registerRequest.password || registerRequest.password.length < 8) {
    throw new Api403Error('Password invalid')
  }
  // check msisdn
  if (!registerRequest.phone || registerRequest.phone.length < 10) {
    throw new Api403Error('phone invalid')
  }

  return next()
}

function ValidAdminEmail(email: string) {
  // Regex pattern for Gmail validation (more restrictive than general email patterns)
  const gmailPattern = /^[a-zA-Z0-9.]+@techouin\.net$/
  return gmailPattern.test(email)
}

export const validateAdminRegister = (req: IRequest, res: Response, next: NextFunction) => {
  const registerRequest = req.body

  //check format email
  if (!ValidAdminEmail(registerRequest.email)) throw new Api403Error('Invalid email address')
  // check name
  if (!registerRequest.name || registerRequest.name.length < 8) {
    throw new Api403Error('Name invalid')
  }
  // check email
  if (!registerRequest.email || registerRequest.email.length < 8) {
    throw new Api403Error('Email invalid')
  }
  // check password
  if (!registerRequest.password || registerRequest.password.length < 8) {
    throw new Api403Error('Password invalid')
  }
  // check msisdn
  if (!registerRequest.phone || registerRequest.phone.length < 10) {
    throw new Api403Error('phone invalid')
  }

  return next()
}
