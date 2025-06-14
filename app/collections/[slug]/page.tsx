// app/collections/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";

import { dummyProducts } from "@/constants/productsData";
import { Container } from "@/components/shared/Container";
import { VariantSelector } from "@/components/products-page/VariantSelector";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { FaShopify } from "react-icons/fa";
import { SingleProductGallery } from "@/components/products-page/SingleProductGallery";

type PageProps = {
  // note: both params and searchParams are now Promises
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ color?: string; size?: string }>;
};

export default async function ProductPage(props: PageProps) {
  const { slug } = await props.params;
  const { color, size } = await props.searchParams;
  const product = dummyProducts.find((p) => p.slug === slug);
  if (!product) return notFound();

  // Determine which variant is selected (via ?variant=23-1)
  const colorVariant =
    product.variants.find((v) => v.color === color) ?? product.variants[0];
  // pick a size (fall back to first of that color)
  const selectedSize =
    size && colorVariant.sizes.includes(size) ? size : colorVariant.sizes[0];

  return (
    <section className="relative py-12 mt-42 lg:pb-24">
      <Container>
        <Link
          href="/collections"
          className="text-gray-600 hover:text-gray-900 mb-6 inline-block"
        >
          ← Back to Collections
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          {/* ───────────────────── Gallery ───────────────────── */}
          <SingleProductGallery
            images={colorVariant.images}
            alt={`${product.name} – ${colorVariant.color}`}
          />

          {/* ────────────────── Info & Buy ────────────────── */}
          <div className="flex flex-col space-y-6">
            <div>
              <span className="text-xs text-red-500 font-semibold">
                NEW ARRIVAL!
              </span>
              <h1 className="text-3xl font-bold mt-1">{product.name}</h1>
              <div className="mt-2 text-gray-600">
                {product.brand.toUpperCase()}
              </div>
            </div>

            <div>
              <span className="text-2xl font-semibold">${product.price}</span>
            </div>

            <VariantSelector slug={slug} variants={product.variants} />

            <div className="flex space-x-4">
              <InteractiveHoverButton  icon={<FaShopify />}>
                Add to cart
              </InteractiveHoverButton>
            </div>
          </div>
        </div>

        {/* ───────────────── Details & Ratings ───────────────── */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">Product Info</h2>
            <p className="text-gray-700">{product.description}</p>
            <ul className="list-disc ml-5 mt-4 text-gray-700">
              <li>Discount: &gt; $100 get 10%</li>
              <li>Package: Standard Box</li>
              <li>Delivery: 5–10 working days</li>
              <li>Returns: Free within 30 days</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Ratings</h2>
            <div className="flex items-center space-x-2">
              <span className="text-4xl font-bold">4.8</span>
              <span className="text-gray-500">/ 5</span>
            </div>
            <p className="text-gray-500 mt-1">(56 reviews)</p>
            <div className="mt-4 space-y-2">
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="flex items-center">
                  <span className="w-8">{star}★</span>
                  <div className="flex-1 h-2 bg-gray-200 rounded overflow-hidden mx-2">
                    <div
                      className="h-full bg-red-500"
                      style={{ width: `${star * 15}%` }}
                    />
                  </div>
                  <span className="w-6 text-right">
                    {Math.floor(star * 11)}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </Container>
    </section>
  );
}
