import { createSlice , PayloadAction} from '@reduxjs/toolkit'


interface IStateProps {
    wishlist: any
}

const initialState: IStateProps= {
    wishlist: []
}





const wishlistBag = createSlice({
  initialState,
  name: 'wishlist',
  reducers:{
    addProductToWishlistAction: (state: any, action:PayloadAction<any>) => {
      const wishBag = state.wishlist.find((product:any) => product.id === action.payload.id);
      if (!wishBag) {
        state.wishlist.push({ ...action.payload});
      }
    },
    removeProductFromWishlistAction: (state: any, action: PayloadAction<any>) => {
      const products = state.wishlist.filter((prod:any) => prod.id !== action.payload);
      state.wishlist = products;
    },
  },
});


export const {
  addProductToWishlistAction,
  removeProductFromWishlistAction,
} = wishlistBag.actions;
export const wishListReducer = wishlistBag.reducer;