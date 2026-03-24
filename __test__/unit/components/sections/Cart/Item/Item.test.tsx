import Item from "@/app/components/sections/Cart/Item/Item";
import {
  getCartItemData,
  getCartState,
} from "../../../../../fixtures/sneakers.fixture";
import { checkItem } from "../../../../../helpers/sneakersHelper";
import { renderWithProviders } from "../../../../../helpers/reduxHelper";

/**
 * Unit testing for component: Item
 */
describe("Item component", () => {
  it("renders the cart item: image, name, unit price, quantity and line total", () => {
    const item = getCartItemData();
    const state = getCartState();

    renderWithProviders(
      <Item
        imagePath={item.imagePath}
        imageDescription={item.imageDescription}
        id={item.quantity}
        name={item.name}
        currentPrice={item.currentPrice}
        quantity={item.quantity}
      />,
      {
        preloadedState: {
          cart: state,
        },
      },
    );

    checkItem();
  });
});
