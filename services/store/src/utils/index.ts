import { Types } from 'mongoose'
import bcrypt from 'bcrypt'


export const checkEnable = (value: any) => {
  return value === 'true'
}

export const convert2ObjectId = (id: string) => {
  return new Types.ObjectId(id)
}

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(password, salt)
}
export const comparePassword = async (password: string, hashPassword: string) =>
  await bcrypt.compare(password, hashPassword)


export function generateOTP(phone: string) {
  let OTP = ''
  for (let i = 0; i < 6; i++) {
    OTP += phone[Math.floor(Math.random() * 10)]
  }
  return OTP
}

export const Headers = {
  API_KEY: 'x-api-key',
  AUTHORIZATION: 'authorization',
  CLIENT_ID: 'x-client-id',
  REFRESH_TOKEN: 'x-refresh-token'
}
