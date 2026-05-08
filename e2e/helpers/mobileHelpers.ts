// Reusable helper functions for mobile only E2E tests

import { Page, expect } from "@playwright/test";
import {
  getNavLinksDesc,
  getProductImagesData,
} from "../../fixtures/sneakers.fixture";

/**
 * Opens the mobile navigation
 */
export const openMobileNav = async (page: Page) => {
  await page.getByRole("button", { name: "Open Menu" }).click();
};

/**
 * Closes the mobile navigation
 */
export const closeMobileNav = async (page: Page) => {
  await page.getByRole("button", { name: "Close Menu" }).click();
};

/**
 * Returns the mobile navigation links
 */
export const getLinks = (page: Page) => {
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
 * Asserts that the mobile navigation is visible
 */
export const expectMobileNavVisible = async (page: Page) => {
  const links = Object.values(getLinks(page));

  await expect(page.getByRole("button", { name: "Close Menu" })).toBeVisible();

  for (const link of links) {
    await expect(link).toBeVisible();
  }
};

/**
 * Asserts that the mobile navigation is hidden
 */
export const expectMobileNavHidden = async (page: Page) => {
  const links = Object.values(getLinks(page));

  await expect(page.getByRole("button", { name: "Close Menu" })).toBeHidden();

  for (const link of links) {
    await expect(link).toBeHidden();
  }
};
