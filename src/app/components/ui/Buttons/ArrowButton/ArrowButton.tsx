import styles from "./ArrowButton.module.css";
import type { ButtonArrow } from "@/app/components/types";
import clsx from "clsx";

/**
 * Renders a circular button with directional icon
 *
 * Props are defined in {@link ButtonArrow}.
 */
export default function ArrowButton({
  direction,
  ariaLabel,
  className,
  handleClick,
}: ButtonArrow) {
  const svgPath = direction === "left" ? "M11 1 3 9l8 8" : "m2 1 8 8-8 8";

  return (
    <button
      className={clsx("buttonIcon", styles.arrowBtn, className)}
      aria-label={ariaLabel}
      onClick={handleClick}
    >
      <div className={`flex-center ${styles.arrowCont}`}>
        <svg
          className={styles.arrowIcon}
          aria-hidden="true"
          viewBox="0 0 12 18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={svgPath}
            fill="none"
            stroke="currentColor"
            fillRule="evenodd"
          />
        </svg>
      </div>
    </button>
  );
}
