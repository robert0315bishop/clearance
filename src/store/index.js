import { configureStore } from "@reduxjs/toolkit";
import clearanceReducer from "./Clearance";

export const store = configureStore({
    reducer: {
        clearance: clearanceReducer,
    },
});