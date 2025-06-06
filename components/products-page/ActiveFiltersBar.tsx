// components/products-page/ActiveFiltersBar.tsx
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useMemo } from "react";

import ActiveFilterPill from "./ActiveFilterPill";

/**
 * Utility: given a comma‐separated param string, return a string[]
 * or empty array if not present.
 */
function parseParamArray(raw: string | null): string[] {
  return raw ? raw.split(",").filter((v) => v !== "") : [];
}

export default function ActiveFiltersBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  //
  // 1) Read all filter‐related params from the URL
  //
  const selectedBrands = useMemo(
    () => parseParamArray(searchParams.get("brands")),
    [searchParams]
  );
  const selectedGenders = useMemo(
    () => parseParamArray(searchParams.get("genders")),
    [searchParams]
  );
  const selectedColors = useMemo(
    () => parseParamArray(searchParams.get("colors")),
    [searchParams]
  );
  const selectedSizes = useMemo(
    () => parseParamArray(searchParams.get("sizes")),
    [searchParams]
  );

  // Price: if both minPrice and maxPrice are present and not default,
  // we will render a single pill for Price.
  const rawMin = useMemo(() => {
    const x = Number(searchParams.get("minPrice") ?? "0");
    return isNaN(x) ? 0 : x;
  }, [searchParams]);
  const rawMax = useMemo(() => {
    const x = Number(searchParams.get("maxPrice") ?? "500");
    return isNaN(x) ? 500 : x;
  }, [searchParams]);

  // You can adjust defaults if you want (for example, default slider was 0–500)
  const DEFAULT_MIN = 0;
  const DEFAULT_MAX = 500;
  const priceIsActive = rawMin !== DEFAULT_MIN || rawMax !== DEFAULT_MAX;

  //
  // 2) Handler to remove exactly one value from a multi‐select param
  //
  const removeSingleValue = (key: string, valueToRemove: string) => {
    const updated = new URLSearchParams(searchParams.toString());
    const raw = searchParams.get(key);
    if (!raw) return;

    // Build new array without the one we’re removing:
    const newArray = raw.split(",").filter((val) => val !== valueToRemove);
    if (newArray.length > 0) {
      updated.set(key, newArray.join(","));
    } else {
      updated.delete(key);
    }
    router.push(`/collections?${updated.toString()}`);
  };

  //
  // 3) Handler to clear the price filter completely
  //
  const removePrice = () => {
    const updated = new URLSearchParams(searchParams.toString());
    updated.delete("minPrice");
    updated.delete("maxPrice");
    router.push(`/collections?${updated.toString()}`);
  };

  const clearAllFilters = () => {
    router.push("/collections"); // no search params at all
  };

  //
  // 4) If there are no active filters at all, render null (nothing)
  //
  const hasAnyFilter =
    selectedBrands.length > 0 ||
    selectedGenders.length > 0 ||
    selectedColors.length > 0 ||
    selectedSizes.length > 0 ||
    priceIsActive;

  if (!hasAnyFilter) {
    return null;
  }

  return (
    <div
      className="
         md:hidden absolute top-0 left-0 right-0 w-full
        px-4 py-2 flex flex-wrap items-center gap-2
      "
    >
      {/* Label on the left (optional) */}
      {/* <div className="mr-2 font-medium text-neutral-700">Active Filters:</div> */}

      <div className="flex flex-nowrap py-2 overflow-x-auto gap-2">
        {/* ───────────────────────────────────────────────────────────── */}
        {/* Render one “pill” per selected brand */}
        {selectedBrands.map((b) => (
          <ActiveFilterPill
            key={`brand-${b}`}
            label={b.charAt(0).toUpperCase() + b.slice(1)}
            onClear={() => removeSingleValue("brands", b)}
          />
        ))}

        {/* ───────────────────────────────────────────────────────────── */}
        {/* Render one “pill” per selected gender */}
        {selectedGenders.map((g) => (
          <ActiveFilterPill
            key={`gender-${g}`}
            label={g.charAt(0).toUpperCase() + g.slice(1)}
            onClear={() => removeSingleValue("genders", g)}
          />
        ))}

        {/* ───────────────────────────────────────────────────────────── */}
        {/* Render one “pill” per selected color */}
        {selectedColors.map((color) => (
          <ActiveFilterPill
            key={`color-${color}`}
            onClear={() => removeSingleValue("colors", color)}
            label={color.charAt(0).toUpperCase() + color.slice(1)}
          />
        ))}

        {/* ───────────────────────────────────────────────────────────── */}
        {/* Render one “pill” per selected size */}
        {selectedSizes.map((size) => (
          <ActiveFilterPill
            key={`size-${size}`}
            onClear={() => removeSingleValue("sizes", size)}
            label={size}
          />
        ))}

        {/* ───────────────────────────────────────────────────────────── */}
        {/* If price is “active,” show a single pill for the entire range */}
        {priceIsActive && (
          <ActiveFilterPill
            key="price"
            label={`Price: $${rawMin}–$${rawMax}`}
            onClear={removePrice}
          />
        )}
        <ActiveFilterPill label={`Clear All`} onClear={clearAllFilters} />
      </div>
    </div>
  );
}
