// lib/products.ts

import { dummyProducts } from "./productsData";


interface FilterParams {
  brands?: string;
  sizes?: string;
  colors?: string;
  genders?: string;
  minPrice?: string;
  maxPrice?: string;
  sort?: string;
}

export async function getFilteredProducts(params: FilterParams) {
  // Simulate API delay


  // Parse filter params
  const selectedBrands = params.brands?.split(",") || [];
  const selectedSizes = params.sizes?.split(",") || [];
  const selectedColors = params.colors?.split(",") || [];
  const selectedGenders = params.genders?.split(",") || [];
  const minPrice = Number(params.minPrice) || 0;
  const maxPrice = Number(params.maxPrice) || 500;

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
    return product.variants.some(variant => {
      if (selectedSizes.length > 0 && !selectedSizes.includes(variant.size)) {
        return false;
      }
      
      if (selectedColors.length > 0 && !selectedColors.includes(variant.color)) {
        return false;
      }
      
      if (variant.price < minPrice || variant.price > maxPrice) {
        return false;
      }
      
      return true;
    });
  });

  // Sort products
  if (params.sort) {
    switch (params.sort) {
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
    }
  }

  return {
    products: results,
    totalCount: dummyProducts.length // For showing "X of Y products"
  };
}