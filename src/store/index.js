import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cartSlice";
import toggleSlice from './toggleSlice';

const store = configureStore({
    reducer: {toggleSlice: toggleSlice.reducer, cartSlice: cartSlice.reducer}
})

export default store;