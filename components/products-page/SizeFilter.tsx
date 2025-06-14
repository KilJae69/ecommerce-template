// components/products-page/SizeFilter.tsx
"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface SizeFilterProps {
  value: string[];                  // e.g. ["8", "9", "10"]
  onChange: (newValues: string[]) => void;
   disabled?: boolean;
}

export default function SizeFilter({ value, onChange,disabled }: SizeFilterProps) {
  // Let’s assume you want sizes 6, 7, 8, 9, 10, 11, 12, 13
  const allSizes = ["36","37","38","39","40","41","42","43","44"];


  return (
    <div className="space-y-2">
      <h3 className="text-md md:text-lg font-medium">Size</h3>
      <ToggleGroup
        type="multiple"
        className="flex flex-wrap gap-2"
        value={value}
        onValueChange={onChange}
        disabled = {disabled}
      >
        {allSizes.map((sz) => (
          <ToggleGroupItem
            key={sz}
            value={sz}
            className="px-2 py-1 rounded-md border border-neutral-300 data-[state=on]:bg-primary data-[state=on]:text-white"
          >
            {sz}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}
