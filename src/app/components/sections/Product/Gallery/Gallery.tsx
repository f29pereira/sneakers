"use client"; // Client Component

import styles from "./Gallery.module.css";
import type { GalleryProps } from "@/app/components/types";
import { useState } from "react";
import ProductImage from "./ProductImage/ProductImage";
import ArrowButton from "@/app/components/ui/Buttons/ArrowButton/ArrowButton";
import ThumbnailList from "./ThumbnailList/ThumbnailList";

/**
 * Renders the product images gallery
 *
 * For Mobile screens:
 * - Current image with prev/next button navigation
 *
 * For Desktop screens:
 * - Button with image and list of thumbnails
 * - If button is clicked opens modal with current image and list of thumbnails (TO DO)
 *
 * Props are defined in {@link GalleryProps}.
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

  /**
   * Updates state with the current product image
   */
  const showImg = (index: number) => {
    if (index >= 0 && index < gallery.length) {
      setCurrentImg(index);
    }
  };

  return (
    <div className={styles.galleryCont}>
      {/*Current Image*/}
      {gallery.length > 0 ? (
        <>
          {/*Mobile: current image*/}
          <div className={styles.mobileImgCont}>
            <ProductImage
              path={gallery[currentImg].imagePath}
              description={gallery[currentImg].imageDescription}
              intrinsicWidth={1000}
              intrinsicHeight={1000}
            />
          </div>

          {/*Desktop: button with current image*/}
          <div className={styles.desktopImgCont}>
            <button className="buttonIcon">
              <ProductImage
                path={gallery[currentImg].imagePath}
                description={gallery[currentImg].imageDescription}
                intrinsicWidth={1000}
                intrinsicHeight={1000}
              />
            </button>
          </div>
        </>
      ) : null}

      {/*Mobile image navigation: prev/next buttons*/}
      <div className={`verticallyCenter ${styles.leftArrowCont}`}>
        <ArrowButton
          direction="left"
          ariaLabel="Previous Product Image"
          handleClick={showPreviousImg}
        />
      </div>

      <div className={`verticallyCenter ${styles.rightArrowCont}`}>
        <ArrowButton
          direction="right"
          ariaLabel="Next Product Image"
          handleClick={showNextImg}
        />
      </div>

      {/*Desktop: Thumbnail list*/}
      <div className={styles.desktopThumbnailCont}>
        <ThumbnailList
          gallery={gallery}
          selectedImg={currentImg}
          handleSelectImg={showImg}
        />
      </div>

      {/*TO DO - add modal image with thumbnail list*/}
    </div>
  );
}
