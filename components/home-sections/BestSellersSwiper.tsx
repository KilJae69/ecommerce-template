// components/BestSellersSwiper.tsx
"use client";

import React from "react";
import { useLazySwiper } from "@/lib/hooks/useLazySwiper";
import { dummyProducts } from "@/constants/productsDataV2";
import ProductCard from "../products-page/ProductCard";


// only show the first 8 popular products
const popularProducts = dummyProducts.filter(p => p.isPopular).slice(0, 8);

export default function BestSellersSwiper() {
  const {
    ref,
    SwiperComponent,
    SwiperSlideComponent,
    modules,
  } = useLazySwiper();

  return (
    <div ref={ref} className="w-full flex items-center justify-center">
      {SwiperComponent ? (
        <SwiperComponent
          // enable pagination dots
          pagination={{ clickable: true }}
          // if you want arrows, uncomment the next two lines and include Navigation in modules
          // navigation={true}
          // modules={[...modules, modulePackage.Navigation]}
          slidesPerView={1}
          spaceBetween={16}
          grabCursor
          // adjust per breakpoint
          breakpoints={{
            389:{ slidesPerView: 2, spaceBetween: 20 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 24 },
            1024: { slidesPerView: 4, spaceBetween: 32 },
            1600:{slidesPerView: 5, spaceBetween: 36}
          }}
          modules={modules}
          className="w-full h-auto py-8"
        >
          {popularProducts.map((product, idx) => (
            <SwiperSlideComponent
              key={product.id}
              className="p-1 mb-7 cursor-grab"
            >
              <ProductCard product={product} index={idx} />
            </SwiperSlideComponent>
          ))}
        </SwiperComponent>
      ) : (
        <Skeleton />
      )}
    </div>
  );
}

function Skeleton() {
  return (
    <div className="w-full h-[400px] overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="animate-pulse bg-gray-100 rounded-lg h-[380px]"
          />
        ))}
      </div>
    </div>
  );
}
