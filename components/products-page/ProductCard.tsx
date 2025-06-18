// components/ProductCard.tsx
import { Product } from "@/constants/productsData";
import Image from "next/image";
import Link from "next/link";
import LogoFactory from "./LogoFactory";

// import ProductCardActions from "./ProductCardActions";

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
      className="group relative block"
    >
      <div className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        {/* Image Container */}
        <div className="aspect-square bg-gray-100 relative overflow-hidden">
          <Image
            src={product.variants[0].images[0]}
            alt={product.name}
            fill
            priority={index < 4}
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
            <p className="font-medium">${product.price}.00</p>
          </div>
        </div>
      </div>

      {/* Mobile Action Buttons (always visible below image) */}
      {/* <div className="sm:hidden absolute top-2 flex-col right-2 flex justify-center gap-4">
        {[Eye, ShoppingCart, Heart].map((Icon, i) => (
          <button
            key={i}
            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
          >
            <Icon className="w-4 h-4 text-gray-700" />
          </button>
        ))}
      </div> */}

         {/* Action Buttons */}
          {/* <ProductCardActions
            productId={product.id}
            name={product.name}
            price={product.price}
            image={product.variants[0].images[0]}
            color={product.variants[0].color}
            size={product.variants[0].sizes[0]}
            slug={product.slug}
            brand={product.brand}
          /> */}
    </Link>
  );
}
