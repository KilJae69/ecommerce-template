// components/ProductCardActionsLoader.tsx
"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { ProductCardActionsProps } from "./ProductCardActions";

const ProductCardActions = dynamic(() => import("./ProductCardActions"), {
  ssr: false,
});

export default function ProductCardActionsLoader(props: ProductCardActionsProps) {
  const [shouldLoad, setShouldLoad] = useState(false);

  return (
    <div
      className="absolute inset-0 z-10"
      onMouseEnter={() => setShouldLoad(true)} // Desktop
      onTouchStart={() => setShouldLoad(true)} // Mobile
    >
      {shouldLoad && <ProductCardActions {...props} />}
    </div>
  );
}
