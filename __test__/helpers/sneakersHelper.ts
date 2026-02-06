import { screen } from "@testing-library/react";
import { getNavLinksDesc } from "../fixtures/sneakers.fixture";

/**
 * Helper function: checks MobileNav component elements visibility
 */
export const checkMobileNav = () => {
  // Close navigation pop-up button
  const closeBtn = screen.getByRole("button", { name: "Close Menu" });

  // Main navigation links
  const mobileLinks = getMainNavigation();

  // Check elements visibility
  expect(closeBtn).toBeVisible();
  expect(mobileLinks.collections).toBeVisible();
  expect(mobileLinks.men).toBeVisible();
  expect(mobileLinks.woman).toBeVisible();
  expect(mobileLinks.contact).toBeVisible();
};

/**
 * Helper function: returns main navigation links
 */
const getMainNavigation = () => {
  const data = getNavLinksDesc();

  return {
    collections: screen.getByRole("link", {
      name: data.collectionsLink,
    }),
    men: screen.getByRole("link", { name: data.menLink }),
    woman: screen.getByRole("link", { name: data.womanLink }),
    about: screen.getByRole("link", { name: data.aboutLink }),
    contact: screen.getByRole("link", { name: data.contactLink }),
  };
};
