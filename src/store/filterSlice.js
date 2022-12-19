import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name:"filteredProducts",
    initialState: {
        filteredProduct: []
    },
    reducers: {
        filter(state, action) {
            state.filteredProduct = action.payload
        }
    }
})

export const filterActions = filterSlice.actions;
export default filterSlice;