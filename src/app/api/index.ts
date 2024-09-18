import axios from 'axios'
import  {  createAsyncThunk } from '@reduxjs/toolkit'

export const loadInfiniteProducts = createAsyncThunk('product/productsData',
    async (data:any) => {
        const { limit=10, skip = 0} = data
        try {
            const response = await axios.get(`https://dummyjson.com/products/?limit=${limit}&skip=${skip}`)
            return response.data
        }catch(err: any){
            throw err;
        }
    }
)

export const getProductDetail = createAsyncThunk('product/singleProductData',
    async (data:any) => {
        const { id } = data
        try {
            const response = await axios.get(`https://dummyjson.com/products/${id}`)
            return response.data
        }catch(err: any){
            throw err;
        }
    }
)

export const loadPaginatedInfiniteProducts = createAsyncThunk('product/moreProductsData',
    async (data:any) => {
        const { limit=10, skip = 0} = data
        try {
            const response = await axios.get(`https://dummyjson.com/products/?limit=${limit}&skip=${skip}`)
            return response.data
        }catch(err: any){
            throw err;
        }
    }
)

