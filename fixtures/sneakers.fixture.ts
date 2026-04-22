import type {
  ProductGallery,
  ProductDetail,
  CartItem,
  CartState,
  Product,
} from "@/app/components/types";

/**
 * Mocked data: main navigation links descriptions
 */
export const getNavLinksDesc = () => {
  return {
    collectionsLink: "Collections",
    menLink: "Men",
    womanLink: "Woman",
    aboutLink: "About",
    contactLink: "Contact",
  };
};

/**
 * Mocked data: user links descriptions
 */
export const getUserLinksDesc = () => {
  return {
    shoppingCartLink: "Shopping Cart",
    profileLink: "Profile",
  };
};

/**
 * Mocked data: Product images/thumbnails and details
 */
export const getProductData = (): Product => {
  return {
    gallery: getProductImagesData(),
    details: getProductDetailsData(),
  };
};

/**
 * Mocked data: Product images/thumbnails
 */
export const getProductImagesData = (): ProductGallery[] => {
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
 * Mocked data: Product details
 */
export const getProductDetailsData = (): ProductDetail => {
  return {
    id: 0,
    company: "Sneaker company",
    name: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    originalPrice: 250.0,
    currentPrice: 125.0,
    discount: "50",
  };
};

/**
 * Mocked data: Item from user's cart
 */
export const getCartItemData = (): CartItem => {
  return {
    imagePath: "/images/products/image-product-1.jpg",
    imageDescription: "Fall Limited Edition Sneakers - front view and sole",
    id: 0,
    name: "Fall Limited Edition Sneakers",
    currentPrice: 125,
    quantity: 3,
  };
};

/**
 * Mocked data: empty cart slice
 */
export const getEmptyCartState = (): CartState => {
  return { items: [], totalQuantity: 0, subTotal: 0 };
};

/**
 * Mocked data: cart slice with one item
 */
export const getCartState = (): CartState => {
  const item = getCartItemData();

  return { items: [item], totalQuantity: 1, subTotal: 125 };
};
