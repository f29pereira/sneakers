import { render } from "@testing-library/react";
import AddToCart from "@/app/components/sections/Product/AddToCart/AddToCart";
import { checkAddToCart } from "../../../../../helpers/sneakersHelper";

/**
 * Unit testing for component: AddToCart
 */
describe("AddToCart component", () => {
  render(<AddToCart />);

  it("renders the add to cart button", () => {
    checkAddToCart();
  });
});
