import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MobileNavToggle from "@/app/components/sections/navigation/MobileNavigation/MobileNavToggle/MobileNavToggle";
import { checkMobileNavToggle } from "../../../../../../helpers/sneakersHelper";

/**
 * Unit testing for component: MobileNavToggle
 */
describe("MobileNavToggle component", () => {
  beforeEach(() => {
    render(<MobileNavToggle />);
  });

  it("renders the open navigation pop-up button", () => {
    checkMobileNavToggle();
  });

  it("toggles the rendering of the mobile navigation pop-up", async () => {
    const hamburgerBtn = screen.getByRole("button", { name: "Open Menu" });
    await userEvent.click(hamburgerBtn);

    // Render MobileNav
    expect(screen.getByTestId("mobile-nav")).toBeInTheDocument();

    const closeBtn = screen.getByRole("button", { name: "Close Menu" });
    await userEvent.click(closeBtn);

    // New render of MobileNavToggle
    const newHamburgerBtn = screen.getByRole("button", { name: "Open Menu" });
    expect(newHamburgerBtn).toBeInTheDocument();
  });
});
