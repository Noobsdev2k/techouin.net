import express, { Express, NextFunction, Request, Response } from 'express'
import { asyncHandler } from '@/helpers/async.catch'
import { Authentication } from '../middlewares/auth.middleware'
import discountController from '../controllers/discount.controller'

const router = express.Router()

// router.get('/', (req: Request, res: Response) => {
//   return res.status(200).json({ status: 'Welcome to discount!!!' })
// })

router.post('/amount', asyncHandler(discountController.getDiscountAmount))
router.get('/list-product-code', asyncHandler(discountController.getAllDiscountCodeWithProduct))
router.use(asyncHandler(Authentication))
router.post('', asyncHandler(discountController.createDiscountCode))
router.get('', asyncHandler(discountController.getAllDiscountCodesByShop))
router.get('/search/:keySearch', asyncHandler(discountController.cancelDiscountCode))

export default router
