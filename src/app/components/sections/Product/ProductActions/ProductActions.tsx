"use client"; // Client Component

import styles from "./ProductActions.module.css";
import { useState } from "react";
import type { Product, CartItem } from "@/app/components/types";
import Counter from "@/app/components/ui/Counter/Counter";
import AddToCart from "../AddToCart/AddToCart";

/**
 * Renders the product counter and add to cart button
 */
export default function ProductActions({ gallery, details }: Product) {
  const [item, setItem] = useState<CartItem>({
    imagePath: gallery[0].imagePath,
    imageDescription: gallery[0].imageDescription,
    id: details.id,
    name: details.name,
    currentPrice: details.currentPrice,
    quantity: 0,
  });

  /**
   * Decrement item quantity
   */
  const decrement = () => {
    if (item.quantity > 0) {
      setItem((prev) => ({ ...prev, quantity: prev.quantity - 1 }));
    }
  };

  /**
   * Increment item quantity
   */
  const increment = () => {
    setItem((prev) => ({
      ...prev,
      quantity: prev.quantity + 1,
    }));
  };

  return (
    <div className={styles.counterAddToCartCont}>
      <div className={styles.counterCont}>
        <Counter
          counter={item.quantity}
          handleDecrement={decrement}
          handleIncrement={increment}
        />
      </div>

      <div className={styles.addToCartCont}>
        <AddToCart itemToAdd={item} />
      </div>
    </div>
  );
}
