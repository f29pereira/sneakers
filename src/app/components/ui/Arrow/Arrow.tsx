import styles from "./Arrow.module.css";
import type { ArrowProps } from "../../types";

/**
 * Renders a circle with directional icon
 *
 * Props are defined in {@link ArrowProps}.
 */
export default function Arrow({ direction }: ArrowProps) {
  const svgPath = direction === "left" ? "M11 1 3 9l8 8" : "m2 1 8 8-8 8";

  return (
    <div className={`flex-center ${styles.arrowCont}`}>
      <svg
        className={styles.arrowIcon}
        aria-hidden="true"
        viewBox="0 0 12 18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={svgPath} fill="none" fillRule="evenodd" />
      </svg>
    </div>
  );
}
