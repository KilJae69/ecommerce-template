// components/cart/CartItemList.tsx
"use client";

import { useCartStore } from "@/lib/hooks/useStore";
import CartItemCard from "../shared/CartItemCard";
import Image from "next/image";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";

export default function CartPageItemsList() {
  const { items } = useCartStore();

  if (items.length < 1) {
    return (
      <div className="w-full flex flex-col items-center gap-4">
        <Image
          src="/empty-cart.png"
          alt="empty cart"
          width={400}
          height={400}
        />
        <p className="text-center text-2xl text-gradient font-semibold">
          Your shopping cart is empty.
        </p>
        <p className="text-center text-gray-500 max-w-xl">
          Looks like you have not added anything to your cart. Go ahead &
          explore top products.
        </p>
        <InteractiveHoverButton
          dark
          className="max-w-xl px-4 text-md"
          href="/collections"
        >
          Continue Shopping
        </InteractiveHoverButton>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {items.map((item) => (
        <CartItemCard page key={item.id} item={item} />
      ))}
    </div>
  );
}
