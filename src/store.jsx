import { configureStore } from "@reduxjs/toolkit";
import foodReducer from "./features/foodSlice";

export const store = configureStore({
  reducer: {
    foods: foodReducer,
  },
});
