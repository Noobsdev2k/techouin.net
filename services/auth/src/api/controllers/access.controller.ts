import { Response, NextFunction } from 'express'
import { CREATED } from '../middlewares'

import { IRequest } from '@/configs/interfaces'
import accessServices from '../services/access.services'

class AccessController {
  signup = async (req: IRequest, res: Response, next: NextFunction) => {
    CREATED({
      res,
      message: 'Register is Successful',
      metadata: await accessServices.createAdmin(req.body)
    })
  }
  create_role = async (req: IRequest, res: Response, next: NextFunction) => {
    CREATED({
      res,
      message: 'Create Role Successful',
      metadata: await accessServices.createRole(req.body)
    })
  }
  create_resource = async (req: IRequest, res: Response, next: NextFunction) => {
    CREATED({
      res,
      message: 'Create Resource Successful',
      metadata: await accessServices.createResource(req.body)
    })
  }
  getAll_resource = async (req: IRequest, res: Response, next: NextFunction) => {
    CREATED({
      res,
      message: 'Get List Resource Successful',
      metadata: await accessServices.listResource(req.query)
    })
  }
}
export default new AccessController()
