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
 * @property className       - styling classes
 * @property intrinsicWidth  - intrinsic image width in pixels
 * @property intrinsicHeight - intrinsic image height in pixels
 */
export type ProductImageProps = {
  path: string;
  description: string;
  className?: string;
  intrinsicWidth: number;
  intrinsicHeight: number;
};

/**
 * Props for the GalleryModal component
 * @property gallery             - list of images
 * @property selectedImg         - selected image index
 * @property selectedImg         - function to close the modal
 * @property handleSelectPrevImg - function to change to the previous image
 * @property handleSelectNextImg - function to change to the next image
 * @property handleSelectImg     - function to change the current selected image
 */
export type GalleryModal = {
  gallery: ProductGallery[];
  selectedImg: number;
  handleClose: () => void;
  handleSelectPrevImg: () => void;
  handleSelectNextImg: () => void;
  handleSelectImg: (index: number) => void;
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
 * Props for the ArrowButton component
 * @property direction   - arrow icon direction
 * @property ariaLabel   - aria-label description
 * @property className   - styling classes
 * @property handleClick - onClick function
 */
export type ArrowButtonProps = {
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
 * Type for the product added to cart
 * @property imagePath        - product image path
 * @property imageDescription - product image description
 * @property id               - product id
 * @property name             - product name
 * @property currentPrice     - current product price
 *
 */
export type CartItem = Pick<ProductGallery, "imagePath" | "imageDescription"> &
  Pick<ProductDetail, "id" | "name" | "currentPrice">;

/**
 * Type for the product data
 * @property gallery - list of product images and thumbnails
 * @property details - product details
 */
export type Product = {
  gallery: ProductGallery[];
  details: ProductDetail;
};

/**
 * Type for the product gallery
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
 * Type for product details
 * @property id            - product id
 * @property company       - product company
 * @property name          - product name
 * @property description   - description of the product
 * @property originalPrice - original product price
 * @property currentPrice  - current product price
 * @property discount      - discont percentage
 */
export type ProductDetail = {
  id: number;
  company: string;
  name: string;
  description: string;
  originalPrice: string | null;
  currentPrice: string;
  discount: string | null;
};
