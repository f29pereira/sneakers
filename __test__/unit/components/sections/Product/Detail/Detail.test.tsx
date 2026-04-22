import { render } from "@testing-library/react";
import Detail from "@/app/components/sections/Product/Detail/Detail";
import { checkDetail } from "../../../../../helpers/sneakersHelper";
import { getProductDetailsData } from "../../../../../../fixtures/sneakers.fixture";

/**
 * Unit testing for component: Detail
 */
describe("Detail component", () => {
  render(<Detail details={getProductDetailsData()} />);

  it("renders the product: company, name, description, current price, discount percentage and original price", () => {
    checkDetail();
  });
});
