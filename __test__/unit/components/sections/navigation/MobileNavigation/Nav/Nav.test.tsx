import { render, screen } from "@testing-library/react";
import Nav from "@/app/components/sections/navigation/Nav/Nav";
import { checkNav } from "../../../../../../helpers/sneakersHelper";

/**
 * Unit testing for component: Nav
 */
describe("Nav component", () => {
  render(<Nav />);

  it("renders a hamburguer button, the brand logo and main/user links", () => {
    checkNav();
  });
});
