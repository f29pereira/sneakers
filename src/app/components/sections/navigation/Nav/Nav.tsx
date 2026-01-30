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
      </div>

      {/*Right Navigation*/}
      <ul className={styles.rightNavCont} aria-label="User Links">
        {/*Shopping Cart*/}
        <li className={styles.cartItem}>
          <Link className={styles.navLink} href="#">
            <svg
              className={styles.cartIcon}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fillRule="nonzero"
              />
            </svg>
          </Link>
        </li>

        {/*User Profile*/}
        <li className={styles.avatarItem}>
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
