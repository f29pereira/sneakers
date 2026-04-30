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
            <svg
              className={styles.hamburgerIcon}
              aria-hidden="true"
              viewBox="0 0 16 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" />
            </svg>
          </button>
        </>
      ) : (
        <MobileNav handleToggle={toggle} />
      )}
    </>
  );
}
