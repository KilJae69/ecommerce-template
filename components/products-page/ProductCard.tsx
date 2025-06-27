// components/ProductCard.tsx

import Image from "next/image";
import Link from "next/link";
import LogoFactory from "./LogoFactory";


import { Product } from "@/constants/productsDataV2";
import { MovingBorderBadge } from "../shared/MovingBorderBadge";
import dynamic from "next/dynamic";

const ProductCardActions = dynamic(() => import("./ProductCardActions"), {
  ssr: false, // never render on the server
  loading: () => <div className="bg-gray-200 rounded-full size-6 animate-pulse"></div>,
});

export default function ProductCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  console.log(product);
  return (
    <Link
      href={`/collections/${product.slug}?color=${product.variants[0].color}&size=${product.variants[0].sizes[0]}`}
      className="group relative block"
    >
      {product.onSale && (
        <div className="absolute top-1 left-1 z-10">
          <MovingBorderBadge
            duration={2000}
            className="text-xs p-1"
            text={`${product.discountPercentage}%` || ""}
          />
        </div>
      )}
      {product.isPopular && (
        <div className="absolute flex items-center top-1 left-1/2 -translate-x-1/2 z-10">
          <Image
          unoptimized
            src="/gifs/fire-hot.gif"
            alt="fire gif"
            width={40}
            height={40}
          />
          <span className="text-rose-600 font-bold">HOT</span>
        </div>
      )}
      <div className="bg-white relative rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        {/* Image Container */}
        <div className="aspect-square bg-gray-100 relative overflow-hidden">
          <Image
            src={product.variants[0].images[0]}
            alt={product.name}
            fill
            priority={index < 2}
            className="object-cover group-hover:scale-105 transition duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="">
          <div className="px-2 sm:px-4 sm:py-4 py-2 border-b border-dashed">
            <h3 className="font-medium sm:text-lg truncate group-hover:text-primary-accent transition">
              {product.name}
            </h3>
          </div>
          <div className="px-2 sm:px-4 py-2 sm:py-4 flex items-center justify-between">
            <div className="hidden sm:block">
              <LogoFactory small brand={product.brand} />
            </div>
            <div className="flex items-baseline sm:text-lg space-x-2">
              {product.onSale ? (
                <>
                  <span className="text-gray-400 text-xs line-through">
                    ${product.price.toFixed(0)}.00
                  </span>
                  <span className=" font-semibold text-primary-accent">
                    ${product.salePrice!.toFixed(0)}.00
                  </span>
                </>
              ) : (
                <span className=" font-medium">
                  ${product.price.toFixed(0)}.00
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

  

      {/* Action Buttons */}
      <ProductCardActions
        productId={product.id}
        name={product.name}
        price={product.salePrice || product.price}
        image={product.variants[0].images[0]}
        color={product.variants[0].color}
        size={product.variants[0].sizes[0]}
        slug={product.slug}
        brand={product.brand}
      />
    </Link>
  );
}
