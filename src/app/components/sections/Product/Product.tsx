import styles from "./Product.module.css";
import { ProductProps } from "../../types";
import { getProduct } from "./Product.utils";
import Gallery from "./Gallery/Gallery";
import Detail from "./Detail/Detail";
import ProductActions from "./ProductActions/ProductActions";

/**
 * Renders the product with:
 * - Gallery of images
 * - Details
 * - Counter
 * - Add to cart button
 *
 * Props are defined in {@link ProductProps}.
 */
export default function Product({ product }: ProductProps) {
  return (
    <section className={styles.sectionCont}>
      <div className={styles.productImagesCont}>
        <Gallery gallery={product.gallery} />
      </div>

      <div className={styles.productInfoCont}>
        <Detail details={product.details} />

        <ProductActions gallery={product.gallery} details={product.details} />
      </div>
    </section>
  );
}
