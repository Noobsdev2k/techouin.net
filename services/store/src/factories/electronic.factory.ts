'use strict'

import { ElectronicModel } from '@/databases/models/product.model'
import { Product } from './product.factory'
import { Api400Error } from '@/api/middlewares'

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
}

export { Electronic }
