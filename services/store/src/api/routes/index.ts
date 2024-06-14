import express, { Express, NextFunction, Request, Response } from 'express'
import DiscountRouter from './discount.route'
import ProductRouter from './product.route'

const router = express.Router()
router.use('/product', ProductRouter)
router.use('/discount', DiscountRouter)
export default router
