import express, { Express, NextFunction, Request, Response } from 'express'
import { asyncHandler } from '@/helpers/async.catch'
import { Authentication } from '../middlewares/auth.middleware'
import uploadController from '../controllers/upload.controller'
import { uploadDisk } from '@/utils/multer'

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
  return res.status(200).json({ status: 'Welcome to upload services!!!' })
})

router.use(asyncHandler(Authentication))

router.post('', uploadDisk.single('file'), asyncHandler(uploadController.UploadImage))

export default router
