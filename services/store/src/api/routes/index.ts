import express, { Express, NextFunction, Request, Response } from 'express'
import DiscountRouter from './discount.route'
import ProductRouter from './product.route'
import UploadRouter from './upload.route'

const router = express.Router()
router.use('/product', ProductRouter)
router.use('/discount', DiscountRouter)
router.use('/upload', UploadRouter)
export default router
