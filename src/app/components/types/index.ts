/* ---------------------------------------------------- */
/* Components Props types                               */
/* ---------------------------------------------------- */

/**
 * Props for the MobileNav component
 * @property handleToggle  - state (isMobileNavOpen) setter function
 */
export type MobileNavProps = {
  handleToggle: React.MouseEventHandler;
};

/**
 * Props for the Gallery component
 * @property gallery - list of images
 */
export type GalleryProps = {
  gallery: ProductGallery[];
};

/**
 * Props for the ProductImage component
 * @property path            - image path
 * @property description     - image description
 * @property intrinsicWidth  - intrinsic image width in pixels
 * @property intrinsicHeight - intrinsic image height in pixels
 */
export type ProductImageProps = {
  path: string;
  description: string;
  intrinsicWidth: number;
  intrinsicHeight: number;
};

/**
 * Props for the ThumbnailList component
 * @property gallery         - list of images
 * @property selectedImg     - selected image index
 * @property handleSelectImg - function to change the current selected image
 */
export type ThumbnailListProps = {
  gallery: ProductGallery[];
  selectedImg: number;
  handleSelectImg: (index: number) => void;
};

/**
 * Props for the Detail component
 * @property details - product details
 */
export type DetailProps = {
  details: ProductDetail;
};

/* ---------------------------------------------------- */
/* Reusable UI components Props types                   */
/* ---------------------------------------------------- */

/**
 * Props for the ButtonArrow component
 * @property direction   - arrow icon direction
 * @property ariaLabel   - aria-label description
 * @property className   - styling classes
 * @property handleClick - onClick function
 */
export type ButtonArrow = {
  direction: "left" | "right";
  ariaLabel: string;
  className?: string;
  handleClick: React.MouseEventHandler;
};

/**
 * Props for the CloseButton component
 * @property ariaLabel    - aria-label description
 * @property className    - styling classes
 * @property handleClose  - close function
 */
export type CloseButtonProps = {
  ariaLabel: string;
  className?: string;
  handleClose: React.MouseEventHandler;
};

/* ---------------------------------------------------- */
/* Other component related types                        */
/* ---------------------------------------------------- */

/**
 * Props for the product gallery
 * @property imagePath            - product image path
 * @property imageDescription     - product image description
 * @property thumbnailPath        - product thumbnail image path
 * @property thumbnailDescription - product thumbnail description
 */
export type ProductGallery = {
  imagePath: string;
  imageDescription: string;
  thumbnailPath: string;
  thumbnailDescription: string;
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
