// components/products-page/FilterPanel.tsx
"use client";

import React, { useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import BrandFilter from "./BrandFilter";
import SizeFilter from "./SizeFilter";
import ColorFilter from "./ColorFilter";
import GenderFilter from "./GenderFilter";
import PriceFilter from "./PriceFilter";
import CategoryFilter from "./CategoryFilter";
import SaleFilter from "./SaleFilter";

export default function FilterPanel() {
  const router = useRouter();
  const searchParams = useSearchParams();


  // 1) Read existing params from the URL and turn them into arrays/numbers
  const selectedBrands = useMemo(() => {
    const raw = searchParams.get("brands");
    return raw ? raw.split(",").filter((v) => v.length > 0) : [];
  }, [searchParams]);

  const selectedSizes = useMemo(() => {
    const raw = searchParams.get("sizes");
    return raw ? raw.split(",").filter((v) => v.length > 0) : [];
  }, [searchParams]);

  const selectedColors = useMemo(() => {
    const raw = searchParams.get("colors");
    return raw ? raw.split(",").filter((v) => v.length > 0) : [];
  }, [searchParams]);

  const selectedGenders = useMemo(() => {
    const raw = searchParams.get("genders");
    return raw ? raw.split(",").filter((v) => v.length > 0) : [];
  }, [searchParams]);

  // ← new: categories
  const selectedCategories = useMemo(() => {
    const raw = searchParams.get("categories");
    return raw ? raw.split(",") : [];
  }, [searchParams]);

  // ← new: onSale flag
  const saleParam = searchParams.get("onSale");
  const isSaleFilterOn = saleParam === "true";

  // For price, default to 0–500 if nothing’s in the URL yet
  const rawMin = Number(searchParams.get("minPrice") ?? "0");
  const rawMax = Number(searchParams.get("maxPrice") ?? "200");

  // 2) A helper to update an arbitrary “key” in URL search params
  const updateParam = (key: string, values: string[]) => {
    const updated = new URLSearchParams(searchParams.toString());

    if (values.length > 0) {
      updated.set(key, values.join(","));
    } else {
      updated.delete(key);
    }

    // (Optionally reset other params here, e.g. page number)
    // updated.delete("page");
    

    router.push(`/collections?${updated.toString()}`);
  };

  // helper for boolean onSale
  const updateSale = (onSale: boolean) => {
    const updated = new URLSearchParams(searchParams.toString());
    if (onSale) updated.set("onSale", "true");
    else updated.delete("onSale");
    router.push(`/collections?${updated.toString()}`);
  };

  // 3) A helper to update both minPrice and maxPrice simultaneously
  const updatePriceRange = (newMin: number, newMax: number) => {
    const updated = new URLSearchParams(searchParams.toString());
    updated.set("minPrice", newMin.toString());
    updated.set("maxPrice", newMax.toString());
    router.push(`/collections?${updated.toString()}`);
  };

   // ─────────────────────────────────────────────────────────────
  // 3) Decide if *any* filter is active at all
  // ─────────────────────────────────────────────────────────────

  // “Active” means any array has at least one element, or price is outside the default range (0–500)
  const priceDefaultMin = 0;
  const priceDefaultMax = 200;
  const priceIsActive =
    rawMin !== priceDefaultMin || rawMax !== priceDefaultMax;

  const hasAnyFilter =
    selectedBrands.length > 0 ||
    selectedSizes.length > 0 ||
    selectedColors.length > 0 ||
    selectedGenders.length > 0 ||
     selectedCategories.length > 0 ||      // category
    isSaleFilterOn || 
    priceIsActive;

  // ─────────────────────────────────────────────────────────────
  // 4) Handler to “clear all” filters in one go
  // ─────────────────────────────────────────────────────────────

  function clearAllFilters() {
    // grab only the `query` (if any)
    const updated = new URLSearchParams();
    const q = searchParams.get("query");
    if (q) updated.set("query", q);

    // reset everything else
    router.push(
      updated.toString()
        ? `/collections?${updated.toString()}`
        : "/collections"
    );
  }

  return (
    <div className=" space-y-4 md:space-y-6 ">
      {/* ─────────────────────────────────────── */}
      {/* Brand Filter */}
      {/* ─────────────────────────────────────── */}
      <BrandFilter
        value={selectedBrands}
        onChange={(newBrands) => updateParam("brands", newBrands)}
      />

       {/* ───────────── New: Category ───────────── */}
      <CategoryFilter
        value={selectedCategories}
        onChange={(v) => updateParam("categories", v)}
      />

      {/* ───────────── New: On Sale ───────────── */}
      <SaleFilter
        value={isSaleFilterOn}
        onChange={updateSale}
      />

      {/* ─────────────────────────────────────── */}
      {/* Gender Filter */}
      {/* ─────────────────────────────────────── */}
      <GenderFilter
        value={selectedGenders}
        onChange={(newGenders) => updateParam("genders", newGenders)}
      />

      {/* ─────────────────────────────────────── */}
      {/* Price Range Filter */}
      {/* ─────────────────────────────────────── */}
      <PriceFilter
        minPrice={rawMin}
        maxPrice={rawMax}
        overallMin={0}
        overallMax={200}
        step={5}
        onChange={(newMin, newMax) => updatePriceRange(newMin, newMax)}
      />

      {/* ─────────────────────────────────────── */}
      {/* Color Filter */}
      {/* ─────────────────────────────────────── */}
      <ColorFilter
        value={selectedColors}
        onChange={(newColors) => updateParam("colors", newColors)}
      />

      {/* ─────────────────────────────────────── */}
      {/* Size Filter */}
      {/* ─────────────────────────────────────── */}
      <SizeFilter
        value={selectedSizes}
        onChange={(newSizes) => updateParam("sizes", newSizes)}
      />

      {/* ─────────────────────────────────────── */}
      {/* 5) Conditional “no filters vs. clear all” */}
      {/* ─────────────────────────────────────── */}
      {hasAnyFilter ? (
        <div className="pt-4 border-t border-neutral-200">
          <button
            onClick={clearAllFilters}
            className="w-full text-center cursor-pointer bg-primary-accent text-white py-2 rounded-md hover:bg-primary-accent/90 transition "
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        <div className="pt-4  border-t border-neutral-200">
          <p className="min-h-[40px] text-center text-neutral-500 italic">
            No active filters
          </p>
        </div>
      )}
    </div>
  );
}
