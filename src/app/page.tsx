import FirstProduct from "@/components/FirstProduct";
import Products from "@/components/Products";
import { prisma } from "@/lib/db/prisma";

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: {
      id: "desc",
    },
  });
  const firstProduct = products[0];
  return (
    <div>
      <FirstProduct product={firstProduct} />
      <Products products={products.slice(1)} />
    </div>
  );
}
