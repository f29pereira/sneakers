import type { ProductGallery } from "../../types";

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
