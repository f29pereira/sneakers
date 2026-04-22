import Product from "./components/sections/Product/Product";
import { getProduct } from "./components/sections/Product/Product.utils";

export default function Home() {
  const productInfo = getProduct();

  return <Product product={productInfo} />;
}
