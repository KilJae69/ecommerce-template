// app/collections/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";

import { dummyProducts } from "@/constants/productsData";
import { Container } from "@/components/shared/Container";
import { VariantSelector } from "@/components/products-page/VariantSelector";

import { SingleProductGallery } from "@/components/products-page/SingleProductGallery";
import { Button } from "@/components/ui/button";

import LogoFactory from "@/components/products-page/LogoFactory";
import Ratings from "@/components/products-page/Ratings";
import ProductInfoTabs from "@/components/products-page/ProductInfoTabs";
import GlareCTA from "@/components/shared/GlareCTA";

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          {/* ───────────────────── Gallery ───────────────────── */}
          <SingleProductGallery
            images={colorVariant.images}
            alt={`${product.name} – ${colorVariant.color}`}
          />

          {/* ────────────────── Info & Buy ────────────────── */}
          <div className="flex flex-col flex-1 space-y-6 ">
            <div className="space-y-4">
              <span className="text-lg inline-block text-primary-accent font-semibold">
                NEW ARRIVAL!
              </span>
              <h1 className="text-3xl font-bold mt-1">{product.name}</h1>
              <div className="mt-2 text-gray-600 flex flex-col sm:flex-row sm:items-center gap-3">
                <LogoFactory brand={product.brand} />
                <div className="hidden sm:block size-2 bg-gray-600 rounded-full" />
                <div className="flex items-center gap-3">
                  <Ratings />
                  <div className=" size-2 bg-gray-600 rounded-full" />
                  <p>687 items sold</p>
                </div>
              </div>
            </div>

            <div>
              <span className="text-4xl font-semibold">${product.price}.00</span>
            </div>

            <VariantSelector slug={slug} variants={product.variants} />

            <div className="flex space-x-4">
              <Button className="bg-primary-accent text-xl w-full cursor-pointer shadow-lg text-white font-semibold tracking-wider py-4 h-auto px-7">
                Add to cart
              </Button>
            </div>
          </div>
        </div>

        {/* ───────────────── Details & Ratings ───────────────── */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
          <ProductInfoTabs/>
          </section>

          <section>
            <h2 className="text-xl md:text-3xl font-semibold mb-4">Ratings</h2>
            <div className="flex items-center space-x-2">
              <span className="text-7xl font-bold">4.9</span>
              <span className="text-gray-500">/ 5</span>
            </div>
            <p className="text-gray-500 mt-1">(95 reviews)</p>
            <div className="mt-4 space-y-2">
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="flex items-center">
                  <span className="w-8 ">{star} <span className="text-primary-accent text-lg">★</span></span>
                  <div className="flex-1 h-2 bg-gray-200 rounded overflow-hidden mx-2">
                    <div
                      className="h-full bg-primary-accent"
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
        <GlareCTA/>
      </Container>
    </section>
  );
}
