import { test, expect } from "@playwright/test";
import { getProductImagesData } from "../../fixtures/sneakers.fixture";

/**
 * Returns a list with alt text for the product images
 */
const getImagesAlt = (): string[] => {
  const images = getProductImagesData().map((image) => image.imageDescription);

  return images;
};

/**
 * End to End testing: mobile product gallery
 */
test.describe("Mobile product gallery", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/"); // baseURL
  });

  test("browse the gallery using the prev/next buttons", async ({ page }) => {
    const altList = getImagesAlt();

    const itemContainer = page.getByTestId("mobile-gallery");
    const firstImage = itemContainer.getByRole("img", {
      name: altList[0],
    });
    const secondImage = itemContainer.getByRole("img", {
      name: altList[1],
    });
    const fourthImage = itemContainer.getByRole("img", {
      name: altList[3],
    });

    const prevImageBtn = page.getByRole("button", {
      name: "Previous Product Image",
    });
    const nextImageBtn = page.getByRole("button", {
      name: "Next Product Image",
    });

    await expect(firstImage).toBeVisible();

    // Show second image
    await nextImageBtn.click();
    await expect(secondImage).toBeVisible();
    await expect(firstImage).toBeHidden();

    // Show first image again
    await prevImageBtn.click();
    await expect(firstImage).toBeVisible();
    await expect(secondImage).toBeHidden();

    // Show last image
    await prevImageBtn.click();
    await expect(fourthImage).toBeVisible();
    await expect(firstImage).toBeHidden();
  });
});
