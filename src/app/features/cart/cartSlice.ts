import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { CartItem } from "@/app/components/types";

/**
 * Type for the cart slice
 * @property items         - list of items in the cart
 * @property totalQuantity - quanty of items in the cart
 * @property subTotal      - total value to pay
 */
type Cart = {
  items: CartItem[];
  totalQuantity: number;
  subTotal: number;
};

const initialState: Cart = {
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
