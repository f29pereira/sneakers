import { test } from "@playwright/test";
import {
  openMobileNav,
  closeMobileNav,
  expectMobileNavVisible,
  expectMobileNavHidden,
} from "../helpers/mobileHelpers";

/**
 * End to End testing: mobile navigation
 */
test.describe("Mobile navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/"); // baseURL
  });

  test("open the mobile navigation", async ({ page }) => {
    await openMobileNav(page);

    await expectMobileNavVisible(page);
  });

  test("close the mobile navigation", async ({ page }) => {
    await openMobileNav(page);

    await closeMobileNav(page);

    await expectMobileNavHidden(page);
  });
});
