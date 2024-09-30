import express from 'express'
import { asyncHandler } from '@/helpers/async.catch'
import { Authentication } from '../middlewares/auth.middleware'

const router = express.Router()

router.use(asyncHandler(Authentication))
router.post('/create')
router.delete('/delete')
router.get('/history')
//admin
router.put('/confirm_order')

router.get('/view_all')
router.get('/reviews')

export default router
