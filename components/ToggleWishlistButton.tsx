"use client";

import { useWishlistStore } from "@/lib/hooks/useStore";
import { Heart, HeartIcon } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { WishlistItem } from "@/stores/unified-store";
import { useHasHydrated } from "@/lib/hooks/useHasHydrated";

type ToggleWishlistButtonProps = {
  productId: string;
  name: string;
  price: number;
  image: string;
  color: string;
  size: string;
  slug: string;
  brand: string;
  small?: boolean;
};

export default function ToggleWishlistButton({
  productId,
  name,
  price,
  image,
  color,
  size,
  slug,
  brand,
  small = false,
}: ToggleWishlistButtonProps) {
  const [loading, setLoading] = useState(false);
  
const hasHydrated = useHasHydrated();
  const { isWishlisted, addToWishlist, removeFromWishlist } = useWishlistStore();

  const id = `${productId}-${color}-${size}`;
  const wished = isWishlisted(id);

  const handleToggle = () => {
    setLoading(true);

    setTimeout(() => {
      if (wished) {
        removeFromWishlist(id);
        toast.success("Removed from wishlist");
      } else {
        const item: WishlistItem = {
          id,
          name,
          price,
          image,
          color,
          size,
          slug,
          brand,
        };
        addToWishlist(item);
        toast.success("Added to wishlist");
      }

      setLoading(false);
    }, 500);
  };
  if (!hasHydrated) {
  return (
    <button disabled className={cn("p-1.5 bg-white rounded-full shadow-md")}>
      <Heart className="w-5 h-5 text-gray-300" />
    </button>
  );
}

  if (small) {
    return (
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleToggle();
        }}
        disabled={loading}
        className={cn(
          "bg-white p-1.5  rounded-full shadow-md hover:bg-gray-200 cursor-pointer"
        )}
      >
        {loading ? (
          <Image src="/loader.svg" alt="loader" className="fill-rose-500" width={20} height={20} />
        ) : wished ? (
          <HeartIcon className="w-5 h-5 text-rose-500 fill-rose-500" />
        ) : (
          <Heart className="w-5 h-5 text-primary " />
        )}
      </button>
    );
  }

  return (
    <button
      onClick={handleToggle}
      disabled={loading}
      className="px-4 py-2 text-sm border rounded hover:bg-rose-50 text-rose-500 border-rose-400"
    >
      {wished ? "Remove from Wishlist" : "Add to Wishlist"}
    </button>
  );
}
