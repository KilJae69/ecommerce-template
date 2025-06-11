// hooks/useProductFilter.ts
"use client"
import { dummyProducts } from "@/constants/productsData";
import { useSearchParams } from "next/navigation";

import { useMemo } from "react";

export function useProductFilter() {
  const searchParams = useSearchParams();

  const filteredProducts = useMemo(() => {
    // Get all filter params from URL
    const selectedBrands = searchParams.get("brands")?.split(",") || [];
    const selectedSizes = searchParams.get("sizes")?.split(",") || [];
    const selectedColors = searchParams.get("colors")?.split(",") || [];
    const selectedGenders = searchParams.get("genders")?.split(",") || [];
    const minPrice = Number(searchParams.get("minPrice")) || 0;
    const maxPrice = Number(searchParams.get("maxPrice")) || 500;
    const sort = searchParams.get("sort");

    // Filter products
    const results = dummyProducts.filter(product => {
      // Brand filter
      if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
        return false;
      }
      
      // Gender filter
      if (selectedGenders.length > 0 && !selectedGenders.some(g => product.gender.includes(g))) {
        return false;
      }
      
      // Check if any variant matches the size/color/price filters
      const hasMatchingVariant = product.variants.some(variant => {
        // Size filter
        if (selectedSizes.length > 0 && !selectedSizes.includes(variant.size)) {
          return false;
        }
        
        // Color filter
        if (selectedColors.length > 0 && !selectedColors.includes(variant.color)) {
          return false;
        }
        
        // Price filter
        if (variant.price < minPrice || variant.price > maxPrice) {
          return false;
        }
        
        return true;
      });
      
      return hasMatchingVariant;
    });

    // Sort products
    if (sort) {
      switch (sort) {
        case "newest":
          results.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
          break;
        case "oldest":
          results.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
          break;
        case "price_asc":
          results.sort((a, b) => {
            const aMinPrice = Math.min(...a.variants.map(v => v.price));
            const bMinPrice = Math.min(...b.variants.map(v => v.price));
            return aMinPrice - bMinPrice;
          });
          break;
        case "price_desc":
          results.sort((a, b) => {
            const aMaxPrice = Math.max(...a.variants.map(v => v.price));
            const bMaxPrice = Math.max(...b.variants.map(v => v.price));
            return bMaxPrice - aMaxPrice;
          });
          break;
        default:
          break;
      }
    }

    return results;
  }, [searchParams]);

  return filteredProducts;
}