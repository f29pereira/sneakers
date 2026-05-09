// Reusable helper functions

import { Page } from "@playwright/test";
import { getProductImagesData } from "../../fixtures/sneakers.fixture";

/**
 * Returns a list with the alternative text for the product images/thumbnails
 */
export const getImagesAltText = () => {
  const images = getProductImagesData().map((image) => ({
    imageAlt: image.imageDescription,
    thumbnailAlt: image.thumbnailDescription,
  }));

  return images;
};

/**
 * Returns the product images for a given container id
 * @param containerId parent container id
 */
export const getGalleryImages = (page: Page, containerId: string) => {
  const images = getImagesAltText();

  const imgContainer = page.getByTestId(containerId);
  const firstImage = imgContainer.getByRole("img", {
    name: images[0].imageAlt,
  });
  const secondImage = imgContainer.getByRole("img", {
    name: images[1].imageAlt,
  });
  const lastImage = imgContainer.getByRole("img", {
    name: images[3].imageAlt,
  });

  return { firstImage, secondImage, lastImage };
};
