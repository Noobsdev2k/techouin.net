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
  publishProductByShop = async (req: IRequest, res: Response, next: NextFunction) => {
    OK({
      res,
      message: 'Update publish product successfully',
      metadata: await ProductService.publishProductByShop({
        productShop: req.user.userId,
        productId: req.params.id
      })
    })
  }

  updateProduct = async (req: IRequest, res: Response, next: NextFunction) => {
    OK({
      res,
      message: 'Update product successfully',
      metadata: await ProductService.updateProduct(req.body.productType, req.params.productId, {
        ...req.body,
        productShop: req.user.userId
      })
    })
  }

  getAllDraftsForShop = async (req: IRequest, res: Response, next: NextFunction) => {
    OK({
      res,
      message: 'Get list draft product successfully',
      metadata: await ProductService.findAllDraftsForShop({
        productShop: req.user.userId
      })
    })
  }

  getAllPublishedForShop = async (req: IRequest, res: Response, next: NextFunction) => {
    OK({
      res,
      message: 'Get list published product successfully',
      metadata: await ProductService.findAllPublishForShop({
        productShop: req.user.userId
      })
    })
  }

  findAllProducts = async (req: IRequest, res: Response, next: NextFunction) => {
    OK({
      res,
      message: 'Find all product success',
      metadata: await ProductService.findAllProducts(req.params)
    })
  }

  findProduct = async (req: IRequest, res: Response, next: NextFunction) => {
    OK({
      res,
      message: 'Find product success',
      metadata: await ProductService.findOneProduct(req.params.productId)
    })
  }
}

export default new ProductController()
