import styles from "./Product.module.css";
import Gallery from "./Gallery/Gallery";
import Detail from "./Detail/Detail";
import { getGallery, getDetails } from "./Product.utils";
import Counter from "../../ui/Counter/Counter";
import AddToCart from "./AddToCart/AddToCart";

/**
 * Renders the product with:
 * - Gallery of images
 * - Details
 * - Counter
 * - Add to cart button
 */
export default function Product() {
  const galleryList = getGallery();
  const details = getDetails();

  return (
    <section className={styles.sectionCont}>
      <Gallery gallery={galleryList} />

      <div className={styles.productInfoCont}>
        <Detail details={details} />

        <div className={styles.counterAddToCartCont}>
          <div className={styles.counterCont}>
            <Counter />
          </div>

          <div className={styles.addToCartCont}>
            <AddToCart />
          </div>
        </div>
      </div>
    </section>
  );
}
