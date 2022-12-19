import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cartSlice";
import toggleSlice from './toggleSlice';
import filterSlice from "./filterSlice";

const store = configureStore({
    reducer: {toggleSlice: toggleSlice.reducer, cartSlice: cartSlice.reducer, filterSlice: filterSlice.reducer}
})

export default store;