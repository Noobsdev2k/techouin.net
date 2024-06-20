import { IRequest } from '@/configs/interfaces'
import { NextFunction, Response } from 'express'
import { Api400Error, OK } from '../middlewares'
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

  UploadMultiImage = async (req: IRequest, res: Response, next: NextFunction) => {
    const { files } = req
    if (!files?.length) throw new Api400Error('file missing')
    OK({
      res,
      message: 'Upload MultiFile Success',
      metadata: await UploadServices.UploadMultiImage({
        files,
        folderName: req.user.userId
      })
    })
  }
}
export default new UploadController()
