import { render } from "@testing-library/react";
import MobileNav from "@/app/components/sections/navigation/MobileNavigation/MobileNav/MobileNav";
import { checkMobileNav } from "../../../../../../helpers/sneakersHelper";

/**
 * Unit testing for component: MobileNav
 */
describe("MobileNav component", () => {
  render(<MobileNav handleToggle={() => {}} />);

  it("renders mobile navigation links", () => {
    checkMobileNav();
  });
});
