import { createSlice } from '@reduxjs/toolkit';


interface IStateProps = {
    wishlist: any
}

const initialState: IStateProps= {
    wishlist: []
}


const reducerWishList = {
    addProductToWishlistAction: (state, action) => {
      const wishBag = state.wishlist.find((product:any) => product.id === action.payload.id);
      if (!wishBag) {
        state.wishlist.push({ ...action.payload});
      }
    },
    removeProductFromWishlistAction: (state, action) => {
      const products = state.wishlist.filter((prod:any) => prod.id !== action.payload);
      state.wishlist = products;
    },
  }

const options ={
  initialState,
  name: 'wishlist',
  reducers:reducerWishList,
}
const wishlistBag = createSlice({...options});


export const {
  addProductToWishlistAction,
  removeProductFromWishlistAction,
} = wishlistBag.actions;
export const wishlistReducer = wishlistBag.reducer;