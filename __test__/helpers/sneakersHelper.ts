import { screen } from "@testing-library/react";
import {
  getNavLinksDesc,
  getUserLinksDesc,
} from "../fixtures/sneakers.fixture";

/**
 * Helper function: checks the visibility of the following elements, in the MobileNav component:
 * - Close navigation pop-up button
 * - Main navigation links
 */
export const checkMobileNav = () => {
  const closeBtn = screen.getByRole("button", { name: "Close Menu" });
  const mobileLinks = getMainNavigation();

  expect(closeBtn).toBeVisible();
  expect(mobileLinks.collections).toBeVisible();
  expect(mobileLinks.men).toBeVisible();
  expect(mobileLinks.woman).toBeVisible();
  expect(mobileLinks.contact).toBeVisible();
};

/**
 * Helper function: checks the visibility of the following elements, in the Nav component:
 * - Open navigation pop-up button
 * - Brand Logo
 * - Main and User navigation links
 */
export const checkNav = () => {
  const brandLogo = screen.getByAltText("Sneakers Logo");
  const mainLinks = getMainNavigation();
  const userLinks = getUserNavigation();

  checkMobileNavToggle();
  expect(brandLogo).toBeVisible();
  expect(mainLinks.collections).toBeVisible();
  expect(mainLinks.men).toBeVisible();
  expect(mainLinks.woman).toBeVisible();
  expect(mainLinks.contact).toBeVisible();
  expect(userLinks.shopping).toBeVisible();
  expect(userLinks.profile).toBeVisible();
};

/**
 * Helper function: checks the visibility of the following elements, in the MobileNavToggle component:
 * - Open navigation pop-up button
 */
export const checkMobileNavToggle = () => {
  const hamburgerBtn = screen.getByRole("button", { name: "Open Menu" });

  expect(hamburgerBtn).toBeVisible();
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

/**
 * Helper function: returns user navigation links
 */
const getUserNavigation = () => {
  const data = getUserLinksDesc();

  return {
    shopping: screen.getByRole("link", {
      name: data.shoppingCartLink,
    }),
    profile: screen.getByRole("link", { name: data.profileLink }),
  };
};
