import { configureStore } from "@reduxjs/toolkit";
import transformSilce from "./transformSilce";

export const store = configureStore({
  reducer: {
    transform: transformSilce,
  },
})