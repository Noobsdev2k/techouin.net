import { IRequest } from '@/configs/interfaces'
import { Request, Response, NextFunction } from 'express'
import { CREATED, OK } from '../middlewares'
import ProductService from '../services/product.services'

class ProductController {
  createProduct = async (req: IRequest, res: Response, next: NextFunction) => {
    CREATED({
      res,
      message: 'Create product successfully',
      metadata: await ProductService.createProduct(req.body.productType, {
        ...req.body,
        productShop: req.user.userId
      })
    })
  }
}

export default new ProductController()
