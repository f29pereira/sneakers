import { renderWithProviders } from "../../../../../helpers/reduxHelper";
import Nav from "@/app/components/sections/navigation/Nav/Nav";
import { checkNav } from "../../../../../helpers/sneakersHelper";

/**
 * Unit testing for component: Nav
 */
describe("Nav component", () => {
  beforeEach(() => {
    renderWithProviders(<Nav />, {
      preloadedState: {
        theme: { isDarkTheme: false },
      },
    });
  });

  it("renders the mobile navigation hamburguer button, brand logo, theme toggle button, user's shopping cart toggle button and profile link", () => {
    checkNav();
  });
});
