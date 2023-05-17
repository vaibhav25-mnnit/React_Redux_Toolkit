import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    data: null
}

export const getArticlesAsync = createAsyncThunk(
    'articles/getArticles',
    async () => {
        let res = await axios.get('https://fakerapi.it/api/v1/credit_cards');
        let D = await res.data;
        return D.data;
    }
)

export const articlesSlice = createSlice({

    name: 'articles',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getArticlesAsync.pending, (state) => {
                state.data = null
            })
            .addCase(getArticlesAsync.fulfilled, (state, action) => {
                state.data = action.payload;
            })
            .addCase(getArticlesAsync.rejected, (state, action) => {
                state.data = null;
            })
    }
})

export const selectArticles = (state) => state.article.data;

export default articlesSlice.reducer;