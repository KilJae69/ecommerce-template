// components/wishlist/WishlistItemCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";

import { WishlistItem } from "@/stores/unified-store";
import { useWishlistStore } from "@/lib/hooks/useStore";

import LogoFactory from "@/components/products-page/LogoFactory";
import Ratings from "../products-page/Ratings";
import AddToCartButton from "./AddToCartButton";

export default function WishlistItemCard({ item }: { item: WishlistItem }) {
  const { removeFromWishlist } = useWishlistStore();

  return (
    <div className="flex flex-col gap-2 border-b border-gray-300 border-dashed pb-4">
      <Link
        href={`/collections/${item.slug}?color=${item.color}&size=${item.size}`}
        className="group flex gap-4"
      >
        <div className="relative w-20 h-20 flex-shrink-0 rounded overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col flex-grow justify-between">
          <div className="space-y-1">
            <h4 className="font-semibold text-sm leading-tight group-hover:text-primary-accent">
              {item.name}
            </h4>
            <p className="text-xs italic text-muted-foreground">
              Size: {item.size} / Color: {item.color}
            </p>
            <Ratings  />
          </div>
        </div>
        <LogoFactory small brand={item.brand} />
      </Link>

      <div className="flex items-center justify-between mt-2">
        <span className="font-semibold text-sm">${item.price}.00</span>
        <div className="flex items-center gap-2">
          <AddToCartButton
            productId={item.id.split("-")[0]} // Extract base productId from composite id
            name={item.name}
            price={item.price}
            image={item.image}
            color={item.color}
            size={item.size}
            slug={item.slug}
            brand={item.brand}
            small
          />
          <button
            onClick={() => removeFromWishlist(item.id)}
            className="ml-1 cursor-pointer transition hover:scale-105 text-rose-500"
          >
            <Trash2 className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
