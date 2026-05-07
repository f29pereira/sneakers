import { renderWithProviders } from "../../../../helpers/reduxHelper";
import Cart from "@/app/components/sections/Cart/Cart";
import {
  getCartState,
  getEmptyCartState,
  getEmptyNotification,
} from "../../../../../fixtures/sneakers.fixture";
import { checkEmptyCart, checkCart } from "../../../../helpers/sneakersHelper";
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
 * Unit testing for component: Cart
 */
describe("Cart component", () => {
  it("renders an empty cart message, when no items are on the cart", () => {
    const emptyState = getEmptyCartState();

    renderWithProviders(
      <NotificationProvider>
        <Cart />
      </NotificationProvider>,
      {
        preloadedState: {
          cart: emptyState,
        },
      },
    );

    checkEmptyCart();
  });

  it("renders the title, subtotal text/value and checkout link, when the cart isn't empty", () => {
    const state = getCartState();

    const { store } = renderWithProviders(<Cart />, {
      preloadedState: {
        cart: state,
      },
    });

    const cartState = store.getState().cart;
    const subTotal = cartState.subTotal;
    const totalItems = cartState.totalQuantity;

    checkCart(subTotal, totalItems);
  });
});
