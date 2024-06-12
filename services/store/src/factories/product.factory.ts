'use strict'

import { ProductModel } from '@/databases/models/product.model'
import insertInventory from '@/databases/models/repositories/inventory.repo'

class Product {
  public productName: string
  public productThumb: string
  public productDescription: string
  public productPrice: string
  public productType: string
  public productShop: string
  public productAttributes: object
  public productQuantity: number
  constructor({
    productName,
    productThumb,
    productDescription,
    productPrice,
    productType,
    productShop,
    productAttributes,
    productQuantity
  }: any) {
    this.productName = productName
    this.productThumb = productThumb
    this.productDescription = productDescription
    this.productPrice = productPrice
    this.productType = productType
    this.productShop = productShop
    this.productAttributes = productAttributes
    this.productQuantity = productQuantity
  }

  // create new Product
  async createProduct(product_id: any) {
    const newProduct = await ProductModel.create({ ...this, _id: product_id })

    if (newProduct) {
      // add product_stock in inventory collections
      const invenData = await insertInventory({
        productId: product_id,
        shopId: this.productShop,
        stock: this.productQuantity
      })

      console.log(`invenData::`, invenData)
    }

    return newProduct
  }

  // update product
  async updateProduct(productId: string, bodyUpdate: object) {
    return await ProductModel.findByIdAndUpdate(productId, bodyUpdate, {
      new: true
    })
  }
}
export { Product }
