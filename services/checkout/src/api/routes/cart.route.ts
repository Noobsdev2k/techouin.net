import express from 'express'
import cartController from '../controllers/cart.controller'
import { asyncHandler } from '@/helpers/async.catch'
import { Authentication } from '../middlewares/auth.middleware'
const router = express.Router()

router.use(asyncHandler(Authentication))
router.post('', asyncHandler(cartController.addToCart))
router.put('', asyncHandler(cartController.update))
router.delete('', asyncHandler(cartController.delete))
router.get('', asyncHandler(cartController.listToCart))

export default router
