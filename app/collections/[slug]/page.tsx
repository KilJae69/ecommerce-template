// app/products/[slug]/page.tsx
"use client";

import { notFound } from "next/navigation";

import Image from "next/image";
import { dummyProducts } from "@/constants/productsData";
import { useState } from "react";
import VariantSelector from "@/components/products-page/VariantSelector";
import { Container } from "@/components/shared/Container";


export default function ProductPage({ params }: { params: { slug: string } }) {
    const product = dummyProducts.find(p => p.slug === params.slug);
    const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] );
  
  if (!product) {
    return notFound();
  }


  return (
    <section className="relative pb-12 mt-42 lg:pb-24">
        <Container>

       
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={selectedVariant?.images[0]}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {selectedVariant?.images.map((image, index) => (
              <div key={index} className="aspect-square relative bg-gray-100 rounded overflow-hidden">
                <Image
                  src={image}
                  alt={`${product.name} - ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p className="text-gray-600">{product.brand}</p>
            <p className="text-xl font-medium mt-2">${selectedVariant?.price}</p>
          </div>

          <VariantSelector
            variants={product.variants}
            onVariantChange={(variantId) => {
              const variant = product.variants.find(v => v.id === variantId);
              if (variant) setSelectedVariant(variant);
            }}
          />

          <div className="space-y-4">
            <p className="text-gray-700">{product.description}</p>
            <button className="w-full bg-primary-accent text-white py-3 rounded-md hover:bg-primary-accent/90 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
       </Container>
    </section>
  );
}