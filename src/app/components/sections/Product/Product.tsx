import Gallery from "./Gallery/Gallery";
import { getGallery } from "./Product.utils";

/**
 * Renders the product images and details/add to cart button
 */
export default function Product() {
  const galleryList = getGallery();

  return (
    <section>
      <Gallery gallery={galleryList} />

      {/*TO DO - Add Product Details component*/}
    </section>
  );
}
