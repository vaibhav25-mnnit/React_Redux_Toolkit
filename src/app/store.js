import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import calculaterSlice from '../features/calculater/calculaterSlice';
import articlesSlice from '../features/articles/articlesSlice';
import productsSlice from '../features/shopping/products/productsSlice';
import cartSlice from '../features/shopping/cart/cartSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    calculater: calculaterSlice,
    article: articlesSlice,
    products: productsSlice,
    cart: cartSlice
  },
});
