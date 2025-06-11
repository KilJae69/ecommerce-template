// app/collections/page.tsx

import React from "react";
import { Suspense } from "react";
import CollectionsPageClientWrapper from "@/components/products-page/CollectionsPageClientWrapper";
import ProductsGrid from "@/components/products-page/ProductsGrid";
import { getFilteredProducts } from "@/constants/products";


type FilterParams = {
  brands?: string;
  sizes?: string;
  colors?: string;
  genders?: string;
  minPrice?: string;
  maxPrice?: string;
  sort?: string;
};

export default async function CollectionsPage({
  searchParams: searchParamsPromise,
}: {
  searchParams: Promise<FilterParams>;
}) {
   // 1. await the dynamic searchParams API
  const params = await searchParamsPromise;

  // 2. now it’s safe to read params.brands, params.sort, etc.
  const { products, totalCount } = await getFilteredProducts(params);

  return (
    <section className="relative pb-12 mt-42 lg:pb-24">
      <CollectionsPageClientWrapper totalCount={totalCount}>
        <Suspense fallback={<div>Loading products…</div>}>
          {/* Child server component that fetches & renders your grid */}
          <ProductsGrid filteredProducts={products} />
        </Suspense>
      </CollectionsPageClientWrapper>
    </section>
  );
}
