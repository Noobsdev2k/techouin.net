import JWT from 'jsonwebtoken'
import { NextFunction, Request, Response } from 'express'
import { Api400Error, Api401Error, Api404Error } from './error.response'
import { Headers } from '@/utils'
import keyTokenServices from '../services/keyToken.services'
import { IRequest } from '@/configs/interfaces'

export const Authentication = async (req: IRequest, res: Response, next: NextFunction) => {
  const userId = req.headers[Headers.CLIENT_ID] as string

  if (!userId) throw new Api401Error('Invalid Request')

  const keyStore = await keyTokenServices.findByUserId(userId)

  if (!keyStore) throw new Api404Error('Not Found keyStore')
  if (req.headers[Headers.REFRESH_TOKEN]) {
    try {
      const refreshToken = req.headers[Headers.REFRESH_TOKEN] as string

      const decodeUser: any = await JWT.verify(refreshToken, keyStore.publicKey as string)
      if (userId !== decodeUser.userId) throw new Api400Error('Invalid UserId')
      req.keyStore = keyStore
      req.user = decodeUser
      req.refreshToken = refreshToken
      return next()
    } catch (err) {
      throw err
    }
  }
  // 3.
  const accessToken = req.headers[Headers.AUTHORIZATION] as string
  if (!accessToken) throw new Api401Error('Invalid Request')

  try {
    const decodeUser: any = JWT.verify(accessToken, keyStore.privateKey as string)
    if (userId !== decodeUser.userId) throw new Api401Error('Invalid UserId')

    req.user = decodeUser
    req.keyStore = keyStore
    return next()
  } catch (err) {
    throw err
  }
}
