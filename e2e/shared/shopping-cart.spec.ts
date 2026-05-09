import { test } from "@playwright/test";
import {
  openShoppingCart,
  addItem,
  expectCartEmpty,
  expectCartWithItem,
  expectNotification,
  expectNotificationClosed,
} from "../helpers/sharedHelper";

/**
 * End to End testing: user shopping cart
 */
test.describe("User shopping cart", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/"); // baseURL
  });

  test("show message when cart is empty", async ({ page }) => {
    await openShoppingCart(page);

    await expectCartEmpty(page);
  });

  test("show item info, subtotal, number of items and checkout link, after adding an item to the cart", async ({
    page,
  }) => {
    const itemQuantity = 3;

    await addItem(page, itemQuantity);

    await openShoppingCart(page);

    await expectCartWithItem(page, itemQuantity);
  });

  test("show success notification, when adding item to the cart, which disappears automatically after 3 seconds", async ({
    page,
  }) => {
    await addItem(page, 3);

    await openShoppingCart(page);

    await expectNotification(page, "Item added to cart");

    await expectNotificationClosed(page, 4000);
  });

  test("show success notification, when adding item to the cart, which is closed by the user", async ({
    page,
  }) => {
    await addItem(page, 3);

    await openShoppingCart(page);

    await expectNotification(page, "Item added to cart");

    // Click "Close notification" button
    await page.getByRole("button", { name: "Close notification" }).click();

    await expectNotificationClosed(page, 4000);
  });

  test("remove item from the cart", async ({ page }) => {
    await addItem(page, 3);

    await openShoppingCart(page);

    // Click "Remove Item" button
    await page.getByRole("button", { name: "Remove Item" }).click();

    await expectCartEmpty(page);
  });

  test("show success notification, when removing item to the cart", async ({
    page,
  }) => {
    await addItem(page, 3);

    await openShoppingCart(page);

    // Click "Remove Item" button
    await page.getByRole("button", { name: "Remove Item" }).click();

    await expectNotification(page, "Item removed from cart");

    await expectNotificationClosed(page, 6000);
  });
});
