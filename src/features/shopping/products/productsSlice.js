import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";


export const STATUS = Object.freeze({
    IDEAL: 'ideal',
    LOADING: 'loading',
    ERROR: 'error',
})

const initialState = {
    data: [],
    status: STATUS.IDEAL
}



export const getProducts = createAsyncThunk(
    'products/getProducts',
    async () => {
        const res = await axios.get('https://fakestoreapi.com/products');
        const data = await res.data;
        return data;
    }
)


const productsSlice = createSlice({

    name: 'products',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.status = STATUS.LOADING
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.status = STATUS.IDEAL;
                state.data = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.status = STATUS.ERROR;
            })
    }

})

export default productsSlice.reducer;



