import { test, expect } from "@playwright/test";
import { getProductImagesData } from "../../fixtures/sneakers.fixture";

/**
 * Returns a list with alt text for the product images and thumbnails
 */
const getImagesAlt = () => {
  const images = getProductImagesData().map((image) => ({
    image: image.imageDescription,
    thumbnail: image.thumbnailDescription,
  }));

  return images;
};

/**
 * End to End testing: desktop product gallery
 */
test.describe("Desktop product gallery", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/"); // baseURL
  });

  test("browse the gallery using the thumbnail list", async ({ page }) => {
    const images = getImagesAlt();

    const imgContainer = page.getByTestId("desktop-img");
    const firstImage = imgContainer.getByRole("img", {
      name: images[0].image,
    });
    const secondImage = imgContainer.getByRole("img", {
      name: images[1].image,
    });

    const firstThumbnail = page.getByRole("button", {
      name: images[0].thumbnail,
    });
    const secondThumbnail = page.getByRole("button", {
      name: images[1].thumbnail,
    });

    // Default image
    await expect(firstImage).toBeVisible();

    // Thumbnail list
    await expect(firstThumbnail).toBeVisible();
    await expect(secondThumbnail).toBeVisible();

    // Show second image
    await secondThumbnail.click();
    await expect(secondImage).toBeVisible();
    await expect(firstImage).toBeHidden();
  });
});
