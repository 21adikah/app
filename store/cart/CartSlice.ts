import {
  bindActionCreators,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import exp from "constants";
import { IProduct } from "../items/types";

const initialState: IProduct[] = [];

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IProduct>) => {
      state.push(action.payload);
    },
    deleteItem: (state, action: PayloadAction<{ id: number }>) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
  },
});

export const cartReducer = CartSlice.reducer;
export const cartActions = CartSlice.actions;
