import { configureStore } from "@reduxjs/toolkit";
import StoreSlice from "../features/StoreSlice";

export const store = configureStore({
  reducer: {
    store: StoreSlice,
  }
});