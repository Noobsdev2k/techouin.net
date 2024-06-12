import tokenKeyModel from '@/databases/models/tokenKey.model'
import { Types } from 'mongoose'

class KeyTokenService {
  createKeyToken = async ({ userId, publicKey, privateKey, refreshToken }: any) => {
    try {
      // level0
      // const tokens = await keyTokenModel.create({
      //     user: userId,
      //     publicKey,
      //     privateKey
      // })
      //
      // return tokens ? tokens.publicKey : null

      // level xx
      const filter = { user: userId },
        update = {
          publicKey,
          privateKey,
          refreshTokensUsed: [],
          refreshToken
        },
        options = { upsert: true, new: true }

      const tokens = await tokenKeyModel.findOneAndUpdate(filter, update, options)

      return tokens ? tokens.publicKey : null
    } catch (error) {
      console.error('createKeyToken::error::', error)
      throw error
    }
  }

  findByUserId = async (userId: string) => {
    return await tokenKeyModel.findOne({ user: new Types.ObjectId(userId) })
  }

  removeKeyById = async (id: string) => {
    return await tokenKeyModel.findByIdAndDelete(id).lean()
  }

  findByRefreshTokenUsed = async (refreshToken: string) => {
    return await tokenKeyModel.findOne({ refreshTokensUsed: refreshToken }).lean()
  }

  findByRefreshToken = async (refreshToken: string) => {
    return await tokenKeyModel.findOne({ refreshToken })
  }

  deleteKeyById = async (userId: string) => {
    return await tokenKeyModel.findByIdAndDelete({ userId: userId })
  }
}
export default new KeyTokenService()
