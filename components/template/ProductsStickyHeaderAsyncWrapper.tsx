/*
import {
  FilterParams,
  getFilteredProducts,
} from "@/components/template/getFilteredProducts";
import ProductsStickyHeader from "./ProductsStickyHeader";

export default async function ProductsStickyHeaderAsyncWrapper({
  searchParams,
}: {
  searchParams: Promise<FilterParams>;
}) {
  const params = await searchParams;
  const { totalResults, totalCount } = await getFilteredProducts(params);
  return (
    <ProductsStickyHeader totalResults={totalResults} totalCount={totalCount} />
  );
}
*/