import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { CartItem } from "@/app/components/types";

/**
 * Type for the cart slice
 * @property items         - list of items in the cart
 * @property totalQuantity - quanty of items in the cart
 * @property totalValue    - total value to pay
 */
type Cart = {
  items: CartItem[];
  totalQuantity: number;
  totalValue: number;
};

const initialState: Cart = {
  items: [],
  totalQuantity: 0,
  totalValue: 0,
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
