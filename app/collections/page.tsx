// app/collections/page.tsx

import React from "react";
import { Suspense } from "react";
import CollectionsPageClientWrapper from "@/components/products-page/CollectionsPageClientWrapper";
import { ProductsGridSkeleton } from "@/components/products-page/ProductsGrid";
import { FilterParams,  } from "@/constants/getFilteredProducts";
import  { ProductsStickyHeaderSkeleton } from "@/components/products-page/ProductsStickyHeader";
import ProductsGridAsyncWrapper from "@/components/products-page/ProductsGridAsyncWrapper";
import ProductsStickyHeaderAsyncWrapper from "@/components/products-page/ProductsStickyHeaderAsyncWrapper";





export default async function CollectionsPage({
  searchParams,
}: {
  searchParams: Promise<FilterParams>;
}) {
  // 1. await the dynamic searchParams API
  



  return (
    <section className="relative pb-12 mt-42 lg:pb-24">
     
      <CollectionsPageClientWrapper>
      
        <Suspense fallback={<ProductsStickyHeaderSkeleton />}>
        <ProductsStickyHeaderAsyncWrapper searchParams={searchParams} />
      </Suspense>
          <Suspense fallback={<ProductsGridSkeleton />}>
        <ProductsGridAsyncWrapper searchParams={searchParams} />
      </Suspense>
      </CollectionsPageClientWrapper>
    </section>
  );
}
