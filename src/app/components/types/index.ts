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

/**
 * Props for product details
 * @property company       - product company
 * @property name          - product name
 * @property description   - description of the product
 * @property originalPrice - original product price
 * @property currentPrice  - current product price
 * @property discount      - discont percentage
 */
export type ProductDetail = {
  company: string;
  name: string;
  description: string;
  originalPrice: string | null;
  currentPrice: string;
  discount: string | null;
};

/**
 * Props for the Detail component
 */
export type DetailProps = {
  details: ProductDetail;
};
