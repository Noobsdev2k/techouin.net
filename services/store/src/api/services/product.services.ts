import { ElectronicModel } from './../../databases/models/product.model'
;('use strict')
import { Api400Error, Api401Error } from '../middlewares'
import { Clothing, Electronic, Furniture } from '@/factories'

class ProductService {
  static productRegistry: any = {}

  static registerProductType(type: any, classRef: any) {
    ProductService.productRegistry[type] = classRef
  }
  static async createProduct(type: string, payload: object): Promise<{}> {
    const productClass = ProductService.productRegistry[type]
    if (!productClass) throw new Api400Error('Not Exits!!')

    return new productClass(payload).createProduct()
  }
}
ProductService.registerProductType('Electronics', Electronic)
ProductService.registerProductType('Clothing', Clothing)
ProductService.registerProductType('Furniture', Furniture)
export default ProductService
