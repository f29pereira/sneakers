import { render } from "@testing-library/react";
import NotificationProvider from "@/app/components/ui/Notification/NotificationProvider";
import Notification from "@/app/components/ui/Notification/Notification";
import { checkNotification } from "../../../../helpers/sneakersHelper";
import { getSuccessNotification } from "../../../../../fixtures/sneakers.fixture";
import type { NotificationContextType } from "@/app/components/types";

// Mock NotificationContext
const mockContext: NotificationContextType = {
  notification: getSuccessNotification(),
  notify: jest.fn(),
  closeNotification: jest.fn(),
};

// Mock useNotification hook
jest.mock("@/app/components/customHooks/useNotification", () => ({
  useNotification: () => ({ ...mockContext }),
}));

/**
 * Unit testing for component: Counter
 */
describe("Notification component", () => {
  /**
   * Notication component rendering
   */
  beforeEach(() => {
    render(
      <NotificationProvider>
        <Notification />
      </NotificationProvider>,
    );
  });

  it("renders a success notification with icon, message and close button", () => {
    const notification = getSuccessNotification();
    checkNotification(notification.message);
  });
});
