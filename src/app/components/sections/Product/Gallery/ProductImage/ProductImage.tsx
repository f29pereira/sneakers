import styles from "./ProductImage.module.css";
import type { ProductImageProps } from "@/app/components/types";
import Image from "next/image";

/**
 * Renders the current selected product image
 *
 * Props are defined in {@link ProductImageProps}.
 */
export default function ProductImage({
  path,
  description,
  intrinsicWidth,
  intrinsicHeight,
}: ProductImageProps) {
  return (
    <Image
      className={styles.productImg}
      src={path}
      width={intrinsicWidth}
      height={intrinsicHeight}
      alt={description}
    />
  );
}
