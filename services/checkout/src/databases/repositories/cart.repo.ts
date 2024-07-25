import cartModel from '../model/cart.model'

// Handle create cart, if it exists then addition quantity if it (outside cart)

type CartProps = {
  userId: string
  product: object | any
  productId?: string
}
export const createUserCart = async ({ userId, product }: CartProps) => {
  const query = { cartUserId: userId, cartState: 'active' },
    updateOrInsert = {
      $addToSet: {
        cartProducts: product
      }
    },
    options = { upsert: true, new: true }

  return await cartModel.findOneAndUpdate(query, updateOrInsert, options)
}

// Handle quantity in cart (inside cart)
export const updateUserCartQuantity = async ({ userId, product }: CartProps) => {
  const { productId, quantity } = product

  const query = {
      cartUserId: userId,
      'cartProducts.productId': productId,
      cartState: 'active'
    },
    updateSet = {
      // $inc: thuat toan tang (increase)
      $inc: {
        // $: tim va update chinh phan tu do
        'cartProducts.$.quantity': quantity
      }
    },
    options = { upsert: true, new: true }

  return await cartModel.findOneAndUpdate(query, updateSet, options)
}

export const findCartByUserId = async (userId: string) => await cartModel.findOne({ cartUserId: userId })

export const deleteUserItemCart = async ({ userId, productId }: CartProps) => {
  const query = { cartUserId: userId, cartState: 'active' },
    updateSet = {
      $pull: {
        cartProducts: {
          productId
        }
      }
    }

  return await cartModel.updateOne(query, updateSet)
}
