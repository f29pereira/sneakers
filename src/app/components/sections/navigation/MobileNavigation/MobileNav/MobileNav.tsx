import styles from "./MobileNav.module.css";

import Image from "next/image";
import Link from "next/link";
import type { MobileNavProps } from "../../../../types";

/**
 * Renders mobile navigation with links for:
 * - Collections
 * - Men
 * - Woman
 * - About
 * - Contact
 */
export default function MobileNav({ handleToggle }: MobileNavProps) {
  return (
    <div className={styles.popUpCont}>
      <nav className={styles.mobileNavCont}>
        {/*Close Mobile Navigation Button*/}
        <button
          className={`iconBtn ${styles.closeButton}`}
          aria-label="Close Menu"
          onClick={handleToggle}
        >
          <Image
            className={styles.hamburgerIcon}
            src="images/icons/icon-close.svg"
            alt=""
            width={16}
            height={15}
          />
        </button>

        {/*Mobile Navigation*/}
        <ul>
          <li className={styles.item}>
            <Link className={styles.navLink} href="#">
              Collections
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.navLink} href="#">
              Men
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.navLink} href="#">
              Woman
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.navLink} href="#">
              About
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.navLink} href="#">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
