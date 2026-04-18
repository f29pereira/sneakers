"use client"; // Client Component

import styles from "./Cart.module.css";
import Link from "next/link";
import { useAppSelector } from "@/app/hooks";
import LineDivider from "../../ui/LineDivider/LineDivider";
import Item from "./Item/Item";

/**
 * Renders the user's shopping cart.
 *
 * If empty:
 * - Empty cart message
 *
 * If not empty:
 * - List of items with: image, name, original price, quantity, final price and remove button
 * - Subtotal value
 * - Checkout link
 */
export default function Cart() {
  const cart = useAppSelector((state) => state.cart);

  return (
    <div
      className={styles.cartCont}
      role="dialog"
      aria-labelledby="cart-title"
      aria-live="polite"
    >
      {/*Title*/}
      <div className={styles.titleCont}>
        <h2 id="cart-title" className={styles.title}>
          Cart
        </h2>
      </div>

      <LineDivider />

      {/*Content*/}
      <div className={styles.contentCont}>
        {cart.items.length === 0 ? (
          <div className={`flex-center ${styles.emptyMsgCont}`}>
            <p className={`lightText ${styles.emptyMsg}`}>
              Your cart is empty.
            </p>
          </div>
        ) : (
          <div>
            {/*List of Items*/}
            <div className={styles.itemsCont}>
              {cart.items.map((item, index) => (
                <div key={index}>
                  <Item
                    imagePath={item.imagePath}
                    imageDescription={item.imageDescription}
                    id={item.id}
                    name={item.name}
                    currentPrice={item.currentPrice}
                    quantity={item.quantity}
                  />
                </div>
              ))}
            </div>

            {/*Subtotal*/}
            <div className={styles.subTotalCont} data-testid="subTotal">
              <span className="lightText">Subtotal:</span>
              <strong>${cart.subTotal}</strong>
            </div>

            {/*Checkout Link*/}
            <div className={`flex-center orangeBtn ${styles.checkoutBtn}`}>
              <Link href="#">Checkout</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
