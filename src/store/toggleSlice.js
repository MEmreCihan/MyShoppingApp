import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    productIsAdded: false,
  },
  reducers: {
    toggle(state, action) {
      state.productIsAdded = action.payload;
    },
  },
});

export const toggleActions = toggleSlice.actions;
export default toggleSlice;
