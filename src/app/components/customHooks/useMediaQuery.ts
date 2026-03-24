"use client"; // Client Component

import { useEffect, useState } from "react";

/**
 * Custom Hook: checks if screen size matches given max width value
 */
export default function useMediaQuery(maxWidth: string) {
  const [isScreenSize, setIsScreenSize] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${maxWidth}px)`);

    /**
     * Update isScreenSize to true if query matches the max width value
     */
    const handleResize = (e: MediaQueryListEvent) => {
      if (mediaQuery.matches) {
        setIsScreenSize(true);
        return;
      }

      setIsScreenSize(false);
    };

    mediaQuery.addEventListener("change", handleResize);

    // Clean-up function
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return { isScreenSize };
}
