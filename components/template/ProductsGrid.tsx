"use client"
import { Product } from "@/constants/productsData";
import { AnimatePresence,motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function ProductsGrid({
  filteredProducts,
}: {
  filteredProducts: Product[];
}) {
  return (
    <div className="grid gap-4 mt-8 px-2 sm:grid-cols-2 lg:grid-cols-3">
       <AnimatePresence>

      {filteredProducts.map((product, index) => (
         <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >

        <Link
        
        href={`/collections/${product.slug}`}
        className="group"
        >
          <div className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="aspect-square bg-gray-100 relative">
              <Image
                src={product.variants[0].images[0]}
                alt={product.name}
                fill
                priority={index === 0}
                className="object-cover"
                />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-lg group-hover:text-primary-accent transition">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm">{product.brand}</p>
              <p className="font-medium mt-2">${product.price}</p>
            </div>
          </div>
        </Link>
                </motion.div>
      ))}
      </AnimatePresence>
    </div>
  );
}

export function ProductsGridSkeleton() {
  return (
    <div className="grid gap-4 mt-8 px-2 sm:grid-cols-2 lg:grid-cols-3 animate-pulse">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="bg-white rounded-md overflow-hidden shadow-sm">
          {/* Image placeholder */}
          <div className="aspect-square bg-gray-200" />

          {/* Text placeholders */}
          <div className="p-4 space-y-2">
            <div className="h-5 w-3/4 bg-gray-200 rounded" />
            <div className="h-4 w-1/2 bg-gray-200 rounded" />
            <div className="h-5 w-1/4 bg-gray-200 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}