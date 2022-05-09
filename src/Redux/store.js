import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import localStorage from "redux-persist/lib/storage";
import contactListSlice from "./reducers";
import persistReducer from "redux-persist/lib/persistReducer";

const persistConfig = {
  key: 'root',
  storage: localStorage,
  blacklist: ['status', 'filter','isLoading']
}
const persitedReducer = persistReducer(persistConfig, contactListSlice)
export const store = configureStore({
  reducer: {
    phonebook: persitedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});