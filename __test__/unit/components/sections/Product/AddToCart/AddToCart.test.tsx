import AddToCart from "@/app/components/sections/Product/AddToCart/AddToCart";
import { checkAddToCart } from "../../../../../helpers/sneakersHelper";
import {
  getCartItemData,
  getCartState,
  getEmptyNotification,
} from "../../../../../../fixtures/sneakers.fixture";
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
 * Unit testing for component: AddToCart
 */
describe("AddToCart component", () => {
  it("renders the add to cart button", () => {
    const state = getCartState();

    renderWithProviders(
      <NotificationProvider>
        <AddToCart
          counter={0}
          itemToAdd={getCartItemData()}
          resetCounter={jest.fn()}
        />
      </NotificationProvider>,
      {
        preloadedState: {
          cart: state,
        },
      },
    );

    checkAddToCart();
  });
});
