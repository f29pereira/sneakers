import { test, devices, expect, Page } from "@playwright/test";
import { getCartItemData } from "../../fixtures/sneakers.fixture";
import { getLineTotal } from "@/app/lib/utils";

/**
 * Open the shopping cart pop-up
 */
const openShoppingCart = async (page: Page) => {
  await page.getByRole("button", { name: "Shopping Cart" }).click();
};

/**
 * Increase item counter and add item to shopping cart
 */
const addItem = async (page: Page) => {
  const increaseBtn = page.getByRole("button", { name: "Increase quantity" });
  await increaseBtn.click();
  await increaseBtn.click();
  await increaseBtn.click();

  await page.getByRole("button", { name: "Add to cart" }).click();
};

/**
 * End to End testing: user shopping cart
 */
test.describe("User shopping cart", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/"); // baseURL
  });

  test("show message when cart is empty", async ({ page }) => {
    await openShoppingCart(page);

    const title = page.getByRole("heading", {
      level: 2,
      name: "Cart",
    });
    const emptyMsg = page.getByText("Your cart is empty.");

    await expect(title).toBeVisible();
    await expect(emptyMsg).toBeVisible();
  });

  test("show item info and checkout link, after adding an item to the cart", async ({
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

    const subTotalContainer = page.getByTestId("subTotal");
    const subTotalText = subTotalContainer.getByText("Subtotal:");
    const subTotalValue = subTotalContainer.getByText(
      `$${item.currentPrice * item.quantity}`,
    );

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

  test("remove item from the cart", async ({ page }) => {
    await addItem(page);

    await openShoppingCart(page);

    // Remove item
    await page.getByRole("button", { name: "Remove Item" }).click();

    await expect(page.getByText("Your cart is empty.")).toBeVisible();
  });
});
