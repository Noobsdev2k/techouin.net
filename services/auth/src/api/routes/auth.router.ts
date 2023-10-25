import express, { Express, Request, Response } from 'express'
import AuthController from '../controllers'
import { asyncHandler } from '@/helpers/async.catch'
import { Authentication } from '../middlewares'

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
  return res.status(200).json({ status: 'Welcome to mermartvn!!!' })
})

router.post('/signup', asyncHandler(AuthController.signup))
router.post('/resend_otp', asyncHandler(AuthController.resendOtp))
router.post('/verify_email', asyncHandler(AuthController.verifyEmail))
router.post('/login', asyncHandler(AuthController.login))
router.get('/getProfile')
router.use(asyncHandler(Authentication))
// router.post('/verifyEmail', asyncHandler())
export default router
