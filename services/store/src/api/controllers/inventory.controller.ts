import { IRequest } from '@/configs/interfaces'
import { NextFunction, Response } from 'express'
import { OK } from '../middlewares'

class InventoryController {
  addStockToInventory = async (req: IRequest, res: Response, next: NextFunction) => {
    OK({ res, message: 'Get cart info success', metadata: {} })
  }
}
export default new InventoryController()
