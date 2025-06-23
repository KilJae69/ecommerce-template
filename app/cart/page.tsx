// app/cart/page.tsx

import { Suspense } from "react";
import { Container } from "@/components/shared/Container";
import GlareCTA from "@/components/shared/GlareCTA";
// import dynamic from "next/dynamic";
import {
  CartItemListSkeleton,
  CartSummarySkeleton,
} from "@/components/shared/Skeletons";
import CartPageItemsList from "@/components/cart-page/CartPageItemsList";
import CartSummary from "@/components/cart-page/CartSummary";

/*
const CartItemList = dynamic(() => import("@/components/cart-page/CartPageItemsList"), {
  ssr: false,
});
const CartSummary = dynamic(() => import("@/components/cart-page/CartSummary"), {
  ssr: false,
});
*/

export default function CartPage() {
  return (
    <section className="relative py-12 mt-42 lg:pb-24">
      <Container>
        <div className="w-full border-b pb-6 md:pb-12 border-gray-300">
          <h1 className="text-h2 text-gradient">Your Cart</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-10 pt-6 md:pt-12">
          <div className="w-full ">
            <Suspense fallback={<CartItemListSkeleton />}>
              <CartPageItemsList />
            </Suspense>
          </div>

          <div className="w-full  flex-1">
            <Suspense fallback={<CartSummarySkeleton />}>
              <CartSummary />
            </Suspense>
          </div>
        </div>
        <GlareCTA />
      </Container>
    </section>
  );
}
