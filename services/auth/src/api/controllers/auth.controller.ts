import { Request, Response, NextFunction } from 'express'
import { CREATED, OK } from '../middlewares'
import { AuthService } from '../services'
import { IRequest } from '@/configs/interfaces'

class AuthController {
  login = async (req: Request, res: Response, next: NextFunction) => {
    OK({ res, message: 'Login is Successful!!', metadata: await AuthService.login(req.body) })
  }
  /**
   * Description
   * @param {any} res:Response
   * @param {any} req:Request
   * @returns {any}
   */
  signup = async (req: Request, res: Response, next: NextFunction) => {
    CREATED({
      res,
      message: 'Register is Successful. Please confirm your email!!!',
      metadata: await AuthService.signup(req.body)
    })
  }
  verifyEmail = async (req: Request, res: Response, next: NextFunction) => {
    CREATED({
      res,
      message: 'Verify email is Successful!!!',
      metadata: (await AuthService.verifyEmail(req.body)) as any
    })
  }
  resendOtp = async (req: Request, res: Response, next: NextFunction) => {
    CREATED({ res, message: 'Send otp is Successful!!!', metadata: await AuthService.resendOtp(req.body) })
  }

  logout = async (req: IRequest, res: Response, next: NextFunction) => {
    console.log(req)

    OK({ res, message: 'Logout success', metadata: (await AuthService.logout(req.keyStore)) as any })
  }
  refreshToken = async (req: IRequest, res: Response, next: NextFunction) => {
    console.log(req)

    OK({
      res,
      message: 'Get new token successfully',
      metadata: (await AuthService.refreshToken({
        refreshToken: req.refreshToken,
        user: req.user,
        keyStore: req.keyStore
      })) as any
    })
  }
}
export default new AuthController()
