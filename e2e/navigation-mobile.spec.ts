import { test, devices, expect } from "@playwright/test";

test.use({ ...devices["Pixel 5"] });

// TO DO: add reusable open menu function

test("has mobile navigation button", async ({ page }) => {
  await page.goto("/"); // baseURL

  const hamburgerBtn = page.getByRole("button", { name: "Open Menu" });
  await expect(hamburgerBtn).toBeVisible();
});

test("allows the user to open the mobile navigation", async ({ page }) => {
  await page.goto("/"); // baseURL

  const hamburgerBtn = page.getByRole("button", { name: "Open Menu" });
  await hamburgerBtn.click();

  const menLink = page.getByRole("link", { name: "Men" });
  const womanLink = page.getByRole("link", { name: "Woman" });
  const aboutLink = page.getByRole("link", { name: "About" });
  const contactLink = page.getByRole("link", { name: "Contact" });

  await expect(menLink).toBeVisible();
  await expect(womanLink).toBeVisible();
  await expect(aboutLink).toBeVisible();
  await expect(contactLink).toBeVisible();
});

// TO DO: add close mobile navigation test
