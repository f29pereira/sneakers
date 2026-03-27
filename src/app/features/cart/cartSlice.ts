import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type {
  CartState,
  CartItem,
  RemoveFromCartPayload,
} from "@/app/components/types";

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
      const { id, currentPrice, quantity } = action.payload;
      const lineTotal = quantity * currentPrice;
      const isItemInCart = findItem(state.items, id);

      if (isItemInCart) {
        // Item already in cart, update item quantity
        isItemInCart.quantity += quantity;
      } else {
        state.items.push(action.payload);
      }

      // Update total quantity of items
      state.totalQuantity += quantity;

      // Update total value to pay
      state.subTotal += lineTotal;
    },
    removeFromCart: (state, action: PayloadAction<RemoveFromCartPayload>) => {
      const { id, currentPrice, quantity } = action.payload;
      const lineTotal = quantity * currentPrice;

      // Update total quantity of items
      state.totalQuantity -= quantity;

      // Update total value to pay
      state.subTotal -= lineTotal;

      // Update state with removed item
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});

/**
 * Find the item in the user's shopping cart
 */
const findItem = (itemList: CartItem[], itemId: number) => {
  return itemList.find((item) => item.id === itemId);
};

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
