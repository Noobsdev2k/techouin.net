import express, { Express, Request, Response } from 'express'
import { asyncHandler } from '@/helpers/async.catch'

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
  return res.status(200).json({ status: 'Welcome to mermartvn!!!' })
})

export default router
