import { IRequest } from '@/configs/interfaces'
import { CREATED, OK } from '../middlewares'
import { NextFunction, Response } from 'express'
import CartServices from '../services/cart.services'

class CartController {
  addToCart = async (req: IRequest, res: Response, next: NextFunction) => {
    CREATED({
      res,
      message: 'Add to Cart successfully',
      metadata: (await CartServices.addOrCreate(req.body)) as any
    })
  }
  update = async (req: IRequest, res: Response) => {
    OK({
      res,
      message: 'Update to cart success',
      metadata: (await CartServices.addToCartV2(req.body)) as any
    })
  }

  delete = async (req: IRequest, res: Response) => {
    OK({
      res,
      message: 'Delete cart success',
      metadata: (await CartServices.deleteItemInCart(req.body)) as any
    })
  }

  listToCart = async (req: IRequest, res: Response) => {
    OK({
      res,
      message: 'List cart success',
      metadata: (await CartServices.getListUserCart(req.query)) as any
    })
  }
}
export default new CartController()
