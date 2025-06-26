// components/BestSellers.tsx

import { dummyProducts } from "@/constants/productsDataV2";
import { Container } from "../shared/Container";
import { MovingBorderBadge } from "../shared/MovingBorderBadge";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";

import ProductsSwiper from "./ProductsSwiper";

export default function BestSellersSection() {
  const popularProducts = dummyProducts.filter(p => p.isPopular).slice(0, 8);
  return (
    <section className="my-12 lg:my-24">
      <Container>
        <div className="flex flex-col items-center gap-4  px-4 text-center mb-8">
          <MovingBorderBadge text="Most Popular" />
          <h2 className="text-h2 text-gradient">Best Sellers</h2>
          <p className="mt-2 text-paragraph">
            Our most-loved styles, flying off the shelves. Trusted by thousands customers.
          </p>
           <InteractiveHoverButton invert>
            Explore More
          </InteractiveHoverButton>
        </div>
      </Container>
    <ProductsSwiper products = {popularProducts}/> 
    </section>
  );
}
