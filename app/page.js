import Header from "@/components/Header";
import Support from "@/components/Support";
import Towards from "@/components/Towards";
import getProducts from "./api/route";

export default function Home() {
  const products = getProducts();
  console.log(products);
  return (
    <>
      <Header />
      <Support data={products} />
      <Towards />
    </>
  );
}
