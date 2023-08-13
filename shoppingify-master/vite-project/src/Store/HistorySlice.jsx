import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
  name: "History",
  initialState: {
    allItemsInHistoryArray: [],
    shoppingHistory: [],
  },
  reducers: {
    addToHistory(state, action) {
      state.shoppingHistory.push(action.payload);
    },
    allItemsArray(state, action) {
      state.allItemsInHistoryArray.push(action.payload);
    },
  },
});

export const historyActions = historySlice.actions;

export default historySlice;
