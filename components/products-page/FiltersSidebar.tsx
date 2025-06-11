// components/products-page/FiltersSidebar.tsx
"use client";

import React from "react";
import { IoFilter } from "react-icons/io5";

import FilterPanel from "./FilterPanel";

export default function FiltersSidebar() {
  return (
    <div className="space-y-8">
      {/* Optionally keep your “Sorting” / “Filters” header, as before */}
      <div className="flex items-center gap-2 text-2xl text-primary-accent border-b pb-3">
        <IoFilter />
        <h2 className="font-semibold">Filters</h2>
      </div>

      {/* Now just render the shared FilterPanel */}
      <FilterPanel />
    </div>
  );
}

export  function FiltersSidebarSkeleton() {
  return (
    <div className="space-y-8 h-full animate-pulse">
      {/* Header Skeleton */}
      <div className="flex items-center gap-2 border-b pb-3">
        <div className="h-8 w-6 rounded-full bg-gray-200" />
        <div className="h-8 w-24 rounded bg-gray-200" />
      </div>

      {/* Filters Skeleton */}
      <div className="space-y-4 md:space-y-8">
        {/* Brand Filter Skeleton */}
        <div className="space-y-2">
          <div className="h-5 w-20 rounded bg-gray-200" />
          <div className="grid grid-cols-4 md:grid-cols-2 w-full gap-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-12 rounded bg-gray-200" />
            ))}
          </div>
        </div>

        {/* Gender Filter Skeleton */}
        <div className="space-y-2">
          <div className="h-5 w-16 rounded bg-gray-200" />
          <div className="flex flex-wrap gap-2">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="h-8 w-16 rounded bg-gray-200" />
            ))}
          </div>
        </div>

        {/* Price Filter Skeleton */}
        <div className="space-y-4">
          <div className="h-5 w-16 rounded bg-gray-200" />
          <div className="flex justify-between">
            <div className="h-4 w-8 rounded bg-gray-200" />
            <div className="h-4 w-8 rounded bg-gray-200" />
          </div>
          <div className="h-2 rounded bg-gray-200" />
        </div>

        {/* Color Filter Skeleton */}
        <div className="space-y-2">
          <div className="h-5 w-16 rounded bg-gray-200" />
          <div className="flex flex-wrap gap-2">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-8 w-16 rounded bg-gray-200" />
            ))}
          </div>
        </div>

        {/* Size Filter Skeleton */}
        <div className="space-y-2">
          <div className="h-5 w-16 rounded bg-gray-200" />
          <div className="flex flex-wrap gap-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-8 w-12 rounded bg-gray-200" />
            ))}
          </div>
        </div>

        {/* Clear All Skeleton */}
        <div className="pt-4 border-t border-neutral-200">
          <div className="h-10 w-full rounded bg-gray-200" />
        </div>
      </div>
    </div>
  );
}