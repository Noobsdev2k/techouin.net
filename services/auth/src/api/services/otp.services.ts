import otpModel from '@/databases/models/otp.model'
import { compare, genSalt, hash } from 'bcrypt'

class OtpService {
  async validOtp(otp: string, hashOtp: any) {
    try {
      const isValid = await compare(otp, hashOtp)
      return isValid
    } catch (error) {}
  }
  async createOtp(otp: string, email: string) {
    try {
      const salt = await genSalt(10)
      const hastOtp = await hash(otp, salt)
      const Otp = await otpModel.create({
        email,
        otp: hastOtp
      })
      return Otp ? 1 : 0
    } catch (error) {
      console.log(error)
    }
  }
}
export default new OtpService()
