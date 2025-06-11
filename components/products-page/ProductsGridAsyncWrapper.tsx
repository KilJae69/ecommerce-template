import {
  FilterParams,
  getFilteredProducts,
} from "@/constants/getFilteredProducts";
import ProductsGrid from "./ProductsGrid";
import { Suspense } from "react";

export default async function ProductsGridAsyncWrapper({
  searchParams,
}: {
  searchParams: Promise<FilterParams>;
}) {
  const params = await searchParams;
  const { products } = await getFilteredProducts(params);
  return (
    <Suspense fallback={<p>Loading....</p>}>
      <ProductsGrid filteredProducts={products} />
    </Suspense>
  );
}
