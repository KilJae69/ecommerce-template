// components/ProductCardActionsLoader.tsx
"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { ProductCardActionsProps } from "./ProductCardActions";
import { useIsTouchDevice } from "@/lib/hooks/useIsTouchDevice";
import { MoreVertical } from "lucide-react";

const ProductCardActions = dynamic(() => import("./ProductCardActions"), {
  ssr: false,
});

export default function ProductCardActionsLoader(
  props: ProductCardActionsProps
) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const isTouchDevice = useIsTouchDevice();

  return (
    <div
      className="absolute inset-0 z-10"
      onMouseEnter={() => setShouldLoad(true)} // Desktop
      onTouchStart={() => setShouldLoad(true)} // Mobile
    >
      {shouldLoad && <ProductCardActions {...props} />}
      {!shouldLoad && isTouchDevice && (
        <button className="bg-white p-1.5 rounded-full shadow-md hover:bg-gray-100">
          <MoreVertical className="w-5 h-5 text-gray-700" />
        </button>
      )}
    </div>
  );
}
