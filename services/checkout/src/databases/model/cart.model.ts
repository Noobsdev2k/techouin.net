'use strict'

import { Schema, model } from 'mongoose' // Erase if already required

const DOCUMENT_NAME: string = 'Cart'
const COLLECTION_NAME: string = 'Carts'

const cartSchema = new Schema(
  {
    cartState: {
      type: String,
      require: true,
      enum: ['active', 'completed', 'fail', 'pending', 'lock'],
      default: 'active'
    },
    cartProducts: {
      type: Array,
      require: true,
      default: []
    },
    /**
     * {
     *     productId,
     *     shopId,
     *     quantity,
     *     name,
     *     price
     * }
     */
    cartCountProduct: {
      type: Number,
      default: 0
    },
    cartUserId: {
      type: String,
      require: true
    }
  },
  {
    collection: COLLECTION_NAME,
    timestamps: {
      createdAt: 'createdOn',
      updatedAt: 'modifiedOn'
    }
  }
)

export default model(DOCUMENT_NAME, cartSchema)
