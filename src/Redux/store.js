import { configureStore } from "@reduxjs/toolkit";
import contactListSlice from "./reducers";

export const store = configureStore({
  reducer: {
    phonebook: contactListSlice,
  },
});
