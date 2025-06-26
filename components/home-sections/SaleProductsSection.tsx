// components/BestSellers.tsx

import { dummyProducts } from "@/constants/productsDataV2";
import { Container } from "../shared/Container";
import { MovingBorderBadge } from "../shared/MovingBorderBadge";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import ProductsSwiper from "./ProductsSwiper";


export default function SaleProductsSection() {
  const saleProducts = dummyProducts.filter(p => p.onSale).slice(0, 8);
  return (
    <section className="my-12 lg:my-24">
      <Container>
        <div className="flex flex-col items-center gap-4  px-4 text-center mb-8">
          <MovingBorderBadge text="Hot Deals" />
          <h2 className="text-h2 text-gradient">On Sale Now</h2>
          <p className="mt-2 text-paragraph max-w-xl">
            Don’t miss out on limited-time markdowns! Save up to{" "}
            <span className="font-semibold text-primary-accent">50%</span> on our most popular
            sneakers—while stocks last.
          </p>
           <InteractiveHoverButton href="/collections?onSale=true" invert>
            Explore More
          </InteractiveHoverButton>
        </div>
      </Container>
    <ProductsSwiper products = {saleProducts}/> 
    </section>
  );
}
