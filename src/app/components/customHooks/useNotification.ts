"use client"; // Client Component
import { useContext } from "react";
import { NotificationContext } from "../ui/Notification/NotificationProvider";

/**
 * Custom Hook: allows access to the NotificationContext
 */
export function useNotification() {
  const context = useContext(NotificationContext);

  if (!context) {
    throw new Error(
      "useNotification must be used inside a NotificationProvider",
    );
  }

  return context;
}
