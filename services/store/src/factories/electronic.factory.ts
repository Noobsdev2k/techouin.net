'use strict'

import { ElectronicModel } from '@/databases/models/product.model'
import { Product } from './product.factory'
import { Api400Error } from '@/api/middlewares'
import { removeAttrUndefined, updateNestedObjectParser } from '@/utils'
import { updateProductById } from '@/databases/models/repositories'

class Electronic extends Product {
  async createProduct() {
    const newElectronic = await ElectronicModel.create({
      ...this.productAttributes,
      productShop: this.productShop
    })
    if (!newElectronic) {
      throw new Api400Error('Create new electronic error')
    }

    const newProduct = await super.createProduct(newElectronic._id).catch(async (err) => {
      await newElectronic.deleteOne({ _id: newElectronic._id })
      throw err
    })
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
        model: ElectronicModel
      })
    }

    return await super.updateProduct(productId, updateNestedObjectParser(objectParams))
  }
}

export { Electronic }
