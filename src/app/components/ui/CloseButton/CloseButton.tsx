import styles from "./CloseButton.module.css";
import type { CloseButtonProps } from "../../types";
import Image from "next/image";

/**
 * Renders a button with close icon
 *
 * Props are defined in {@link CloseButtonProps}.
 */
export default function CloseButton({
  ariaLabel,
  handleClose,
}: CloseButtonProps) {
  return (
    <button className="buttonIcon" aria-label={ariaLabel} onClick={handleClose}>
      <Image
        className={styles.closeIcon}
        src="images/icons/icon-close.svg"
        alt=""
        width={16}
        height={15}
      />
    </button>
  );
}
