import {
  FilterParams,
  getFilteredProducts,
} from "@/constants/getFilteredProducts";
import ProductsGrid from "./ProductsGrid";


export default async function ProductsGridAsyncWrapper({
  searchParams,
}: {
  searchParams: Promise<FilterParams>;
}) {
  const params = await searchParams;
  const { products } = await getFilteredProducts(params);
  return (
    
      <ProductsGrid filteredProducts={products} />
    
  );
}
