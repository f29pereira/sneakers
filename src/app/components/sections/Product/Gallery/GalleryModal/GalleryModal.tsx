import styles from "./GalleryModal.module.css";
import type { GalleryModal } from "@/app/components/types";
import CloseButton from "@/app/components/ui/Buttons/CloseButton/CloseButton";
import ProductImage from "../ProductImage/ProductImage";
import ArrowButton from "@/app/components/ui/Buttons/ArrowButton/ArrowButton";
import ThumbnailList from "../ThumbnailList/ThumbnailList";

/**
 * Renders the product images gallery modal for desktop screens with:
 * - Close modal button
 * - Current image with prev/next button navigation
 * - list of thumbnails
 *
 * Props are defined in {@link GalleryModal}.
 */
export default function GalleryModal({
  gallery,
  selectedImg,
  handleClose,
  handleSelectPrevImg,
  handleSelectNextImg,
  handleSelectImg,
}: GalleryModal) {
  return (
    <div className={styles.modalCont}>
      <div className={`flex-col-center ${styles.contentCont}`}>
        <div>
          {/*Close button*/}
          <div className={styles.closeBtnCont}>
            <CloseButton
              ariaLabel="Close Menu"
              className={styles.closeModalBtn}
              handleClose={handleClose}
            />
          </div>

          <div className={styles.imgsCont}>
            {/*Current Image*/}
            <ProductImage
              path={gallery[selectedImg].imagePath}
              description={gallery[selectedImg].imageDescription}
              className={styles.modalImg}
              intrinsicWidth={1000}
              intrinsicHeight={1000}
            />

            {/*Image navigation: prev/next buttons*/}
            <div className={`verticallyCenter ${styles.leftArrowCont}`}>
              <ArrowButton
                direction="left"
                ariaLabel="Previous Product Image"
                className={styles.imgBtn}
                handleClick={handleSelectPrevImg}
              />
            </div>

            <div className={`verticallyCenter ${styles.rightArrowCont}`}>
              <ArrowButton
                direction="right"
                ariaLabel="Next Product Image"
                className={styles.imgBtn}
                handleClick={handleSelectNextImg}
              />
            </div>
          </div>

          {/*Thumbnail list*/}
          <ThumbnailList
            gallery={gallery}
            selectedImg={selectedImg}
            handleSelectImg={handleSelectImg}
          />
        </div>
      </div>
    </div>
  );
}
