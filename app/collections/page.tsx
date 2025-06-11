// app/collections/page.tsx

import React, { Suspense } from "react";

import CollectionsPageClientWrapper from "@/components/products-page/CollectionsPageClientWrapper";

import ProductsGridClient from "@/components/products-page/ProductsGridClient";
import ProductsStickyHeaderClient from "@/components/products-page/ProductsStickyHeaderClient";
import { ProductsStickyHeaderSkeleton } from "@/components/shared/Skeletons";

export default function CollectionsPage() {
  // 1. await the dynamic searchParams API

  return (
    <section className="relative pb-12 mt-42 lg:pb-24">
      <CollectionsPageClientWrapper>
        <Suspense fallback={<ProductsStickyHeaderSkeleton />}>
          <ProductsStickyHeaderClient />
        </Suspense>
        <Suspense>
          <ProductsGridClient />
        </Suspense>
      </CollectionsPageClientWrapper>
    </section>
  );
}
