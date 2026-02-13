import styles from "./Product.module.css";
import Gallery from "./Gallery/Gallery";
import Detail from "./Detail/Detail";
import { getGallery, getDetails } from "./Product.utils";

/**
 * Renders the product:
 * - Gallery of images
 * - Details
 * - Quantity and add to cart button (TO DO)
 */
export default function Product() {
  const galleryList = getGallery();
  const details = getDetails();

  return (
    <section className={styles.sectionCont}>
      <Gallery gallery={galleryList} />

      <div className={styles.productInfoCont}>
        <Detail details={details} />

        {/*TO DO - Add quantity and add to cart button*/}
      </div>
    </section>
  );
}
