"use client"; //Client Component

import styles from "./MobileNavToggle.module.css";
import Image from "next/image";
import { useState } from "react";
import MobileNav from "../MobileNav/MobileNav";

/**
 * Renders when mobile navigation pop-up is:
 *
 * closed: button with hamburger icon
 *
 * open: MobileNav component with navigation links
 */
export default function MobileNavToggle() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  /**
   * Toggles the mobile navigation pop-up
   */
  const toggleMobileNav = () => {
    setIsMobileNavOpen((prev) => !prev);
  };

  return (
    <>
      {!isMobileNavOpen ? (
        <>
          {/*Open Mobile Navigation Button*/}
          <button
            className={`mobileIconBtn ${styles.hamburgerButton}`}
            aria-label={isMobileNavOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isMobileNavOpen}
            onClick={toggleMobileNav}
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
        <MobileNav handleToggle={toggleMobileNav} />
      )}
    </>
  );
}
