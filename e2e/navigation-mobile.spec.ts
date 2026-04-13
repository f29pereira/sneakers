import { test, devices, expect, Page } from "@playwright/test";
import { getNavLinksDesc } from "../fixtures/sneakers.fixture";

test.use({ ...devices["Pixel 5"] });

/**
 * Open mobile navigation
 */
const openNavigation = async (page: Page) => {
  const hamburgerBtn = page.getByRole("button", { name: "Open Menu" });
  await hamburgerBtn.click();
};

/**
 * Returns movile navigation links
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

  test("has mobile navigation button", async ({ page }) => {
    const hamburgerBtn = page.getByRole("button", { name: "Open Menu" });
    await expect(hamburgerBtn).toBeVisible();
  });

  test("allows the user to open the mobile navigation", async ({ page }) => {
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

  test("allows the user to close the mobile navigation", async ({ page }) => {
    await openNavigation(page);

    const closeBtn = page.getByRole("button", { name: "Close Menu" });

    await closeBtn.click(); // Close mobile navigation

    const { collectionsLink, menLink, womanLink, aboutLink, contactLink } =
      getLinks(page);

    await expect(closeBtn).not.toBeVisible();
    await expect(collectionsLink).not.toBeVisible();
    await expect(menLink).not.toBeVisible();
    await expect(womanLink).not.toBeVisible();
    await expect(aboutLink).not.toBeVisible();
    await expect(contactLink).not.toBeVisible();
  });
});
