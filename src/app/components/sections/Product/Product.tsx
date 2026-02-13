import styles from "./Product.module.css";
import Gallery from "./Gallery/Gallery";
import Detail from "./Detail/Detail";
import { getGallery, getDetails } from "./Product.utils";
import Counter from "../../ui/Counter/Counter";

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

        <Counter />

        {/*TO DO - Add to cart button*/}
      </div>
    </section>
  );
}
