import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    products: [],
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newProduct = action.payload;
      const existingProduct = state.products.find(
        (item) => item.id === newProduct.id
      );
      state.totalAmount++;
      state.totalPrice += newProduct.price;
      if (!existingProduct) {
        state.products.push({
          id: newProduct.id,
          img: newProduct.img,
          title: newProduct.title,
          description: newProduct.description,
          category: newProduct.category,
          price: newProduct.price,
          amount: 1,
          totalPrice: newProduct.price,
        });
      } else {
        existingProduct.amount = existingProduct.amount + 1;
        existingProduct.totalPrice =
          existingProduct.totalPrice + newProduct.price;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingProduct = state.products.find((item) => item.id === id);
      state.totalAmount--;
      state.totalPrice = state.totalPrice - existingProduct.price;
      if (existingProduct.amount === 1) {
        state.products = state.products.filter((item) => item.id !== id);
      } else {
        existingProduct.amount--;
        existingProduct.totalPrice =
          existingProduct.totalPrice - existingProduct.price;
      }
    },
    removeAllProducts(state) {
      state.products = [];
      state.totalAmount = 0;
      state.totalPrice = 0
    }
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
