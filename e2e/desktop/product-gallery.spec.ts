import { test, expect } from "@playwright/test";
import {
  closeModalGallery,
  expectModalGalleryHidden,
  getGalleryElements,
  getModalGalleryElements,
  openModalGallery,
} from "../helpers/desktopHelper";

/**
 * End to End testing: desktop product gallery and modal gallery
 */
test.describe("Desktop product gallery", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/"); // baseURL
  });

  test("browse the gallery using the thumbnail list", async ({ page }) => {
    const { firstImage, secondImage, firstThumbnail, secondThumbnail } =
      getGalleryElements(page);

    // Default image
    await expect(firstImage).toBeVisible();

    // Click the second thumbnail image
    await secondThumbnail.click();

    // Show second image
    await expect(secondImage).toBeVisible();
    await expect(firstImage).toBeHidden();

    // Click the first thumbnail image
    await firstThumbnail.click();

    // Show first image again
    await expect(firstImage).toBeVisible();
    await expect(secondImage).toBeHidden();
  });

  test("browse the modal gallery using the prev/next buttons", async ({
    page,
  }) => {
    await openModalGallery(page);

    const { nextImageBtn, prevImageBtn, firstImage, secondImage, lastImage } =
      getModalGalleryElements(page);

    // Default image
    await expect(firstImage).toBeVisible();

    // Click the "Next" button
    await nextImageBtn.click();

    // Show second image
    await expect(secondImage).toBeVisible();
    await expect(firstImage).toBeHidden();

    // Click the "Previous" button
    await expect(prevImageBtn).toBeVisible();
    await prevImageBtn.click();

    // Show first image again
    await expect(firstImage).toBeVisible();
    await expect(secondImage).toBeHidden();

    // Click the "Previous" button again
    await prevImageBtn.click();

    // Show last image
    await expect(lastImage).toBeVisible();
    await expect(firstImage).toBeHidden();
  });

  test("browse the modal gallery using the thumbnail list", async ({
    page,
  }) => {
    await openModalGallery(page);

    const { firstImage, secondImage, firstThumbnail, secondThumbnail } =
      getModalGalleryElements(page);

    // Default image
    await expect(firstImage).toBeVisible();

    // Click the second thumbnail image
    await secondThumbnail.click();

    // Show second image
    await expect(secondImage).toBeVisible();
    await expect(firstImage).toBeHidden();

    // Click the first thumbnail image
    await firstThumbnail.click();

    // Show first image again
    await expect(firstImage).toBeVisible();
    await expect(secondImage).toBeHidden();
  });

  test("close the modal gallery by clicking the close button", async ({
    page,
  }) => {
    await openModalGallery(page);

    await closeModalGallery(page);

    await expectModalGalleryHidden(page);
  });

  test("close the modal gallery by pressing the escape key", async ({
    page,
  }) => {
    await openModalGallery(page);

    // Press the "Escape" key
    await page.keyboard.press("Escape");

    await expectModalGalleryHidden(page);
  });
});
