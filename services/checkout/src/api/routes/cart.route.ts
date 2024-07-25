import express from 'express'
import cartController from '../controllers/cart.controller'
import { asyncHandler } from '@/helpers/async.catch'
const router = express.Router()

router.post('', asyncHandler(cartController.addToCart))
router.put('', asyncHandler(cartController.update))
router.delete('', asyncHandler(cartController.delete))
router.get('', asyncHandler(cartController.listToCart))

export default router
