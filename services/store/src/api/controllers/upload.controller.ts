import { IRequest } from '@/configs/interfaces'
import { NextFunction, Response } from 'express'
import { OK } from '../middlewares'
import UploadServices from '../services/upload.services'

class UploadController {
  UploadImage = async (req: IRequest, res: Response, next: NextFunction) => {
    OK({
      res,
      message: 'Upload File Success',
      metadata: await UploadServices.UploadImage({
        path: req.file?.path,
        folderName: req.user.userId
      })
    })
  }
}
export default new UploadController()
