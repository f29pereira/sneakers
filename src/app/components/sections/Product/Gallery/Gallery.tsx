"use client"; // Client Component

import styles from "./Gallery.module.css";
import type { GalleryProps } from "@/app/components/types";
import Image from "next/image";
import { useState } from "react";
import Arrow from "@/app/components/ui/Arrow/Arrow";

/**
 * Renders the product images gallery
 *
 * For Mobile screens:
 * - Current image with prev/next button navigation
 *
 * For Desktop screens: (TO DO)
 * - Current image with clickable thumbnails
 */
export default function Gallery({ gallery }: GalleryProps) {
  const [currentImg, setCurrentImg] = useState<number>(0); // Current image index

  /**
   * Updates state with the previous product image index
   */
  const showPreviousImg = () => {
    currentImg === 0
      ? setCurrentImg(gallery.length - 1)
      : setCurrentImg((prev) => prev - 1);
  };

  /**
   * Updates state with the next product image index
   */
  const showNextImg = () => {
    currentImg === gallery.length - 1
      ? setCurrentImg(0)
      : setCurrentImg((prev) => prev + 1);
  };

  return (
    <div className={styles.galleryCont}>
      {/*Current Image*/}
      {gallery.length > 0 ? (
        <Image
          className={styles.productImg}
          src={gallery[currentImg].imagePath}
          width={1000}
          height={1000}
          alt={gallery[currentImg].description}
        />
      ) : null}

      {/*Mobile navigation*/}
      <div className={styles.leftArrowCont}>
        <button
          className="mobileIconBtn"
          aria-label="Previous Product Image"
          onClick={showPreviousImg}
        >
          <Arrow direction="left" />
        </button>
      </div>

      <div className={styles.rightArrowCont}>
        <button
          className="mobileIconBtn"
          aria-label="Next Product Image"
          onClick={showNextImg}
        >
          <Arrow direction="right" />
        </button>
      </div>

      {/*Desktop thumbnails*/}
      {/*TO DO - Add product thumbnails for desktop*/}
    </div>
  );
}
