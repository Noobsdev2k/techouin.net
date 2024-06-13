'use strict'

import { FurnitureModel } from '@/databases/models/product.model'
import { Product } from './product.factory'
import { Api400Error } from '@/api/middlewares'
import { removeAttrUndefined, updateNestedObjectParser } from '@/utils'
import { updateProductById } from '@/databases/models/repositories'

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

  async updateProduct(productId: any) {
    // 1. remove attr has null undefined
    const objectParams = removeAttrUndefined(this)

    // 2. check update where?
    if (objectParams.productAttributes) {
      // update child
      await updateProductById({
        productId,
        payload: updateNestedObjectParser(objectParams.productAttributes),
        model: FurnitureModel
      })
    }

    return await super.updateProduct(productId, updateNestedObjectParser(objectParams))
  }
}

export { Furniture }
