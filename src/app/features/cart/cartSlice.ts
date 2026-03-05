import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { CartItem } from "@/app/components/types";

const initialState: CartItem[] = [];

/**
 * Short Urls slice
 */
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.push(action.payload);
    },
    /*TO DO: add removeFromCart reducer*/
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
