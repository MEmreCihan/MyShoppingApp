import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    productIsAdded: false,
    productIsOrdered: false,
  },
  reducers: {
    toggle(state, action) {
      state.productIsAdded = action.payload;
    },
    toggleOrder(state, action) {
      state.productIsOrdered = action.payload;
    }
  },
});

export const toggleActions = toggleSlice.actions;
export default toggleSlice;
