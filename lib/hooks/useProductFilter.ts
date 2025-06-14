// hooks/useProductFilter.ts
"use client";
import { dummyProducts } from "@/constants/productsData";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

type FilterResults = {
  products: typeof dummyProducts;
  totalCount: number;
  totalResults: number;
  hasFilters: boolean;
};

export function useProductFilter(): FilterResults {
  const searchParams = useSearchParams();

  return useMemo(() => {
    const query          = searchParams.get("query")?.trim().toLowerCase() || "";
    const selectedBrands = searchParams.get("brands")?.split(",") || [];
    const selectedSizes  = searchParams.get("sizes")?.split(",") || [];
    const selectedColors = searchParams.get("colors")?.split(",") || [];
    const selectedGenders= searchParams.get("genders")?.split(",")||[];
    const minPrice       = Number(searchParams.get("minPrice")) || 0;
    const maxPrice       = Number(searchParams.get("maxPrice")) || 200;
    const sort           = searchParams.get("sort");

    const hasFilters = Boolean(
      query ||
      selectedBrands.length > 0 ||
      selectedSizes.length > 0 ||
      selectedColors.length > 0 ||
      selectedGenders.length > 0 ||
      minPrice > 0 ||
      maxPrice < 200 ||
      sort
    );

    const results = dummyProducts.filter((product) => {
      if (query && !product.name.toLowerCase().includes(query)) return false;
      if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) return false;
      if (selectedGenders.length > 0 && !selectedGenders.some(g => product.gender.includes(g))) return false;

      // at least one variant must match ALL active filters
      const hasMatchingVariant = product.variants.some((variant) => {
        // size: does the variant's sizes array include at least one of the selected sizes?
        if (selectedSizes.length > 0 &&
            !variant.sizes.some((sz) => selectedSizes.includes(sz))
        ) return false;

        // color
        if (selectedColors.length > 0 &&
            !selectedColors.includes(variant.color)
        ) return false;

        // price at product level
        if (product.price < minPrice || product.price > maxPrice) return false;

        return true;
      });

      return hasMatchingVariant;
    });

    const sortedResults = [...results];
    if (sort) {
      switch (sort) {
        case "newest":
          sortedResults.sort((a,b)=>b.createdAt.getTime()-a.createdAt.getTime());
          break;
        case "oldest":
          sortedResults.sort((a,b)=>a.createdAt.getTime()-b.createdAt.getTime());
          break;
        case "price_asc":
          sortedResults.sort((a,b)=>a.price-b.price);
          break;
        case "price_desc":
          sortedResults.sort((a,b)=>b.price-a.price);
          break;
      }
    }

    return {
      products:     sortedResults,
      totalCount:   dummyProducts.length,
      totalResults: sortedResults.length,
      hasFilters,
    };
  }, [searchParams]);
}
