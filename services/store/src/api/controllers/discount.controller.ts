import { IRequest } from '@/configs/interfaces'
import { NextFunction, Response } from 'express'
import { OK } from '../middlewares'
import DiscountService from '../services/discount.services'

class DiscountController {
  createDiscountCode = async (req: IRequest, res: Response, next: NextFunction) => {
    OK({
      res,
      message: 'Create discount success',
      metadata: await DiscountService.createDiscountCode({
        ...req.body,
        shopId: req.user.userId
      })
    })
  }

  updateDiscountCode = async (req: IRequest, res: Response, next: NextFunction) => {
    OK({
      res,
      message: 'Update discount success',
      metadata: await DiscountService.updateDiscountCode({
        ...req.body,
        shopId: req.user.userId
      })
    })
  }

  getAllDiscountCodeWithProduct = async (req: IRequest, res: Response, next: NextFunction) => {
    OK({
      res,
      message: 'Get Discount Code success',
      metadata: await DiscountService.getAllDiscountCodeWithProduct({
        ...req.query
      })
    })
  }

  getAllDiscountCodesByShop = async (req: IRequest, res: Response, next: NextFunction) => {
    OK({
      res,
      message: 'Get all discount codes success',
      metadata: await DiscountService.getAllDiscountCodesByShop({
        ...req.query,
        shopId: req.user.userId
      })
    })
  }
  getDiscountAmount = async (req: IRequest, res: Response, next: NextFunction) => {
    OK({
      res,
      message: 'Get discount amount success',
      metadata: await DiscountService.getDiscountAmount({
        ...req.body
      })
    })
  }

  deleteDiscountCode = async (req: IRequest, res: Response, next: NextFunction) => {
    OK({
      res,
      message: 'Delete discount success',
      metadata: await DiscountService.deleteDiscountCode({
        ...req.body,
        shopId: req.user.userId
      })
    })
  }

  cancelDiscountCode = async (req: IRequest, res: Response, next: NextFunction) => {
    OK({
      res,
      message: 'Cancel discount success',
      metadata: await DiscountService.cancelDiscountCode({
        ...req.body,
        shopId: req.user.userId
      })
    })
  }
}

export default new DiscountController()
