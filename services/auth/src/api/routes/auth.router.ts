import express, { Express, Request, Response } from 'express'
import AuthController from '../controllers'
import { asyncHandler } from '@/helpers/async.catch'
import { Authentication } from '../middlewares'
import { validateAdminRegister, validateRegister } from '../middlewares/validate.middleware'
import accessController from '../controllers/access.controller'
import { grantAccess } from '../middlewares/auth.middleware'
import { ActionType } from '@/utils'

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
  return res.status(200).json({ status: 'Welcome to mermartvn!!!' })
})

router.post('/signup', asyncHandler(validateRegister), asyncHandler(AuthController.signup))
router.post('/resend_otp', asyncHandler(AuthController.resendOtp))
router.post('/verify_email', asyncHandler(AuthController.verifyEmail))
router.post('/login', asyncHandler(AuthController.login))

router.use(asyncHandler(Authentication))
router.post('/logout', asyncHandler(AuthController.logout))
router.get('/getProfile', asyncHandler(grantAccess(ActionType.DELETE, 'Product')), (req: Request, res: Response) => {
  return res.status(200).json({ status: 'Welcome to profile' })
})

//middleware key create admin
router.post('/create_admin', asyncHandler(validateAdminRegister), asyncHandler(accessController.signup))

//create role
router.post('/create_role', asyncHandler(accessController.create_role))
router.patch('/role/:roleId', asyncHandler(accessController.create_role))
router.get('/role', asyncHandler(accessController.create_role))

router.post('/resource', asyncHandler(accessController.create_role))

export default router
