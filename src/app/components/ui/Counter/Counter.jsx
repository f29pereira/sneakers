"use client"; // Client Component

import styles from "./Counter.module.css";
import useCounter from "../../customHooks/useCounter";

/**
 * Renders a counter value with decrement/increment buttons
 */
export default function Counter() {
  const { counter, decrement, increment } = useCounter(0);

  return (
    <div className={styles.counterCont}>
      {/*Decrement Button*/}
      <button
        className={`buttonIcon ${styles.counterBtn}`}
        onClick={decrement}
        disabled={counter <= 0}
        aria-label="Decrease quantity"
      >
        <svg
          className={styles.minusIcon}
          aria-hidden="true"
          viewBox="0 0 12 4"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
            fillRule="nonzero"
          />
        </svg>
      </button>

      {/*Counter value*/}
      <span className={styles.counterValue} aria-hidden="true">
        {counter}
      </span>

      {/*Screen reader only counter value*/}
      <span className="sr-only" aria-live="polite">
        Current quantity: {counter}
      </span>

      {/*Increment Button*/}
      <button
        className={`buttonIcon ${styles.counterBtn}`}
        onClick={increment}
        aria-label="Increase quantity"
      >
        <svg
          className={styles.plusIcon}
          aria-hidden="true"
          viewBox="0 0 12 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" />
        </svg>
      </button>
    </div>
  );
}
