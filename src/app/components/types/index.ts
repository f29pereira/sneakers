/**
 * Props for the MobileNav component
 * @property handleToggle  - state (isMobileNavOpen) setter function
 */
export type MobileNavProps = {
  handleToggle: React.MouseEventHandler;
};

/**
 * Props for the Arrow component
 * @property direction - arrow direction
 */
export type ArrowProps = {
  direction: "left" | "right";
};

/**
 * Props for the product gallery
 * @property imagePath    - product image path
 * @property thumbnail    - product thumbnail image path
 * @property description  - product image description
 */
export type ProductGallery = {
  imagePath: string;
  thumbnailPath: string;
  description: string;
};

/**
 * Props for the Gallery component
 * @property gallery - array of ProductGallery
 */
export type GalleryProps = {
  gallery: ProductGallery[];
};
