import type { ProductGallery, ProductDetail } from "../../types";

/**
 * Returns the product images/thumbnails
 */
export const getGallery = (): ProductGallery[] => {
  const galleryList: ProductGallery[] = [
    {
      imagePath: "/images/products/image-product-1.jpg",
      thumbnailPath: "/images/products/image-product-1-thumbnail.jpg",
      description: "Fall Limited Edition Sneakers - front view and sole",
    },
    {
      imagePath: "/images/products/image-product-2.jpg",
      thumbnailPath: "/images/products/image-product-2-thumbnail.jpg",
      description: "Fall Limited Edition Sneakers - back view",
    },
    {
      imagePath: "/images/products/image-product-3.jpg",
      thumbnailPath: "/images/products/image-product-3-thumbnail.jpg",
      description: "Fall Limited Edition Sneakers - side view",
    },
    {
      imagePath: "/images/products/image-product-4.jpg",
      thumbnailPath: "/images/products/image-product-4-thumbnail.jpg",
      description: "Fall Limited Edition Sneakers - side view close up",
    },
  ];

  return galleryList;
};

/**
 * Retuns the product details
 */
export const getDetails = (): ProductDetail => {
  const info = {
    company: "Sneaker company",
    name: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    originalPrice: "250.00",
    currentPrice: "125.00",
    discount: "50",
  };

  return info;
};
