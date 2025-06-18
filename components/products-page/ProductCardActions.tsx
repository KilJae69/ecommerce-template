// components/ProductCardActions.tsx
"use client";

import { Eye, MoreVertical, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import AddToCartButton from "../shared/AddToCartButton";
import ToggleWishlistButton from "../ToggleWishlistButton";

import { AnimatePresence, m } from "motion/react";
import { useIsTouchDevice } from "@/lib/hooks/useIsTouchDevice";

interface ProductCardActionsProps {
  productId: string;
  name: string;
  price: number;
  image: string;
  color: string;
  size: string;
  slug: string;
  brand: string;
}

export default function ProductCardActions({
  productId,
  name,
  price,
  image,
  color,
  size,
  slug,
  brand,
}: ProductCardActionsProps) {
  const isTouchDevice = useIsTouchDevice();
  const [showActions, setShowActions] = useState(false);

  const baseProps = {
    productId,
    name,
    price,
    image,
    color,
    size,
    slug,
    brand,
  };

  return (
    <div className="inset-0 absolute z-10">
      <div className="absolute top-2 right-2 flex flex-col items-end gap-2">
        {isTouchDevice ? (
          <>
            {!showActions && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setShowActions(true);
                }}
                className="bg-white p-1.5 rounded-full shadow-md hover:bg-gray-100"
              >
                <MoreVertical className="w-5 h-5 text-gray-700" />
              </button>
            )}

            <AnimatePresence>
              {showActions && (
                <m.div
                  key="actions"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-end gap-2"
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      setShowActions(false);
                    }}
                    className="bg-white p-1.5 rounded-full shadow-md hover:bg-gray-100"
                  >
                    <X className="w-5 h-5 text-gray-700" />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      // TODO: Quick view logic
                    }}
                    className="bg-white p-1.5 rounded-full shadow-md hover:bg-gray-100"
                  >
                    <Eye className="w-5 h-5 text-gray-800" />
                  </button>

                  <AddToCartButton {...baseProps} small />
                  <ToggleWishlistButton {...baseProps} small />
                </m.div>
              )}
            </AnimatePresence>
          </>
        ) : (
          // Desktop hover stack
          <>
            <div
              className={cn(
                "transition-all duration-300 ease-out",
                "opacity-0 translate-x-3",
                "group-hover:opacity-100 group-hover:translate-x-0",
                "delay-75"
              )}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  // TODO: Quick view logic
                }}
                className="bg-white p-1.5 rounded-full shadow-md hover:bg-gray-100"
              >
                <Eye className="w-5 h-5 text-gray-800" />
              </button>
            </div>

            <div
              className={cn(
                "transition-all duration-300 ease-out",
                "opacity-0 translate-x-3",
                "group-hover:opacity-100 group-hover:translate-x-0",
                "delay-150"
              )}
            >
              <AddToCartButton {...baseProps} small />
            </div>

            <div
              className={cn(
                "transition-all duration-300 ease-out",
                "opacity-0 translate-x-3",
                "group-hover:opacity-100 group-hover:translate-x-0",
                "delay-225"
              )}
            >
              <ToggleWishlistButton {...baseProps} small />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
