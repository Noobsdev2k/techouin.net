import userModel from '@/databases/models/user.model'
import { Api400Error, Api401Error, Api403Error } from '../middlewares'
import { comparePassword, generateOTP, hashPassword } from '@/utils'

import { OtpService } from '.'
import otpModel from '@/databases/models/otp.model'
import { createTokenPair, generateKeyPair } from '@/helpers/auth'
import keyTokenServices from './keyToken.services'
import roleModel from '@/databases/models/role.model'

class AuthService {
  /**
   * Description
   * signup
   * 1. check email is exists
   * 2. hash password
   * 3. create new user
   * 4. create otp
   * 5. send email
   * 6. created token pair
   * @param {any} payload:any
   */
  signup = async (payload: any): Promise<any> => {
    const { name, email, password, phone } = payload
    const checkEmail = await userModel.findOne({ email }).lean()
    //check email is already
    if (checkEmail) {
      throw new Api401Error('Email already Register!!')
    }
    // hash password
    const hashPass = await hashPassword(password)

    //Get the default "user" role (assuming it exists)
    const defaultRole = await roleModel.findOne({ name: 'user' })
    if (!defaultRole) {
      throw new Api401Error('Default "user" role not found!')
    }
    //create new user
    const newUser = await userModel.create({ name, email, password: hashPass, phone, roles: defaultRole })

    //create otp
    if (newUser) {
      const otp = generateOTP(phone)
      const Otp = await OtpService.createOtp(otp, email)
      return {
        user: newUser,
        otp: otp
      }
    }
    return null
  }

  async resendOtp(payload: any) {
    const { email, phone } = payload
    const isVerifyEmail = await userModel.findOne({ email, verify: true })
    if (isVerifyEmail) {
      throw new Api401Error('Email is verified ')
    }

    const otp = generateOTP(phone)
    const Otp = await OtpService.createOtp(otp, email)

    return {
      otp: otp
    }
  }

  /**
   * Description
   * verify email
   * 1. check otp holder status
   * 2. check valid otp
   * 3. active user
   * 4. create token
   * @param {any} payload:any
   * @returns {any}
   */
  async verifyEmail(payload: any): Promise<any> {
    const { email, otp } = payload
    const otpHolder = await otpModel.find({ email }).lean()
    console.log(otpHolder)

    if (!otpHolder.length) {
      throw new Api401Error('Expired Otp')
    }
    const lastOtp = otpHolder[otpHolder.length - 1]
    const isValid = await OtpService.validOtp(otp, lastOtp.otp)
    if (!isValid) {
      throw new Api401Error('Invalid Otp')
    }
    if (isValid && email === lastOtp.email) {
      const activeUser = await userModel
        .findOneAndUpdate(
          { email },
          { verify: true },
          {
            new: true
          }
        )
        .lean()
      if (activeUser) {
        await otpModel.deleteMany({ email })
        const { privateKey, publicKey } = generateKeyPair()

        const publicKeyDb = await keyTokenServices.createKeyToken({
          userId: activeUser._id,
          publicKey,
          privateKey
        })
        if (!publicKeyDb) throw new Api401Error('Create key token failed')

        const role = await roleModel.findOne({ _id: activeUser.roles })
        const tokens = await createTokenPair({ userId: activeUser._id, email, roles: role }, publicKeyDb, privateKey)
        return { activeUser, tokens }
      }
    }
    return null
  }
  async login(payload: any) {
    const { email, password } = payload
    const isUser = await userModel.findOne({ email }).lean()
    if (!isUser) {
      throw new Api401Error('Email does not exist')
    }
    const isActive = await userModel.findOne({ email, verify: true }).lean()
    if (!isActive) {
      throw new Api401Error('Email is not active')
    }
    // 2.
    const match = comparePassword(password, isUser.password)
    if (!match) throw new Api401Error('Password does not match')
    const { privateKey, publicKey } = generateKeyPair()
    const { _id: userId, roles } = isUser

    const role = await roleModel.findOne({ _id: roles })

    const tokens = await createTokenPair({ userId, email, role }, publicKey, privateKey)
    await keyTokenServices.createKeyToken({
      refreshToken: tokens?.refreshToken,
      userId,
      publicKey,
      privateKey
    })
    return {
      isUser,
      tokens
    }
  }
  //logout service
  logout = async (keyStore: any) => {
    const delKey = await keyTokenServices.removeKeyById(keyStore._id)
    if (!delKey) throw new Api400Error(`Invalid request`)
    return delKey
  }

  //handle refeshToken
  refreshToken = async ({ refreshToken, user, keyStore }: any) => {
    const { userId, email } = user
    console.log({ userId, email })

    if (keyStore.refreshTokensUsed.includes(refreshToken)) {
      // notify send email error...

      // delete token in keyStore
      await keyTokenServices.deleteKeyById(userId)
      throw new Api403Error('Something wrong happened! Please re-login!')
    }

    if (refreshToken !== keyStore.refreshToken) throw new Api401Error('Invalid refresh token, shop not registered!')

    // check userId
    const foundShop = await userModel.findOne({ email }).lean()
    if (!foundShop) throw new Api401Error('User not registered')

    // create accessToken, refreshToken
    const tokens: any = await createTokenPair({ userId, email }, keyStore.publicKey, keyStore.privateKey)

    // update token
    await keyStore.updateOne({
      $set: {
        refreshToken: tokens.refreshToken
      },
      $addToSet: {
        refreshTokensUsed: refreshToken
      }
    })

    // return new tokens
    return {
      user,
      tokens
    }
  }

  // google login
  googleLogin = async (payload: any) => {}

  // facebook login
  facebookLogin = async (payload: any) => {}
}
export default new AuthService()
