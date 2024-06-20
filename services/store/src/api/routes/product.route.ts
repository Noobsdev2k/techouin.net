import express, { Express, NextFunction, Request, Response } from 'express'
import { asyncHandler } from '@/helpers/async.catch'
import productController from '../controllers/product.controller'
import { Authentication } from '../middlewares/auth.middleware'

const router = express.Router()

// router.get('/', (req: Request, res: Response) => {
//   return res.status(200).json({ status: 'Welcome to mermartvn!!!' })
// })

router.get('/search/:keySearch', asyncHandler(productController.searchProducts))

const aliasSearch = (req: Request, res: Response, next: NextFunction) => {
  req.query.page = '1'
  req.query.limit = '5'
  req.query.sort = '-productName'
  req.query.fields = 'productName, productPrice'
  next()
}

router.get('/advanced-search', aliasSearch, asyncHandler(productController.advancedSearch))

router.get('/', asyncHandler(productController.findAllProducts))

router.get('/:productId', asyncHandler(productController.findProduct))

// authentication
router.use(asyncHandler(Authentication))
router.post('', asyncHandler(productController.createProduct))

router.patch('/:productId', asyncHandler(productController.updateProduct))

router.put('/publish/:id', asyncHandler(productController.publishProductByShop))

router.get('/drafts/all', asyncHandler(productController.getAllDraftsForShop))

router.get('/published/all', asyncHandler(productController.getAllPublishedForShop))

export default router
