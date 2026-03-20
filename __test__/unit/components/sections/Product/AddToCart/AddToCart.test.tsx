import { render } from "@testing-library/react";
import AddToCart from "@/app/components/sections/Product/AddToCart/AddToCart";
import { checkAddToCart } from "../../../../../helpers/sneakersHelper";
import {
  getCartItemData,
  getCartState,
} from "../../../../../fixtures/sneakers.fixture";
import { renderWithProviders } from "../../../../../helpers/reduxHelper";

/**
 * Unit testing for component: AddToCart
 */
describe("AddToCart component", () => {
  it("renders the add to cart button", () => {
    const state = getCartState();

    renderWithProviders(
      <AddToCart counter={0} itemToAdd={getCartItemData()} />,
      {
        preloadedState: {
          cart: state,
        },
      },
    );

    checkAddToCart();
  });
});
