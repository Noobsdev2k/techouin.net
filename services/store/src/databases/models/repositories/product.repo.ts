import { Types } from 'mongoose'
import { ProductModel } from '../product.model'
import { convert2ObjectId, unGetSelectData } from '@/utils'
import SearchQuery from '@/utils/searchquery'

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

export const findAllProducts = async ({ limit, sort, page, filter, select }: any) => {
  const skip = (page - 1) * limit
  const sortBy: any = sort === 'ctime' ? { _id: -1 } : { _id: 1 }
  return await ProductModel.find(filter).sort(sortBy).skip(skip).limit(limit).select(select).lean()
}

export const findProduct = async ({ productId, unSelect = ['__v', 'productVariations'] }: any) => {
  return await ProductModel.find({ _id: convert2ObjectId(productId), isPublish: true })
    .select(unGetSelectData(unSelect))
    .lean()
}

export const getProductById = async (productId: string) => {
  return await ProductModel.findOne({ _id: convert2ObjectId(productId), isPublish: true }).lean()
}

export const checkProductByServer = async (products: any) => {
  return await Promise.all(
    products.map(async (product: any) => {
      const foundProduct = await getProductById(product.productId)
      if (foundProduct) {
        return {
          price: foundProduct.productPrice,
          quantity: product.quantity,
          productId: product.productId
        }
      }
    })
  )
}

// search full text
export const searchProductByUser = async ({ keySearch }: any) => {
  console.log(keySearch)

  const regexSearch = new RegExp(keySearch)

  const results = await ProductModel.find(
    {
      isPublish: true,
      $text: { $search: regexSearch.toString() }
    },
    {
      score: { $meta: 'textScore' }
    }
  )
    .sort({ score: { $meta: 'textScore' } })
    .lean()

  return results
}

/**
 * ?productPrice[gte]=2&productQuantity[gt]=3&...[lte]=5&...[lt]=6&keySearch=abc
 *
 * @param queryInput
 * @return {Promise<void>}
 */
export const advancedSearch = async (queryInput: any) => {
  const features = new SearchQuery(ProductModel.find(), queryInput).filter().sort().limitFields().paging()

  return await features.query
}
