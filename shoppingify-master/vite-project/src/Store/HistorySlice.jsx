import { createSlice } from "@reduxjs/toolkit";

let history = localStorage.getItem("history");

if (history === null) {
  history = [];
} else {
  history = JSON.parse(history);
}

const historySlice = createSlice({
  name: "History",
  initialState: {
    allItemsInHistoryArray: history,
  },
  reducers: {
    allItemsArray(state, action) {
      state.allItemsInHistoryArray = [
        ...state.allItemsInHistoryArray,
        action.payload,
      ];
      localStorage.setItem(
        "history",
        JSON.stringify(state.allItemsInHistoryArray)
      );
    },
  },
});

export const historyActions = historySlice.actions;

export default historySlice;
