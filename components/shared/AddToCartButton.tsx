// components/cart/AddToCartButton.tsx
"use client";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/hooks/useStore";
import { cn } from "@/lib/utils";

import { CartItem } from "@/stores/unified-store";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

type AddToCartButtonProps = {
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

export default function AddToCartButton({
  productId,
  name,
  price,
  
  image,
  color,
  size,
  slug,
  brand,
  small = false,
}: AddToCartButtonProps) {
  const { addItem } = useCartStore();
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);

    setTimeout(() => {
      const id = `${productId}-${color}-${size}`;
      const item: CartItem = {
        id,
        name,
        price,
       
        quantity: 1,
        image,
        color,
        size,
        slug,
        brand,
      };

      addItem(item);
      toast.success(`${name} added to cart`);
      setLoading(false);
    }, 1000); // fake 1s delay
  };

  if (small)
    return (
      <button
         onClick={(e) => {
        e.stopPropagation(); // prevents parent link
        e.preventDefault();  // prevents <Link> default
        handleClick();
      }}
        disabled={loading}
        className={cn(
          " bg-primary-accent text-white hover:bg-primary p-1.5 rounded-full shadow-md  cursor-pointer"
        )}
      >
        {loading ? (
          <Image src="/loader.svg" alt="loader" width={20} height={20} />
        ) : (
          <ShoppingCart className="size-5" />
        )}
      </button>
    );

  return (
    <Button
      onClick={handleClick}
      disabled={loading}
      className="bg-primary-accent text-xl w-full hover:bg-primary-accent/80 cursor-pointer shadow-lg text-white font-semibold tracking-wider py-4 h-[60px] px-7"
    >
      {loading ? (
        <Image src="/loader.svg" alt="loader" width={30} height={30} />
      ) : (
        "Add to cart"
      )}
    </Button>
  );
}
