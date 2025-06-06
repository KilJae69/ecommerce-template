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
