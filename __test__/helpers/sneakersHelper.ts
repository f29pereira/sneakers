import { screen } from "@testing-library/react";
import {
  getNavLinksDesc,
  getUserLinksDesc,
  getProductImagesData,
  getProductData,
  getCartItemData,
} from "../fixtures/sneakers.fixture";
import { getLineTotal } from "@/app/lib/utils";

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
 * - User's shopping cart toggle button and profile link
 */
export const checkNav = () => {
  const brandLogo = screen.getByAltText("Sneakers Logo");
  const mainLinks = getMainNavigation();
  const user = getUserNavigation();

  checkMobileNavToggle();
  expect(brandLogo).toBeVisible();
  expect(mainLinks.collections).toBeVisible();
  expect(mainLinks.men).toBeVisible();
  expect(mainLinks.woman).toBeVisible();
  expect(mainLinks.contact).toBeVisible();
  expect(user.shoppingButton).toBeVisible();
  expect(user.profileLink).toBeVisible();
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
 * Helper function: returns user shopping cart toggle button and profile link
 */
const getUserNavigation = () => {
  const data = getUserLinksDesc();

  return {
    shoppingButton: screen.getByRole("button", { name: "Shopping Cart" }),
    profileLink: screen.getByRole("link", { name: data.profileLink }),
  };
};

/**
 * Helper function: checks the visibility of the following elements, in the Gallery component:
 * - current selected image
 * - list of image thumbnails
 */
export const checkGallery = () => {
  const productGallery = getProductImagesData();

  const currentImgAlt = productGallery[0].imageDescription;
  const currentImg = screen.getAllByRole("img", { name: currentImgAlt });

  const thumbnailList = productGallery.map((img) => img.thumbnailDescription);

  thumbnailList.forEach((thumbnail) => {
    const thumbnailButton = screen.getByRole("button", { name: thumbnail });
    expect(thumbnailButton).toBeVisible();
  });

  expect(currentImg).toHaveLength(2); // current selected image for mobile/desktop screens
};

/**
 * Helper function: checks the visibility of the following elements, in the Detail component:
 * Product:
 * - company
 * - name
 * - description
 * - current price
 * - original price (if available)
 * - discount percentage (if available)
 */
export const checkDetail = () => {
  const productData = getProductData();

  const company = screen.getByText(productData.company);

  const name = screen.getByRole("heading", {
    level: 1,
    name: productData.name,
  });

  const description = screen.getByText(productData.description);
  const currentPrice = screen.getByText(`$${productData.currentPrice}`);

  if (productData.discount) {
    const discount = screen.getByText(`${productData.discount}%`);
    expect(discount).toBeVisible();
  }

  if (productData.originalPrice) {
    const originalPrice = screen.getByText(`$${productData.originalPrice}`);
    expect(originalPrice).toBeVisible();
  }

  expect(company).toBeVisible();
  expect(name).toBeVisible();
  expect(description).toBeVisible();
  expect(currentPrice).toBeVisible();
};

/**
 * Helper function: checks the visibility of the following elements, in the AddToCart component:
 * - Decrease quantity button
 * - Counter value
 * - Increase quantity button
 */
export const checkCounter = () => {
  const decreaseBtn = screen.getByRole("button", { name: "Decrease quantity" });
  const counter = screen.getByText("0");
  const increaseBtn = screen.getByRole("button", { name: "Increase quantity" });

  expect(decreaseBtn).toBeVisible();
  expect(counter).toBeVisible();
  expect(increaseBtn).toBeVisible();
};

/**
 * Helper function: checks the visibility of the following elements, in the AddToCart component:
 * - Add to cart button
 */
export const checkAddToCart = () => {
  const addToCartBtn = screen.getByRole("button", { name: "Add to cart" });

  expect(addToCartBtn).toBeVisible();
};
