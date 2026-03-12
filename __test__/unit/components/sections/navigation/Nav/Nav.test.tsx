import { render } from "@testing-library/react";
import { renderWithProviders } from "../../../../../helpers/reduxHelper";
import Nav from "@/app/components/sections/navigation/Nav/Nav";
import { checkNav } from "../../../../../helpers/sneakersHelper";

/**
 * Unit testing for component: Nav
 */
describe("Nav component", () => {
  beforeEach(() => {
    renderWithProviders(<Nav />);
  });

  it("renders the mobile navigation hamburguer button, brand logo, user's shopping cart toggle button and profile link", () => {
    checkNav();
  });
});
