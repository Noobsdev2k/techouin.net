'use strict'

import { FurnitureModel } from '@/databases/models/product.model'
import { Product } from './product.factory'
import { Api400Error } from '@/api/middlewares'

class Furniture extends Product {
  async createProduct() {
    const newFurniture = await FurnitureModel.create({
      ...this.productAttributes,
      productShop: this.productShop
    })
    if (!newFurniture) {
      throw new Api400Error('Create new Furniture error')
    }

    const newProduct = await super.createProduct(newFurniture._id)
    if (!newProduct) {
      throw new Api400Error('Create new product error')
    }

    return newProduct
  }
}

export { Furniture }
