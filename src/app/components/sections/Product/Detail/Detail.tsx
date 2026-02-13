import styles from "./Detail.module.css";
import type { DetailProps } from "@/app/components/types";

/**
 * Renders the product details:
 * - company
 * - name
 * - description
 * - current price
 * - original price
 * - discount percentage
 *
 * Props are defined in {@link DetailProps}.
 */
export default function Detail({ details }: DetailProps) {
  return (
    <div className={styles.detailsCont}>
      {/*Company*/}
      <span className={styles.company}>{details.company}</span>

      {/*Name*/}
      <h1 className={styles.name}>{details.name}</h1>

      {/*Description*/}
      <p className={styles.description}>{details.description}</p>

      <div className={styles.pricesCont}>
        <div className={styles.priceDiscontCont}>
          {/*Current Price*/}
          <div>
            <span className="sr-only">Current price:</span>
            <span className={styles.currentPrice}>${details.currentPrice}</span>
          </div>

          {/*Discount Percentage*/}
          {details.discount ? (
            <div className={styles.discountCont}>
              <span className="sr-only">Current discount:</span>
              <span className={styles.discount}>{details.discount}%</span>
            </div>
          ) : null}
        </div>

        {/*Original Price*/}
        {details.originalPrice ? (
          <div>
            <span className="sr-only">Original price:</span>
            <span className={styles.originalPrice}>
              ${details.originalPrice}
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
