import { test, expect } from "@playwright/test";
import { getGalleryButtons, getGalleryImages } from "../helpers/mobileHelpers";

/**
 * End to End testing: mobile product gallery
 */
test.describe("Mobile product gallery", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/"); // baseURL
  });

  test("browse the gallery using the previous and next buttons", async ({
    page,
  }) => {
    const { firstImage, secondImage } = getGalleryImages(page);

    const { prevImageBtn, nextImageBtn } = getGalleryButtons(page);

    // Show first image
    await expect(firstImage).toBeVisible();

    // Click the "Next" button
    await nextImageBtn.click();

    // Show second image
    await expect(secondImage).toBeVisible();
    await expect(firstImage).toBeHidden();

    // Click the "Previous" button
    await prevImageBtn.click();

    // Show first image again
    await expect(firstImage).toBeVisible();
    await expect(secondImage).toBeHidden();
  });

  test("show the last image when clicking the previous button on the first image", async ({
    page,
  }) => {
    const { firstImage, lastImage } = getGalleryImages(page);

    const { prevImageBtn } = getGalleryButtons(page);

    // Show first image
    await expect(firstImage).toBeVisible();

    // Click the "Previous" button
    await prevImageBtn.click();

    // Show last image
    await expect(lastImage).toBeVisible();
    await expect(firstImage).toBeHidden();
  });
});
