import { Types } from 'mongoose'
import { ProductModel } from '../product.model'

export const publishProductByShop = async ({ product_shop, product_id }: any) => {
  const [foundShop] = await Promise.all([
    ProductModel.findOne({
      productShop: new Types.ObjectId(product_shop),
      _id: new Types.ObjectId(product_id)
    })
  ])
  if (!foundShop) return null

  foundShop.isPublish = true
  foundShop.isDraft = false

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
    .populate('product_shop', 'name email -_id')
    .sort({ updateAt: -1 })
    .skip(skip)
    .limit(limit)
    .lean()
    .exec()
}

export const updateProductById = async ({ productId, bodyUpdate, model, isNew = true }: any) => {
  return await model.findByIdAndUpdate(productId, bodyUpdate, {
    new: isNew
  })
}
