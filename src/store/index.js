import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cartSlice";
import productsOfCategory from './productsOfCategory';

const store = configureStore({
    reducer: {products: productsOfCategory.reducer, cartSlice: cartSlice.reducer}
})

export default store;