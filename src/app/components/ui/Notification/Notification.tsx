"use client"; // Client Component
import styles from "./Notification.module.css";
import { useNotification } from "../../customHooks/useNotification";
import CloseButton from "../Buttons/CloseButton/CloseButton";

/**
 * Renders a toast notification with success  or error icon, message and close button
 *
 * For mobile screens:
 * - the notification is centered.
 *
 * For desktop screens:
 * - the notification is placed on the right of the screen.
 */
export default function Notification() {
  const { notification, closeNotification } = useNotification();

  return (
    <div
      className={`flex-center verticallyCenter ${styles.wrapperCont}`}
      aria-live="assertive"
      aria-atomic="true"
      data-testid="notification"
    >
      {notification.message !== "" ? (
        <div
          className={`${styles.notifCont} ${notification.isSuccess ? styles.success : styles.error}`}
        >
          <div className={`${styles.contentCont}`}>
            {notification.isSuccess ? (
              // Success Icon
              <div className={styles.sucessIconCont}>
                <svg
                  className={styles.icon}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-testid="successIcon"
                >
                  <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
            ) : (
              // Error Icon
              <div className={styles.errorIconCont}>
                <svg
                  className={styles.icon}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-testid="errorIcon"
                >
                  <path d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
            )}
            {/*Message*/}
            <span className={styles.message}>{notification.message}</span>

            <CloseButton
              ariaLabel="Close notification"
              className={styles.closeNotifBtn}
              handleClose={closeNotification}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
