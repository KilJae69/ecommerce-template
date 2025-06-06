// app/collections/page.tsx  (or wherever your CollectionsPage lives)
"use client";

import { Container } from "@/components/shared/Container";
import React from "react";
import dynamic from "next/dynamic";

const DynamicMobileFiltersBar = dynamic(
  () => import("@/components/products-page/MobileFiltersBar"),
  { ssr: false }
);
const DynamicDesktopFiltersSidebar = dynamic(
  () => import("@/components/products-page/FiltersSidebar"),
  { ssr: false }
);

export default function CollectionsPage() {
  return (
    <section className="relative py-12 mt-42 lg:pb-24">
      <Container>
        <div className="flex flex-col md:flex-row gap-8">
          {/* ────────────────────────────────────────────── */}
          {/* Desktop: Sticky Sidebar (≥md)               */}
          {/* ────────────────────────────────────────────── */}
          <aside className="hidden md:block md:w-64 lg:w-72 ">
            <div className="sticky top-42  self-start h-[calc(100vh-181px)] overflow-y-auto bg-gray-50 px-4 py-8 rounded-md shadow-md">
              <DynamicDesktopFiltersSidebar />
            </div>
          </aside>

          {/* ────────────────────────────────────────────── */}
          {/* Main Content: Products Grid                 */}
          {/* Give a bottom‐padding so fixed bar on mobile */}
          {/* does not overlap the last rows.               */}
          {/* ────────────────────────────────────────────── */}
          <div className="w-full pb-20 md:pb-0">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 42 }, (_, i) => (
                <div
                  key={i}
                  className="h-48 bg-blue-100 rounded-md flex items-center justify-center text-gray-700"
                >
                  Product {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* ────────────────────────────────────────────── */}
      {/* Mobile: Fixed “Filters + Sort” Bar (≤md)     */}
      {/* ────────────────────────────────────────────── */}
      <DynamicMobileFiltersBar />
    </section>
  );
}
