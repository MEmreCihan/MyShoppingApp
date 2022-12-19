import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name:"filteredProducts",
    initialState: {
        filteredProduct: [],
        hasProduct: true
    },
    reducers: {
        filter(state, action) {
            state.filteredProduct = action.payload
        },
        setproduct(state, action) {
            state.hasProduct = action.payload
        }
    }
})

export const filterActions = filterSlice.actions;
export default filterSlice;