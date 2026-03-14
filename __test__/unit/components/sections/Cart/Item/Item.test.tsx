import { render } from "@testing-library/react";
import Item from "@/app/components/sections/Cart/Item/Item";
import { getCartItemData } from "../../../../../fixtures/sneakers.fixture";
import { checkItem } from "../../../../../helpers/sneakersHelper";

/**
 * Unit testing for component: Item
 */
describe("Item component", () => {
  const item = getCartItemData();

  render(
    <Item
      imagePath={item.imagePath}
      imageDescription={item.imageDescription}
      id={item.quantity}
      name={item.name}
      currentPrice={item.currentPrice}
      quantity={item.quantity}
    />,
  );

  it("renders the cart item: image, name, unit price, quantity and line total", () => {
    checkItem();
  });
});
