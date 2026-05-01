import { test, expect, Page } from "@playwright/test";

/**
 * Click the theme toggle button
 */
const clickThemeToggle = async (page: Page, btnName: string) => {
  await page.getByRole("button", { name: btnName }).click();
};

/**
 * End to End testing: app theme toggle
 */
test.describe("App theme toggle", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/"); // baseURL
  });

  test("apply white background to the body as default behaviour", async ({
    page,
  }) => {
    const background = "rgb(255, 255, 255)"; // hsl(0, 0%, 100%);

    await expect(page.locator("body")).toHaveCSS(
      "background-color",
      background,
    );
  });

  test("add dark-theme class to page body on toggle", async ({ page }) => {
    await clickThemeToggle(page, "Set Dark theme");
    await expect(page.locator("body")).toHaveClass(/dark-theme/); // Regex required due to CSS modules
  });

  test("apply dark background to the body when dark-theme class is present", async ({
    page,
  }) => {
    const background = "rgb(25, 29, 36)"; // hsl(220, 18%, 12%)

    await clickThemeToggle(page, "Set Dark theme");
    await expect(page.locator("body")).toHaveCSS(
      "background-color",
      background,
    );
  });

  test("remove dark-theme class on second toggle", async ({ page }) => {
    await clickThemeToggle(page, "Set Dark theme");
    await clickThemeToggle(page, "Set Light theme");
    await expect(page.locator("body")).not.toHaveClass(/dark-theme/); // Regex required due to CSS modules
  });
});
