import Item from "@/app/components/sections/Cart/Item/Item";
import {
  getCartItemData,
  getCartState,
  getEmptyNotification,
} from "../../../../../../fixtures/sneakers.fixture";
import { checkItem } from "../../../../../helpers/sneakersHelper";
import { renderWithProviders } from "../../../../../helpers/reduxHelper";
import type { NotificationContextType } from "@/app/components/types";
import NotificationProvider from "@/app/components/ui/Notification/NotificationProvider";

// Mock NotificationContext
const mockContext: NotificationContextType = {
  notification: getEmptyNotification(),
  notify: jest.fn(),
  closeNotification: jest.fn(),
};

// Mock useNotification hook
jest.mock("@/app/components/customHooks/useNotification", () => ({
  useNotification: () => ({ ...mockContext }),
}));

/**
 * Unit testing for component: Item
 */
describe("Item component", () => {
  it("renders the cart item: image, name, unit price, quantity and line total", () => {
    const item = getCartItemData();
    const state = getCartState();

    renderWithProviders(
      <NotificationProvider>
        <Item
          imagePath={item.imagePath}
          imageDescription={item.imageDescription}
          id={item.quantity}
          name={item.name}
          currentPrice={item.currentPrice}
          quantity={item.quantity}
        />
      </NotificationProvider>,
      {
        preloadedState: {
          cart: state,
        },
      },
    );

    checkItem();
  });
});
