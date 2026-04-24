import { test, expect, Page } from "@playwright/test";
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
 * Open the modal gallery
 */
const openModalGallery = async (page: Page) => {
  await page.getByTestId("desktop-img").click();
};

/**
 * Returns modal gallery elements
 */
const getModalGalleryElements = (page: Page) => {
  const images = getImagesAlt();

  const modalContainer = page.getByTestId("modal-gallery");

  const closeBtn = page.getByRole("button", {
    name: /Close/,
  });

  const prevBtnContainer = page.getByTestId("modal-prev-btn");
  const prevImageBtn = prevBtnContainer.getByRole("button", {
    name: "Previous Product Image",
  });

  const nextBtnContainer = page.getByTestId("modal-next-btn");
  const nextImageBtn = nextBtnContainer.getByRole("button", {
    name: "Next Product Image",
  });

  const galleryContainer = page.getByTestId("modal-img");
  const firstImage = galleryContainer.getByRole("img", {
    name: images[0].image,
  });
  const secondImage = galleryContainer.getByRole("img", {
    name: images[1].image,
  });
  const fourthImage = galleryContainer.getByRole("img", {
    name: images[3].image,
  });

  const thumbnailsContainer = page.getByTestId("modal-thumbnails");
  const firstThumbnail = thumbnailsContainer.getByRole("button", {
    name: images[0].thumbnail,
  });
  const secondThumbnail = thumbnailsContainer.getByRole("button", {
    name: images[1].thumbnail,
  });

  return {
    modalContainer,
    closeBtn,
    nextImageBtn,
    prevImageBtn,
    firstImage,
    secondImage,
    fourthImage,
    firstThumbnail,
    secondThumbnail,
  };
};

/**
 * End to End testing: desktop product gallery and modal gallery
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

    const { nextImageBtn, prevImageBtn, firstImage, secondImage, fourthImage } =
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
    await expect(fourthImage).toBeVisible();
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

    const { modalContainer, closeBtn } = getModalGalleryElements(page);

    // Close modal
    await closeBtn.click();

    await expect(modalContainer).toBeHidden();
  });

  test("close the modal gallery by pressing the escape key", async ({
    page,
  }) => {
    await openModalGallery(page);

    const { modalContainer } = getModalGalleryElements(page);

    // Close modal
    await page.keyboard.press("Escape");

    await expect(modalContainer).toBeHidden();
  });
});
