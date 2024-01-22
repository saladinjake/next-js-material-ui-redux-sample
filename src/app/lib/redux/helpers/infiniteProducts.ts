import axios from 'axios'
import  { createSlice } from '@reduxjs/toolkit'

import {
   loadPaginatedInfiniteProducts, 
   getProductDetail,
   loadInfiniteProducts
} from "@/app/api"

interface IState  {
    loading: boolean;
    payload: any;
    singleProductPayload: any;
    error: any
}

const initialState : IState = {
     payload: {
        products: []
    },
    singleProductPayload: {},
    error: {},
    loading: false,
   
}



export const productsSlice = createSlice({
    name: 'productsData',
    initialState,
    reducers: {},
    extraReducers: (ThunkBuildCase) => {
        ThunkBuildCase.addCase(loadInfiniteProducts.pending, state => {
            state.loading = true
        });
        ThunkBuildCase.addCase(loadInfiniteProducts.fulfilled, (state, action) => {
            state.loading = false
            state.payload.total = action.payload.total
            state.payload.products = action.payload.products
        });
        ThunkBuildCase.addCase(loadInfiniteProducts.rejected, (state, action) => {
            state.loading = false
            state.payload = {}
            state.error = action.error
        });

         ThunkBuildCase.addCase(getProductDetail.pending, state => {
            state.loading = true
        });
        ThunkBuildCase.addCase(getProductDetail.fulfilled, (state, action) => {
            state.loading = false
            state.singleProductPayload = action.payload
        });
        ThunkBuildCase.addCase(getProductDetail.rejected, (state, action) => {
            state.loading = false
            state.singleProductPayload = {}
            state.error = action.error
        });



        ThunkBuildCase.addCase(loadPaginatedInfiniteProducts.pending, state => {
            state.loading = true
        });
        ThunkBuildCase.addCase(loadPaginatedInfiniteProducts.fulfilled, (state, action) => {
            state.loading = false
            state.payload.total = action.payload.total
            state.payload.products = [...state.payload.products, ...action.payload.products]
        });
        ThunkBuildCase.addCase(loadPaginatedInfiniteProducts.rejected, (state, action) => {
            state.loading = false
            state.payload = {}
            state.error = action.error
        });
       
    }
})




export default productsSlice?.reducer