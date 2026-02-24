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
 * Props for the Gallery component
 * @property gallery     - array of ProductGallery
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
