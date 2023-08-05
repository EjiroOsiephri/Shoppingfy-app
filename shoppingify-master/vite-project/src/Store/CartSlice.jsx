import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
    totalCartQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalCartQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          quantity: 1,
          title: newItem.title,
        });
      } else {
        existingItem.quantity++;
      }
    },
    removeItemFromCart(state, action) {},
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
