"use client"; // Client Component

import { useState } from "react";

/**
 * Custom Hook: manages counter state with decrement and increment functions
 */
export default function useCounter(startValue: number) {
  const [counter, setCounter] = useState(startValue);

  const decrement = () => {
    if (counter > 0) {
      setCounter((prev) => prev - 1);
    }
  };

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  return { counter, decrement, increment };
}
