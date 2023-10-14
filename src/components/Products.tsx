import { Product } from "@prisma/client";
import ProductCard from "@/components/ProductCard";

interface ProductsProps {
  products: Array<Product>;
}

export default function Products({ products }: ProductsProps) {
  return (
    <div className="my-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
