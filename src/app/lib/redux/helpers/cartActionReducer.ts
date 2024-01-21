import { createSlice } from '@reduxjs/toolkit'

interface IStateProps= {
  cart: any
}

const initialState: IStateProps  = {
  //todo: add local storage
  cart: [],
}

const cartReducer = {
  addToShoppingCartAction: (state, action) => {
    const shoppingBag = state?.cart?.find(
      (product: any) => product.id === action?.payload?.id
    )
    if (shoppingBag) {
      //add existing cart
      shoppingBag.quantity = shoppingBag.quantity + 1
    } else {
      const payload =action?.payload
      state.cart.push({ ...payload, quantity: 1 })
    }
  },
  increaseProductQuantityAction: (state, action) => {
    const shoppingBagItem = state?.cart?.find(
      (product: any) => product.id === action?.payload
    )
    if (shoppingBagItem) {
      shoppingBagItem.quantity++
    }
  },
  decreaseProductQuantityAction: (state, action) => {
    const shoppingBagItem = state?.cart?.find(
      (product: any) => product.id === action?.payload
    )
    if (shoppingBagItem) {
      if (shoppingBagItem.quantity === 1) {
        shoppingBagItem.quantity = 1
      } else {

        shoppingBagItem.quantity = shoppingBagItem?.quantity -1
      }
    }
  },
  removeProductItemAction: (state, action) => {
    const removeItem = state.cart.filter(
      (product: any) => product.id !== action.payload
    )
    state.cart = removeItem
  },
}

const shoppingCartOptions = {
  name: 'cart',
  initialState,
  reducers: cartReducer,
}

const shoppingCart = createSlice({ ...shoppingCartOptions  })


export const {
  removeProductItemAction,
  decreaseProductQuantityAction,
  increaseProductQuantityAction,
  addToShoppingCartAction,
  
  
} = shoppingCart.actions
export const cartReducer = shoppingCart.reducer
