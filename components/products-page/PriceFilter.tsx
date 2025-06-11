// components/products-page/PriceFilter.tsx
"use client";

import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";

interface PriceFilterProps {
  /** Current minimum price from URL (e.g. 0) */
  minPrice: number;
  /** Current maximum price from URL (e.g. 500) */
  maxPrice: number;
  /** Called when user "commits" a new range, passes [newMin, newMax] */
  onChange: (newMin: number, newMax: number) => void;
  /** Overall allowed minimum (e.g. 0) */
  overallMin: number;
  /** Overall allowed maximum (e.g. 500) */
  overallMax: number;
  /** Slider step (e.g. 5) */
  step?: number;
  disabled?: boolean;
}

export default function PriceFilter({
  minPrice,
  maxPrice,
  onChange,
  overallMin,
  overallMax,
  step = 1,
  disabled
}: PriceFilterProps) {
  const [value, setValue] = useState<[number, number]>([minPrice, maxPrice]);

  useEffect(() => {
    setValue([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  return (
    <div className="space-y-4">
      <h3 className="text-md md:text-lg font-medium">Price</h3>

      {/* Display chosen range above the slider */}
      <div className="flex justify-between text-sm text-neutral-600">
        <span>${value[0]}</span>
        <span>${value[1]}</span>
      </div>

      <Slider
        value={value}
        onValueChange={(newVal) => {
          setValue(newVal as [number, number]);
        }}
        onValueCommit={(newVal) => {
          const [newMin, newMax] = newVal as [number, number];
          onChange(newMin, newMax);
        }}
        disabled={disabled}
        min={overallMin}
        max={overallMax}
        step={step}
        minStepsBetweenThumbs={1}
        className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4 [&_[role=slider]]:border-neutral-400 bg-primary-lighter rounded-[5px]"
      />
    </div>
  );
}