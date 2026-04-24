import { test, devices, expect, Page } from "@playwright/test";
import { getNavLinksDesc } from "../../fixtures/sneakers.fixture";

/**
 * Open mobile navigation
 */
const openNavigation = async (page: Page) => {
  await page.getByRole("button", { name: "Open Menu" }).click();
};

/**
 * Returns mobile navigation links
 */
const getLinks = (page: Page) => {
  const links = getNavLinksDesc();

  const collectionsLink = page.getByRole("link", {
    name: links.collectionsLink,
  });
  const menLink = page.getByRole("link", { name: links.menLink });
  const womanLink = page.getByRole("link", { name: links.womanLink });
  const aboutLink = page.getByRole("link", { name: links.aboutLink });
  const contactLink = page.getByRole("link", { name: links.contactLink });

  return { collectionsLink, menLink, womanLink, aboutLink, contactLink };
};

/**
 * End to End testing: mobile navigation
 */
test.describe("Mobile navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/"); // baseURL
  });

  test("open the mobile navigation", async ({ page }) => {
    await openNavigation(page);

    const closeBtn = page.getByRole("button", { name: "Close Menu" });

    const { collectionsLink, menLink, womanLink, aboutLink, contactLink } =
      getLinks(page);

    await expect(closeBtn).toBeVisible();
    await expect(collectionsLink).toBeVisible();
    await expect(menLink).toBeVisible();
    await expect(womanLink).toBeVisible();
    await expect(aboutLink).toBeVisible();
    await expect(contactLink).toBeVisible();
  });

  test("close the mobile navigation", async ({ page }) => {
    await openNavigation(page);

    // Close navigation
    const closeBtn = page.getByRole("button", { name: "Close Menu" });
    await closeBtn.click();

    const { collectionsLink, menLink, womanLink, aboutLink, contactLink } =
      getLinks(page);

    await expect(closeBtn).toBeHidden();
    await expect(collectionsLink).toBeHidden();
    await expect(menLink).toBeHidden();
    await expect(womanLink).toBeHidden();
    await expect(aboutLink).toBeHidden();
    await expect(contactLink).toBeHidden();
  });
});
