import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { CartState, CartItem } from "@/app/components/types";

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  subTotal: 0,
};

/**
 * Short Urls slice
 */
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
    },
    /*TO DO: add removeFromCart reducer*/
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
