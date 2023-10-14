import Image from "next/image";
import { Product } from "@prisma/client";
import Link from "next/link";

interface FirstProductProps {
  product: Product;
}

export default function FirstProduct({ product }: FirstProductProps) {
  return (
    <div className="hero rounded-xl bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={400}
          height={800}
          className="w-full max-w-sm rounded-lg shadow-2xl"
          priority
        />
        <div>
          <h1 className="text-5xl font-bold">{product.name}</h1>
          <p className="py-6">{product.description}</p>
          <Link href={"/products/" + product.id} className="btn-primary btn">
            Check it Out
          </Link>
        </div>
      </div>
    </div>
  );
}
