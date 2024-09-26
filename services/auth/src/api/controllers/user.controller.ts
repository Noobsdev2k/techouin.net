import { Response, NextFunction } from 'express'
import { OK } from '../middlewares'
import { IRequest } from '@/configs/interfaces'
import userServices from '../services/user.services'

class UserController {
  getProfile = async (req: IRequest, res: Response, next: NextFunction) => {
    OK({
      res,
      message: 'Get Profile is Successful!!',
      metadata: await userServices.getProfile({ userId: req.user.userId, data: 'hello' })
    })
  }
}
export default new UserController()
