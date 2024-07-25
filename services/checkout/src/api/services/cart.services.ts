import { createUserCart, findCartByUserId, updateUserCartQuantity } from '@/databases/repositories/cart.repo'
import { Api401Error, Api404Error } from '../middlewares'
import cartModel from '@/databases/model/cart.model'

class CartServices {
  static async addOrCreate({ userId, payload }: any) {
    const { productId, quantity } = payload

    if (!userId || !productId || !quantity) {
      throw new Api401Error('Missing required fields')
    }

    // check product
    const foundProduct: any = await fetch(`http:localhost:8081/product/${productId}`)
      .then((res: any) => res.json())
      .catch((error) => console.log(error))
    console.log(foundProduct.metadata[0])

    if (!foundProduct.metadata[0]) throw new Api404Error('Product not found')
    // Check cart exists
    const userCart = await findCartByUserId(userId)

    const product = {
      productId,
      quantity
    }

    if (!userCart) {
      return await createUserCart({ userId, product })
    }
    // Has cart but hasn't product in it
    if (!userCart.cartProducts.length) {
      userCart.cartProducts = [product]
      return await userCart.save()
    }
    // Kiem tra product co trong cart khong
    const foundProductInCart = userCart.cartProducts.find((item) => item.productId === productId)
    if (!foundProductInCart) {
      // If product not exists in cart
      userCart.cartProducts = [...userCart.cartProducts, product]
      return await userCart.save()
    }

    return await updateUserCartQuantity({ userId, product })
  }

  //
  static async addToCartV2({ userId, shop_order_ids = [] }: any) {
    const { productId, quantity, old_quantity } = shop_order_ids[0]?.item_products[0]

    // check product
    const foundProduct: any = await fetch(`http:localhost:8081/product/${productId}`)
      .then((res: any) => res.json())
      .catch((error) => console.log(error))

    if (!foundProduct.metadata[0]) throw new Api404Error('Product not found')

    // compare
    if (foundProduct.metadata[0].productShop !== shop_order_ids[0]?.shopId) {
      throw new Api404Error('Product do not belong to the shop')
    }

    if (quantity === 0) {
      // todo deleted
    }

    return await updateUserCartQuantity({
      userId,
      product: {
        productId,
        quantity: quantity - old_quantity
      }
    })
  }

  static async deleteItemInCart({ userId, productId }: any) {
    const query = { cartUserId: userId, cartState: 'active' }
    const updateSet = {
      $pull: {
        cartProducts: {
          productId
        }
      }
    }

    return await cartModel.updateOne(query, updateSet)
  }

  static async getListUserCart({ userId }: any) {
    console.log(userId)

    return await cartModel
      .findOne({
        cartUserId: userId
      })
      .lean()
  }
}
export default CartServices
