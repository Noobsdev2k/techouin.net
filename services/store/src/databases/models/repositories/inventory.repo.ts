import { Types } from 'mongoose'
import { InventoryModel } from '../inventory.model'

interface insertInventoryType {
  productId: string
  shopId: string
  stock: number
  location: string | string[] | object
}
const insertInventory = async ({ productId, shopId, stock, location = 'unKnow' }: any) => {
  return await InventoryModel.create({
    invenProductId: new Types.ObjectId(productId),
    invenLocation: location,
    invenShopId: new Types.ObjectId(shopId),
    invenStock: stock
  })
}

export default insertInventory
