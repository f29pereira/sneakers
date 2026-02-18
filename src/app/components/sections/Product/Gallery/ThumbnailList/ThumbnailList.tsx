import styles from "./ThumbnailList.module.css";
import type { ThumbnailListProps } from "@/app/components/types";
import Image from "next/image";

/**
 * Renders the product thumbnails list
 *
 * Props are defined in {@link ThumbnailListProps}.
 */
export default function ThumbnailList({
  gallery,
  selectedImg,
  handleSelectImg,
}: ThumbnailListProps) {
  return (
    <ul className={styles.thumbnailsCont} aria-label="Product image thumbnails">
      {gallery.map((thumbnail, index) => (
        <button
          key={index}
          className={`buttonIcon ${styles.thumbnailBtn}`}
          aria-label={thumbnail.thumbnailDescription}
          aria-current={selectedImg === index}
          onClick={() => {
            handleSelectImg(index);
          }}
        >
          <Image
            className={`${styles.thumbnailImg} ${selectedImg === index ? styles.isSelected : ""}`}
            src={thumbnail.thumbnailPath}
            width={176}
            height={176}
            alt=""
          />
        </button>
      ))}
    </ul>
  );
}
