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
 * Checks for the success notification: icon, message and close button
 * @param page    - Playwright page object
 * @param message - notification message
 */
const checkNotification = async (page: Page, message: string) => {
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
 * Checks if the notification is closed after given timeout
 * @param timeoutValue - timeout in milliseconds
 */
const isNotificationClosed = async (page: Page, timeoutValue: number) => {
  await expect(page.getByTestId("notification")).not.toBeVisible({
    timeout: timeoutValue,
  });
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

  test("show item info, subtotal, number of items and checkout link, after adding an item to the cart", async ({
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

    // SubTotal
    const subTotalContainer = page.getByTestId("subTotal");
    const subTotalText = subTotalContainer.getByText("Subtotal:");
    const subTotalValue = subTotalContainer.getByText(
      `$${item.currentPrice * item.quantity}`,
    );

    // Number of items
    const totalItemsContainer = page.getByTestId("totalQuantity");
    const totalItemsText = totalItemsContainer.getByText("Items:");
    const totalItemsValue = totalItemsContainer.getByText(`3`);

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
    await expect(totalItemsText).toBeVisible();
    await expect(totalItemsValue).toBeVisible();
    await expect(checkout).toBeVisible();
  });

  test("show success notification, when adding item to the cart, which disappears automatically after 3 seconds", async ({
    page,
  }) => {
    await addItem(page);

    await openShoppingCart(page);

    await checkNotification(page, "Item added to cart");

    await isNotificationClosed(page, 4000);
  });

  test("show success notification, when adding item to the cart, which is closed by the user", async ({
    page,
  }) => {
    await addItem(page);

    await openShoppingCart(page);

    await checkNotification(page, "Item added to cart");

    await page.getByRole("button", { name: "Close notification" }).click();

    await isNotificationClosed(page, 4000);
  });

  test("remove item from the cart", async ({ page }) => {
    await addItem(page);

    await openShoppingCart(page);

    // Remove item
    await page.getByRole("button", { name: "Remove Item" }).click();

    await expect(page.getByText("Your cart is empty.")).toBeVisible();
  });

  test("show success notification, when removing item to the cart", async ({
    page,
  }) => {
    await addItem(page);

    await openShoppingCart(page);

    // Remove item
    await page.getByRole("button", { name: "Remove Item" }).click();

    await checkNotification(page, "Item removed from cart");

    await isNotificationClosed(page, 6000);
  });
});
