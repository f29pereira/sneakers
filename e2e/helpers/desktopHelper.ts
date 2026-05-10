// Reusable helper functions for desktop only E2E tests

import { Page, expect } from "@playwright/test";
import { getGalleryImages, getImagesAltText } from "./utilHelper";

/**
 * Opens the modal gallery
 */
export const openModalGallery = async (page: Page) => {
  await page.getByTestId("desktop-img").click();
};

/**
 * Closes the modal gallery
 */
export const closeModalGallery = async (page: Page) => {
  const { closeBtn } = getModalGalleryElements(page);

  await closeBtn.click();
};

/**
 * Returns the gallery elements: images and thumbnail buttons
 */
export const getGalleryElements = (page: Page) => {
  const { firstImage, secondImage, lastImage } = getGalleryImages(
    page,
    "desktop-img",
  );

  const { firstThumbnail, secondThumbnail } = getThumbnails(
    page,
    "desktop-thumbnails",
  );

  return {
    firstImage,
    secondImage,
    lastImage,
    firstThumbnail,
    secondThumbnail,
  };
};

/**
 * Returns the modal gallery elements:
 * - main modal container
 * - close button
 * - images
 * - previous and next buttons
 * - thumbnail buttons
 */
export const getModalGalleryElements = (page: Page) => {
  const modalContainer = page.getByTestId("modal-gallery");

  const closeBtn = modalContainer.getByRole("button", {
    name: /Close/,
  });

  const { firstImage, secondImage, lastImage } = getGalleryImages(
    page,
    "modal-img",
  );

  const prevImageBtn = modalContainer.getByRole("button", {
    name: "Previous Product Image",
  });
  const nextImageBtn = modalContainer.getByRole("button", {
    name: "Next Product Image",
  });

  const { firstThumbnail, secondThumbnail } = getThumbnails(
    page,
    "modal-thumbnails",
  );

  return {
    modalContainer,
    closeBtn,
    nextImageBtn,
    prevImageBtn,
    firstImage,
    secondImage,
    lastImage,
    firstThumbnail,
    secondThumbnail,
  };
};

/**
 * Asserts that the modal gallery is hidden
 */
export const expectModalGalleryHidden = async (page: Page) => {
  const { modalContainer } = getModalGalleryElements(page);

  await expect(modalContainer).toBeHidden();
};

/**
 * Returns the product thumbnails buttons for a given container id
 * @param containerId parent container id
 */
const getThumbnails = (page: Page, containerId: string) => {
  const images = getImagesAltText();

  const thumbnailContainer = page.getByTestId(containerId);
  const firstThumbnail = thumbnailContainer.getByRole("button", {
    name: images[0].thumbnailAlt,
  });
  const secondThumbnail = thumbnailContainer.getByRole("button", {
    name: images[1].thumbnailAlt,
  });

  return { firstThumbnail, secondThumbnail };
};
