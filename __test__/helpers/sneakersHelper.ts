import { screen } from "@testing-library/react";
import { getNavLinksDesc } from "../fixtures/sneakers.fixture";

/**
 * Helper function: checks MobileNav component elements existence
 */
export const checkMobileNav = () => {
  const closeBtn = screen.getByRole("button", { name: "Close Menu" });

  const mobileLinks = getMobileNavigation();

  // Check elements existence
  expect(closeBtn).toBeInTheDocument();
  expect(mobileLinks.collections).toBeInTheDocument();
  expect(mobileLinks.men).toBeInTheDocument();
  expect(mobileLinks.woman).toBeInTheDocument();
  expect(mobileLinks.contact).toBeInTheDocument();
};

/**
 * Helper function: returns mobile navigation links
 */
const getMobileNavigation = () => {
  const data = getNavLinksDesc();

  return {
    collections: screen.getByText(data.collectionsLink),
    men: screen.getByText(data.menLink),
    woman: screen.getByText(data.womanLink),
    about: screen.getByText(data.aboutLink),
    contact: screen.getByText(data.contact),
  };
};
