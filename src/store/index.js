import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter";
import productsReducer from "./slices/products";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        products: productsReducer,
    },
});
