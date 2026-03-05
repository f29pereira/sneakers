import type { Product, ProductGallery, ProductDetail } from "../../types";

/**
 * Returns the product data
 */
export const getProduct = (): Product => {
  return {
    gallery: getGallery(),
    details: getDetails(),
  };
};

/**
 * Returns the product images/thumbnails
 */
export const getGallery = (): ProductGallery[] => {
  return [
    {
      imagePath: "/images/products/image-product-1.jpg",
      imageDescription: "Fall Limited Edition Sneakers - front view and sole",
      thumbnailPath: "/images/products/image-product-1-thumbnail.jpg",
      thumbnailDescription: "Show front view and sole",
    },
    {
      imagePath: "/images/products/image-product-2.jpg",
      imageDescription: "Fall Limited Edition Sneakers - back view",
      thumbnailPath: "/images/products/image-product-2-thumbnail.jpg",
      thumbnailDescription: "Show back view",
    },
    {
      imagePath: "/images/products/image-product-3.jpg",
      imageDescription: "Fall Limited Edition Sneakers - side view",
      thumbnailPath: "/images/products/image-product-3-thumbnail.jpg",
      thumbnailDescription: "Show side view",
    },
    {
      imagePath: "/images/products/image-product-4.jpg",
      imageDescription: "Fall Limited Edition Sneakers - side view close up",
      thumbnailPath: "/images/products/image-product-4-thumbnail.jpg",
      thumbnailDescription: "Show side view close up",
    },
  ];
};

/**
 * Retuns the product details
 */
export const getDetails = (): ProductDetail => {
  return {
    id: 1,
    company: "Sneaker company",
    name: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    originalPrice: "250.00",
    currentPrice: "125.00",
    discount: "50",
  };
};
