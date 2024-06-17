import { convert2ObjectId } from '@/utils'
import { Api400Error } from '../middlewares'
import discountModel from '@/databases/models/discount.model'
import { checkDiscountExists, findAllDiscountCodesUnSelect } from '@/databases/models/repositories/discount.repo'
import { findAllProducts } from '@/databases/models/repositories'

class DiscountService {
  static async createDiscountCode(payload: any) {
    const {
      code,
      start_date,
      end_date,
      is_active,
      shopId,
      min_order_value,
      product_ids,
      applies_to,
      name,
      description,
      type,
      users_used,
      value,
      max_value,
      max_users,
      users_count,
      max_uses_per_user
    } = payload

    // validate
    if (new Date() > new Date(start_date) || new Date() > new Date(end_date)) {
      throw new Api400Error('Discount code has expired')
    }

    if (new Date(end_date) < new Date(start_date)) {
      throw new Api400Error('End date more than start date')
    }

    // create index for discount code
    const foundDiscount = await discountModel
      .findOne({
        discountCode: code,
        discountShopId: shopId
      })
      .lean()

    if (foundDiscount && foundDiscount.discountIsActive) {
      throw new Api400Error('Discount exists')
    }

    return await discountModel.create({
      discountName: name,
      discountDescription: description,
      discountType: type,
      discountCode: code,
      discountValue: value,
      discountMinOrderValue: min_order_value || 0,
      discountMaxValue: max_value,
      discountStartDate: new Date(start_date),
      discountEndDate: new Date(end_date),
      discountMaxUses: max_users,
      discountUsesCount: users_count,
      discountUsersUsed: users_used,
      discountShopId: shopId,
      discountMaxUsesPerUser: max_uses_per_user,
      discountIsActive: is_active,
      discountAppliesTo: applies_to,
      discountProductIds: applies_to === 'all' ? [] : product_ids
    })
  }

  static async updateDiscountCode(payload: any) {
    const {
      code,
      start_date,
      end_date,
      is_active,
      shopId,
      min_order_value,
      product_ids,
      applies_to,
      name,
      description,
      type,
      value,
      max_value,
      max_users
    } = payload
    return {}
  }

  static async getAllDiscountCodeWithProduct({ code, shopId, userId, limit, page }: any) {
    // create index for discountCode
    const foundDiscount = await discountModel.findOne({
      discountCode: code,
      discountShopId: convert2ObjectId(shopId)
    })

    if (!foundDiscount || !foundDiscount.discountIsActive) {
      throw new Api400Error('Discount not exists')
    }

    const { discountAppliesTo, discountProductIds } = foundDiscount
    let filter
    if (discountAppliesTo === 'all') {
      // get all
      filter = {
        productShop: convert2ObjectId(shopId),
        isPublish: true
      }
    }

    if (discountAppliesTo === 'specific') {
      // get by product ids
      filter = {
        _id: { $in: discountProductIds, isPublish: true }
      }
    }

    return await findAllProducts({
      filter,
      limit: +limit,
      page: +page,
      sort: 'ctime',
      select: ['productName']
    })
  }

  static async getAllDiscountCodesByShop({ limit, page, shopId }: any) {
    return await findAllDiscountCodesUnSelect({
      limit: +limit,
      page: +page,
      filter: {
        discountShopId: convert2ObjectId(shopId),
        discountIsActive: true
      },
      unSelect: ['__v', 'discountShopId'],
      model: discountModel
    })
  }

  static async getDiscountAmount({ codeId, userId, shopId, products }: any) {
    const foundDiscount = await checkDiscountExists({
      model: discountModel,
      filter: {
        discountCode: codeId,
        discountShopId: convert2ObjectId(shopId)
      }
    })

    if (!foundDiscount) {
      throw new Api400Error('Discount not exists')
    }

    const {
      discountIsActive,
      discountMaxUses,
      discountStartDate,
      discountEndDate,
      discountMinOrderValue,
      discountMaxOrderValue,
      discountUsersUsed,
      discountType,
      discountValue
    } = foundDiscount
    if (!discountIsActive) throw new Api400Error('Discount expired')
    if (discountMaxUses === 0) throw new Api400Error('Discount are out')

    if (new Date() < new Date(discountStartDate) || new Date() > new Date(discountEndDate))
      throw new Api400Error('Discount code has expired')

    // check xem cos et gia tri toi thieu hay k
    let totalOrder = 0
    if (discountMinOrderValue > 0) {
      // get total
      totalOrder = products.reduce((acc: any, product: any) => {
        return acc + product.quantity * product.price
      }, 0)

      if (totalOrder < discountMinOrderValue) {
        throw new Api400Error(`Discount requires a minium order value of ${discountMinOrderValue}`)
      }
    }

    if (discountMaxOrderValue > 0) {
      const userDiscount = discountUsersUsed.find((user: any) => user.userId === userId)
      if (userDiscount) {
        // ..
      }
    }

    // check xem discount nay la fixed amount
    const amount = discountType === 'fixed_amount' ? discountValue : totalOrder * (discountValue / 100)

    return {
      totalOrder,
      discount: amount,
      totalPrice: totalOrder - amount
    }
  }

  // delete voucher
  static async deleteDiscountCode({ shopId, codeId }: any) {
    // kiem tra xem co dk su dung o dau khong, neu k co thi xoa
    return discountModel.findOneAndDelete({
      discountCode: codeId,
      discount_shop_id: convert2ObjectId(shopId)
    })
  }

  //
  static async cancelDiscountCode({ codeId, shopId, userId }: any) {
    // check exists
    const foundDiscount = await checkDiscountExists({
      model: discountModel,
      filter: {
        discountCode: codeId,
        discountShopId: convert2ObjectId(shopId)
      }
    })
    if (!foundDiscount) throw new Api400Error('Discount not exists')
    const data = await discountModel.findByIdAndUpdate(foundDiscount._id, {
      $pull: {
        discountUsersUsed: userId
      },
      $inc: {
        discountMaxUsers: 1,
        discountUsesCount: -1
      }
    })
    console.log(data)

    return { data }
  }
}

export default DiscountService
