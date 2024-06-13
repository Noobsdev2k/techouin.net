import { Types } from 'mongoose'
import { ProductModel } from '../product.model'

export const publishProductByShop = async ({ productShop, productId }: any) => {
  // find one
  const foundShop = await ProductModel.findOne({
    productShop: new Types.ObjectId(productShop),
    _id: new Types.ObjectId(productId)
  })

  if (!foundShop) return foundShop

  // update isDraft, isPublish
  foundShop.isDraft = false
  foundShop.isPublish = true

  const { modifiedCount } = await foundShop.updateOne(foundShop)

  return modifiedCount
}

export const findAllDraftsForShop = async ({ query, limit, skip }: any) => {
  return await queryProduct({ query, limit, skip })
}

export const findAllPublishForShop = async ({ query, limit, skip }: any) => {
  return await queryProduct({ query, limit, skip })
}

export const queryProduct = async ({ query, limit, skip }: any) => {
  return await ProductModel.find(query)
    // .populate('productShop', 'name email -_id')
    .sort({ updateAt: -1 })
    .skip(skip)
    .limit(limit)
    .lean()
}

export const updateProductById = async ({ productId, bodyUpdate, model, isNew = true }: any) => {
  return await model.findByIdAndUpdate(productId, bodyUpdate, {
    new: isNew
  })
}
