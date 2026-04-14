import { test, devices, expect, Page } from "@playwright/test";
import { getCartItemData } from "../fixtures/sneakers.fixture";
import { getLineTotal } from "@/app/lib/utils";

/**
 * Open shopping cart
 */
const openShoppingCart = async (page: Page) => {
  const cartBtn = page.getByRole("button", { name: "Shopping Cart" });
  await cartBtn.click();
};

/**
 * Increase item counter and add item to shopping cart
 */
const addItem = async (page: Page) => {
  const increaseBtn = page.getByRole("button", { name: "Increase quantity" });
  await increaseBtn.click();
  await increaseBtn.click();
  await increaseBtn.click();

  const addToCart = page.getByRole("button", { name: "Add to cart" });
  await addToCart.click();
};

/**
 * End to End testing: user shopping cart
 */
test.describe("User shopping cart", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/"); // baseURL
  });

  test("shows empty cart message when there no items in the cart", async ({
    page,
  }) => {
    await openShoppingCart(page);

    const title = page.getByRole("heading", {
      level: 2,
      name: "Cart",
    });
    const emptyMsg = page.getByText("Your cart is empty.");

    await expect(title).toBeVisible();
    await expect(emptyMsg).toBeVisible();
  });

  test("shows item info and checkout link, after adding an item to the cart", async ({
    page,
  }) => {
    const item = getCartItemData();

    await addItem(page);

    await openShoppingCart(page);

    const title = page.getByRole("heading", {
      level: 2,
      name: "Cart",
    });

    // Item info
    const itemContainer = page.getByTestId("cart");
    const img = itemContainer.getByRole("img", {
      name: item.imageDescription,
    });

    const name = page.getByRole("heading", {
      level: 3,
      name: item.name,
    });
    const currenPriceXQuantity = page.getByText(
      `$${item.currentPrice} x ${item.quantity}`,
    );
    const lineTotal = page.getByText(
      `$${getLineTotal(item.currentPrice, item.quantity)}`,
    );
    const removeItemBtn = page.getByRole("button", { name: "Remove Item" });

    const subTotalText = page.getByText("Subtotal:");
    const subTotalValue = page.getByTestId("cart");
    subTotalValue.getByText(getLineTotal(item.currentPrice, item.quantity));

    // Checkout link
    const checkout = page.getByRole("link", { name: "Checkout" });

    await expect(title).toBeVisible();
    await expect(img).toBeVisible();
    await expect(name).toBeVisible();
    await expect(currenPriceXQuantity).toBeVisible();
    await expect(removeItemBtn).toBeVisible();
    await expect(lineTotal).toBeVisible();
    await expect(subTotalText).toBeVisible();
    await expect(subTotalValue).toBeVisible();
    await expect(checkout).toBeVisible();
  });

  test("allows the user to remove items from the cart", async ({ page }) => {
    await addItem(page);

    await openShoppingCart(page);

    const removeItemBtn = page.getByRole("button", { name: "Remove Item" });
    removeItemBtn.click();

    const emptyMsg = page.getByText("Your cart is empty.");

    await expect(emptyMsg).toBeVisible();
  });
});
