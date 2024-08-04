'use strict'

import {
  advancedSearch,
  findAllDraftsForShop,
  findAllProducts,
  findAllPublishForShop,
  findProduct,
  getProductById,
  publishProductByShop,
  searchProductByUser
} from '@/databases/models/repositories'
import { Api400Error, Api401Error } from '../middlewares'
import { Clothing, Electronic, Furniture } from '@/factories'
import { getSelectData, unGetSelectData } from '@/utils'

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
  static async updateProduct(type: string, productId: string, payload: object) {
    const productClass = ProductService.productRegistry[type]
    if (!productClass) throw new Api400Error('Not Exits!!')

    return new productClass(payload).updateProduct(productId)
  }

  // PUT
  static async publishProductByShop({ productShop, productId }: any) {
    // find one
    return await publishProductByShop({ productShop, productId })
  }

  // query
  static async findAllDraftsForShop({ productShop, limit = 50, skip = 0 }: any) {
    const query = { productShop, isDraft: true }
    return await findAllDraftsForShop({ query, limit, skip })
  }

  static async findAllPublishForShop({ productShop, limit = 50, skip = 0 }: any) {
    const query = { productShop, isPublish: true }
    return await findAllPublishForShop({ query, limit, skip })
  }

  static async searchProducts({ keySearch }: any) {
    return await searchProductByUser({ keySearch })
  }

  static async findAllProducts({ limit = 50, sort = 'ctime', page = 1, filter = { isPublish: true } }) {
    return await findAllProducts({
      limit,
      sort,
      filter,
      page,
      select: getSelectData(['productName', 'productPrice', 'productThumb', 'productShop'])
    })
  }

  static async findOneProduct(productId: string) {
    return findProduct({ productId })
  }

  static async findProductById(productId: string) {
    return await getProductById(productId)
  }

  static async advancedSearch(query: any) {
    return await advancedSearch(query)
  }
  static async serveRPCRequest(payload: any) {
    const { type, data } = payload
    switch (type) {
      case 'PRODUCT_VIEW':
        return this.findProductById(data)
      default:
        break
    }
  }
}
ProductService.registerProductType('Electronics', Electronic)
ProductService.registerProductType('Clothing', Clothing)
ProductService.registerProductType('Furniture', Furniture)
export default ProductService
