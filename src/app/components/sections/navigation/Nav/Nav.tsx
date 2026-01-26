import styles from "./Nav.module.css";
import Image from "next/image";
import Link from "next/link";
import MobileNavToggle from "../MobileNavigation/MobileNavToggle/MobileNavToggle";

/**
 * Renders desktop/mobile main navigation with links for:
 * Left Navigation:
 * - Collections
 * - Men
 * - Woman
 * - About
 * - Contact
 *
 * Right Navigation:
 * - User Shopping Cart
 * - User Profile
 */
export default function Nav() {
  return (
    <nav className={styles.navCont}>
      {/*Left navigation*/}
      <div className={styles.leftNavCont}>
        <MobileNavToggle />

        {/*Logo*/}
        <Image
          className={styles.navLogo}
          src="images/logo.svg"
          alt="Sneakers Logo"
          width={138}
          height={20}
        />

        {/*Desktop navigation*/}
        <ul className={styles.leftNavDesktop}>
          <li>
            <Link className={styles.navLink} href="#">
              Collections
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} href="#">
              Men
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} href="#">
              Woman
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} href="#">
              About
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} href="#">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/*Right Navigation*/}
      <ul className={styles.rightNavCont} aria-label="User Links">
        {/*Shopping Cart*/}
        <li>
          <Link className={styles.navLink} href="#">
            <Image
              className={styles.cart}
              src="images/icons/icon-cart.svg"
              alt="My cart"
              width={22}
              height={20}
            />
          </Link>
        </li>

        {/*User Profile*/}
        <li>
          <Link className={styles.navLink} href="#">
            <img
              src="images/user/image-avatar.png"
              alt="My profile"
              className={styles.avatar}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
