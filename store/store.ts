import { configureStore } from "@reduxjs/toolkit";
import { itemsAPI } from "./items/ItemsApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { cartReducer } from "./cart/CartSlice";

export const store = configureStore({
  reducer: { [itemsAPI.reducerPath]: itemsAPI.reducer, cart: cartReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(itemsAPI.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
