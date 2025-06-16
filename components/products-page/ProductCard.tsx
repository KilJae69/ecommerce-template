import { Product } from "@/constants/productsData";
import Image from "next/image";
import Link from "next/link";
import LogoFactory from "./LogoFactory";

export default function ProductCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  return (
    <Link
      href={`/collections/${product.slug}?color=${product.variants[0].color}&size=${product.variants[0].sizes[0]}`}
      className="group"
    >
      <div className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="aspect-square bg-gray-100 relative overflow-hidden">
          <Image
            src={product.variants[0].images[0]}
            alt={product.name}
            fill
            priority={index < 2}
            className="object-cover group-hover:scale-105 transition "
          />
        </div>
        <div className="">
          <div className="px-4 py-4 border-b border-dashed">
            <h3 className="font-medium text-lg  group-hover:text-primary-accent transition">
              {product.name}
            </h3>
          </div>
          <div className="px-4 py-4 flex items-center justify-between">
            <LogoFactory small brand={product.brand} />
            <p className="font-medium ">${product.price}.00</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
