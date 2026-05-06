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

const initialState: NotificationState = { message: "" };

const reducer = (
  state: NotificationState,
  action: NotificationReducerAction,
) => {
  switch (action.type) {
    case "add_item":
      return { message: "Item added to your cart." };
    case "remove_item":
      return { message: "Item removed from your cart." };
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
   * Creates notification and removes it after 3 seconds
   */
  const notify = (notification: NotificationReducerAction) => {
    dispatch({ type: notification.type });
    setTimeout(() => dispatch({ type: "reset" }), 3000);
  };

  return (
    <NotificationContext value={{ notification, notify }}>
      {children}
    </NotificationContext>
  );
}
