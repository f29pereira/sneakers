import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { CartState, CartItem } from "@/app/components/types";

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  subTotal: 0,
};

/**
 * User's shopping cart slice
 */
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const itemQuantity = action.payload.quantity;
      const itemPrice = action.payload.currentPrice;
      const lineTotal = itemQuantity * itemPrice;
      const isTemInCart = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (isTemInCart) {
        isTemInCart.quantity += itemQuantity;
      } else {
        state.items.push(action.payload);
      }

      state.totalQuantity += action.payload.quantity;
      state.subTotal += lineTotal;
    },
    /*TO DO: add removeFromCart reducer*/
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
