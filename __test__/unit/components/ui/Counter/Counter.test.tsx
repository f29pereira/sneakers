import { render } from "@testing-library/react";
import Counter from "@/app/components/ui/Counter/Counter";
import { checkCounter } from "../../../../helpers/sneakersHelper";

/**
 * Unit testing for component: Counter
 */
describe("Counter component", () => {
  render(<Counter />);

  it("renders the decrease button, counter value and increase button", () => {
    checkCounter();
  });
});
