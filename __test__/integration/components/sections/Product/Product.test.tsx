import { screen } from "@testing-library/react";
import { getEmptyCartState } from "../../../../fixtures/sneakers.fixture";
import { renderWithProviders } from "../../../../helpers/reduxHelper";
import Product from "@/app/components/sections/Product/Product";
import userEvent from "@testing-library/user-event";
import type { AppStore } from "@/app/lib/store";

/**
 * Integration testing for component: Product
 */
describe("Product component", () => {
  let store: AppStore | undefined;

  /**
   * Mock: window matchMedia (Gallery Component)
   */
  beforeEach(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  /**
   * Mock: User's shopping cart state
   */
  beforeEach(() => {
    const emptyState = getEmptyCartState();

    const rendered = renderWithProviders(<Product />, {
      preloadedState: {
        cart: emptyState,
      },
    });

    store = rendered.store;
  });

  it("doesn't allow the user to add product to cart if product counter is 0", async () => {
    const addToCartBtn = screen.getByRole("button", { name: "Add to cart" });

    expect(addToCartBtn).toBeDisabled();

    // Check if shopping cart state is empty
    expect(store?.getState().cart.items.length).toBe(0);
  });

  it("allows the user to increase product counter value", async () => {
    const increaseBtn = screen.getByRole("button", {
      name: "Increase quantity",
    });

    // User clicks the increase quantity button 3 times
    await userEvent.click(increaseBtn);
    await userEvent.click(increaseBtn);
    await userEvent.click(increaseBtn);

    const counter = screen.getByText("3");

    expect(counter).toBeVisible();
  });

  it("allows the user to add a product to the shopping cart", async () => {
    const increaseBtn = screen.getByRole("button", {
      name: "Increase quantity",
    });
    const addToCartBtn = screen.getByRole("button", { name: "Add to cart" });

    // User clicks the increase quantity button 3 times
    await userEvent.click(increaseBtn);
    await userEvent.click(increaseBtn);
    await userEvent.click(increaseBtn);

    // User clicks the add to cart button
    await userEvent.click(addToCartBtn);

    // Check if shopping cart state has the product
    expect(store?.getState().cart.items.length).toBe(1);
  });
});
