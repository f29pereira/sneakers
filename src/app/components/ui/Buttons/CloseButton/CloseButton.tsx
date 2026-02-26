import styles from "./CloseButton.module.css";
import type { CloseButtonProps } from "../../../types";
import clsx from "clsx";

/**
 * Renders a button with close icon
 *
 * Props are defined in {@link CloseButtonProps}.
 */
export default function CloseButton({
  ariaLabel,
  className,
  handleClose,
}: CloseButtonProps) {
  return (
    <button
      className={clsx("buttonIcon", styles.closeBtn, className)}
      aria-label={ariaLabel}
      onClick={handleClose}
    >
      <svg
        className={styles.closeIcon}
        aria-hidden="true"
        viewBox="0 0 14 15"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
          fillRule="evenodd"
        />
      </svg>
    </button>
  );
}
