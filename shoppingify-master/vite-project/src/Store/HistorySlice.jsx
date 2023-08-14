import { createSlice } from "@reduxjs/toolkit";

let history =
  localStorage.getItem("history") !== null
    ? JSON.parse(localStorage.getItem("history"))
    : [];

const historySlice = createSlice({
  name: "History",
  initialState: {
    allItemsInHistoryArray: history,
  },
  reducers: {
    allItemsArray(state, action) {
      state.allItemsInHistoryArray.push(action.payload);
      localStorage.setItem(
        "history",
        JSON.stringify(state.allItemsInHistoryArray.map((item) => item))
      );
    },
  },
});

export const historyActions = historySlice.actions;

export default historySlice;
