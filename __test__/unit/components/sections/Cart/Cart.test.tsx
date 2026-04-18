import { renderWithProviders } from "../../../../helpers/reduxHelper";
import Cart from "@/app/components/sections/Cart/Cart";
import {
  getCartState,
  getEmptyCartState,
} from "../../../../../fixtures/sneakers.fixture";
import { checkEmptyCart, checkCart } from "../../../../helpers/sneakersHelper";

/**
 * Unit testing for component: Cart
 */
describe("Cart component", () => {
  it("renders an empty cart message, when no items are on the cart", () => {
    const emptyState = getEmptyCartState();

    renderWithProviders(<Cart />, {
      preloadedState: {
        cart: emptyState,
      },
    });

    checkEmptyCart();
  });

  it("renders the title, subtotal text/value and checkout link, when the cart isn't empty", () => {
    const state = getCartState();

    const { store } = renderWithProviders(<Cart />, {
      preloadedState: {
        cart: state,
      },
    });

    const subTotal = store.getState().cart.subTotal;

    checkCart(subTotal);
  });
});
