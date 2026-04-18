"use client"; //Client Component
import styles from "./MobileNavToggle.module.css";
import Image from "next/image";
import { useEffect } from "react";
import useToggle from "@/app/components/customHooks/useToggle";
import { useOnEscape } from "@/app/components/customHooks/useOnEscape";
import MobileNav from "../MobileNav/MobileNav";

/**
 * Renders when mobile navigation pop-up is:
 *
 * closed: button with hamburger icon
 *
 * open: MobileNav component with navigation links
 */
export default function MobileNavToggle() {
  const { isToggled, toggle } = useToggle(false);

  useOnEscape(isToggled, toggle); // close pop-up on escape

  return (
    <>
      {!isToggled ? (
        <>
          {/*Open Mobile Navigation Button*/}
          <button
            className={`buttonIcon ${styles.hamburgerButton}`}
            aria-label={isToggled ? "Close Menu" : "Open Menu"}
            aria-expanded={isToggled}
            onClick={toggle}
          >
            <Image
              className={styles.hamburgerIcon}
              src="images/icons/icon-menu.svg"
              alt=""
              width={16}
              height={15}
            />
          </button>
        </>
      ) : (
        <MobileNav handleToggle={toggle} />
      )}
    </>
  );
}
