import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";
import historySlice from "./HistorySlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    history: historySlice.reducer,
  },
});

export default store;
