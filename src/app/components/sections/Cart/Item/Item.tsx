import styles from "./Item.module.css";
import type { CartItem, RemoveFromCartPayload } from "@/app/components/types";
import Image from "next/image";
import { getLineTotal } from "@/app/lib/utils";
import { useAppDispatch } from "@/app/hooks";
import { removeFromCart } from "@/app/features/cart/cartSlice";

/**
 * Renders an item from the user's cart.
 *
 * Item info:
 * - image
 * - name
 * - current price
 * - quantity
 * - line total
 *
 * - Remove Item button
 *
 * Props are defined in {@link CartItem}.
 */
export default function Item({
  imagePath,
  imageDescription,
  id,
  name,
  currentPrice,
  quantity,
}: CartItem) {
  const lineTotal = getLineTotal(currentPrice, quantity);

  const dispatch = useAppDispatch();

  /**
   * Remove item from the user's cart
   */
  const removeItem = () => {
    const itemToRemove: RemoveFromCartPayload = {
      id: id,
      currentPrice: currentPrice,
      quantity: quantity,
    };

    dispatch(removeFromCart(itemToRemove));
  };

  return (
    <div className={styles.itemCont}>
      {/*Image*/}
      <Image
        className={styles.itemImg}
        src={imagePath}
        alt={imageDescription}
        width={1000}
        height={1000}
      />

      {/*Item info*/}
      <div>
        <h3 className={`lightText ${styles.itemName}`}>{name}</h3>

        <div className={styles.quantityPriceCont}>
          <span className={`lightText ${styles.itemPriceQuantity}`}>
            ${currentPrice} x {quantity}
          </span>
          <h4 className="sr-only">Line total:</h4>
          <span className={styles.total}>${lineTotal}</span>
        </div>
      </div>

      {/*Remove Item Buton*/}
      <button
        className={`buttonIcon ${styles.removeBtn}`}
        aria-label="Remove Item"
        onClick={removeItem}
      >
        <svg
          className={styles.removeIcon}
          aria-hidden="true"
          viewBox="0 0 14 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
            fillRule="nonzero"
          />
        </svg>
      </button>
    </div>
  );
}
