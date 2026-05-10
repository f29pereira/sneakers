// Reusable helper functions for mobile/desktop E2E tests

import { Page, expect } from "@playwright/test";
import { getCartItemData } from "../../fixtures/sneakers.fixture";
import { getLineTotal } from "@/app/lib/utils";

/**
 * Opens the shopping cart pop-up
 */
export const openShoppingCart = async (page: Page) => {
  await page.getByRole("button", { name: "Shopping Cart" }).click();
};

/**
 * Increases the item counter and adds an item to the shopping cart
 * @param itemCounter item counter
 */
export const addItem = async (page: Page, itemCounter: number) => {
  const increaseBtn = page.getByRole("button", { name: "Increase quantity" });

  if (Number.isInteger(itemCounter) && itemCounter > 0) {
    for (let index = 0; index < itemCounter; index++) {
      await increaseBtn.click();
    }

    await page.getByRole("button", { name: "Add to cart" }).click();
  } else {
    throw new Error("Invalid item counter value");
  }
};

/**
 * Asserts that the shopping cart has:
 * - title
 * - item info and remove button
 * - subtotal and number of items
 * - checkout link
 * @param itemCounter item counter
 */
export const expectCartWithItem = async (page: Page, itemCounter: number) => {
  if (Number.isInteger(itemCounter) && itemCounter > 0) {
    // Title
    const title = page.getByRole("heading", {
      level: 2,
      name: "Cart",
    });

    // Item info
    const item = getCartItemData();

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

    // Subtotal and number of items
    const subTotalContainer = page.getByTestId("subTotal");
    const subTotalText = subTotalContainer.getByText("Subtotal:");
    const subTotalValue = subTotalContainer.getByText(
      `$${item.currentPrice * item.quantity}`,
    );

    const totalItemsContainer = page.getByTestId("totalQuantity");
    const totalItemsText = totalItemsContainer.getByText("Items:");
    const totalItemsValue = totalItemsContainer.getByText(`${itemCounter}`);

    // Checkout link
    const checkout = page.getByRole("link", { name: "Checkout" });

    await expect(title).toBeVisible();
    await expect(img).toBeVisible();
    await expect(name).toBeVisible();
    await expect(currenPriceXQuantity).toBeVisible();
    await expect(lineTotal).toBeVisible();
    await expect(removeItemBtn).toBeVisible();
    await expect(subTotalText).toBeVisible();
    await expect(subTotalValue).toBeVisible();
    await expect(totalItemsText).toBeVisible();
    await expect(totalItemsValue).toBeVisible();
    await expect(checkout).toBeVisible();
  } else {
    throw new Error("Invalid item counter value");
  }
};

/**
 * Asserts that the shopping cart is empty
 */
export const expectCartEmpty = async (page: Page) => {
  const title = page.getByRole("heading", {
    level: 2,
    name: "Cart",
  });
  const emptyMsg = page.getByText("Your cart is empty.");

  await expect(title).toBeVisible();
  await expect(emptyMsg).toBeVisible();
};

/**
 * Asserts that the success notificaton has: icon, message and close button
 * @param message notification message
 */
export const expectNotification = async (page: Page, message: string) => {
  const notificationContainer = page.getByTestId("notification");
  const successIcon = notificationContainer.getByTestId("successIcon");
  const notificationText = notificationContainer.getByText(message);
  const closeBtn = notificationContainer.getByRole("button", {
    name: "Close notification",
  });

  await expect(successIcon).toBeVisible();
  await expect(notificationText).toBeVisible();
  await expect(closeBtn).toBeVisible();
};

/**
 * Asserts that the notification is closed after given timeout
 * @param timeoutValue - timeout in milliseconds
 */
export const expectNotificationClosed = async (
  page: Page,
  timeoutValue: number,
) => {
  await expect(page.getByTestId("notification")).not.toBeVisible({
    timeout: timeoutValue,
  });
};

/**
 * Click the theme toggle button
 * @param btnName toggle button current name
 */
export const clickThemeToggle = async (page: Page, btnName: string) => {
  await page.getByRole("button", { name: btnName }).click();
};
