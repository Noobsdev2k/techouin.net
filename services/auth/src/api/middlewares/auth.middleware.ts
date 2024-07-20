import JWT from 'jsonwebtoken'
import { NextFunction, Response } from 'express'
import { Api400Error, Api401Error, Api403Error, Api404Error } from './error.response'
import { ActionType, Headers } from '@/utils'
import keyTokenServices from '../services/keyToken.services'
import { IRequest } from '@/configs/interfaces'
import { AccessControl } from 'accesscontrol'
import { getRoleListOfUser } from '@/utils/role.repo'

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

export const grantAccess = (action: ActionType, resource: string) => {
  return async (req: IRequest, res: Response, next: NextFunction) => {
    try {
      const rbac = new AccessControl()
      rbac.setGrants(await getRoleListOfUser(req.user.userId))

      const { roleName } = req.user.role

      let isAction = false
      const permission = rbac.can(roleName as string)[action](resource)
      console.log(permission)

      if (permission.granted) {
        isAction = true
      }

      if (!isAction) {
        throw new Api403Error('Permission denied')
      }
      next()
    } catch (error) {
      next(error)
    }
  }
}
