import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    productIsAdded: false,
    productIsOrdered: false,
    userIsSub: false,
  },
  reducers: {
    toggle(state, action) {
      state.productIsAdded = action.payload;
    },
    toggleOrder(state, action) {
      state.productIsOrdered = action.payload;
    },
    toggleSub(state, action) {
      state.userIsSub = action.payload;
    }
  },
});

export const toggleActions = toggleSlice.actions;
export default toggleSlice;
