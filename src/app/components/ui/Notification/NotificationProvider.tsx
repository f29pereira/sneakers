"use client"; // Client Component
import { createContext, useReducer } from "react";
import type {
  ReactChildrenProp,
  NotificationState,
  NotificationContextType,
  NotificationReducerAction,
} from "../../types";

export const NotificationContext = createContext<
  NotificationContextType | undefined
>(undefined);

const initialState: NotificationState = { message: "", isSucess: false };

const reducer = (
  state: NotificationState,
  action: NotificationReducerAction,
) => {
  switch (action.type) {
    case "add_item":
      return {
        message: "Item added to cart",
        isSucess: true,
      };
    case "remove_item":
      return { message: "Item removed from cart", isSucess: true };
    case "error":
      return {
        message: "Sorry something went wrong. Please try again",
        isSucess: false,
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

/**
 * Provides context: NotificationContext
 */
export default function NotificationProvider({ children }: ReactChildrenProp) {
  const [notification, dispatch] = useReducer(reducer, initialState);

  /**
   * Creates notification and removes it after the timeout value
   * @param notification - notification type
   * @param timeout      - timeout value in milliseconds
   */
  const notify = (notification: NotificationReducerAction, timeout: number) => {
    dispatch({ type: notification.type });
    setTimeout(() => dispatch({ type: "reset" }), timeout);
  };

  /**
   * Closes the current notification
   */
  const closeNotification = () => {
    dispatch({ type: "reset" });
  };

  return (
    <NotificationContext value={{ notification, notify, closeNotification }}>
      {children}
    </NotificationContext>
  );
}
