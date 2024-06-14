import express, { Express, NextFunction, Request, Response } from 'express'
import { asyncHandler } from '@/helpers/async.catch'
import { Authentication } from '../middlewares/auth.middleware'

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
  return res.status(200).json({ status: 'Welcome to discount!!!' })
})

router.post('/amount', (req: Request, res: Response) => {
  return res.status(200).json({ status: 'Welcome to discount!!!' })
})

export default router
