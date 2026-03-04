import { render } from "@testing-library/react";
import Gallery from "@/app/components/sections/Product/Gallery/Gallery";
import { getProductImagesData } from "../../../../../fixtures/sneakers.fixture";
import { checkGallery } from "../../../../../helpers/sneakersHelper";

/**
 * Unit testing for component: Gallery
 */
describe("Gallery component", () => {
  /**
   * Mock: window matchMedia
   */
  beforeEach(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  /**
   * Gallery component rendering
   */
  beforeEach(() => {
    render(<Gallery gallery={getProductImagesData()} />);
  });

  it("renders current product image and list of image thumbnails", () => {
    checkGallery();
  });
});
