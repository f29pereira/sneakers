import styles from "./ProductImage.module.css";
import type { ProductImageProps } from "@/app/components/types";
import Image from "next/image";
import clsx from "clsx";

/**
 * Renders the current selected product image
 *
 * Props are defined in {@link ProductImageProps}.
 */
export default function ProductImage({
  path,
  description,
  className,
  intrinsicWidth,
  intrinsicHeight,
}: ProductImageProps) {
  return (
    <Image
      className={clsx(styles.productImg, className)}
      src={path}
      width={intrinsicWidth}
      height={intrinsicHeight}
      alt={description}
    />
  );
}
