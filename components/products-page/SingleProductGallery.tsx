// components/ImageGallery.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type ImageGalleryProps = {
  /** array of image URLs */
  images: string[];
  /** alt text prefix (we append “thumbnail”) */
  alt?: string;
};

export function SingleProductGallery({
  images,
  alt = "",
}: ImageGalleryProps) {
  const [current, setCurrent] = useState(0);
  const len = images.length;

  const prev = () => setCurrent((c) => (c - 1 + len) % len);
  const next = () => setCurrent((c) => (c + 1) % len);

  if (len === 0) return null;

  return (
    <div className="flex relative   flex-col-reverse lg:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex flex-wrap lg:flex-nowrap lg:flex-col justify-between gap-2">
        {images.map((src, i) => (
          <div
            key={i}
            onMouseEnter={() => setCurrent(i)}
            
            className={cn(
              "w-16 h-16 cursor-pointer overflow-hidden rounded border",
              i === current
                ? "border-primary-accent"
                : "border-gray-200"
            )}
          >
            <Image
              src={src}
              alt={`${alt} thumbnail`}
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Main image + pagination controls */}
      <div className="relative col-span-4 rounded  bg-gray-50 ">
        <Image
          src={images[current]}
          alt={alt}
          width={600}
          height={600}
          className="object-contain aspect-square  w-full h-full"
          priority
        />

        {/* ◀ / ▶ controls */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          <button
            onClick={prev}
            className="flex h-8 w-8 items-center cursor-pointer justify-center rounded-full hover:text-white bg-white shadow hover:bg-primary-accent"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="flex h-8 w-8 items-center cursor-pointer justify-center rounded-full hover:text-white bg-white shadow hover:bg-primary-accent"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
