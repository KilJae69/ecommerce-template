// components/products-page/ColorFilter.tsx
"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface ColorFilterProps {
  value: string[];                     // e.g. ["black", "white"]
  onChange: (newValues: string[]) => void;
   disabled?: boolean;
}

export default function ColorFilter({ value, onChange,disabled }: ColorFilterProps) {
  // You can adjust this list to match your actual color‐slug conventions:
  const allColors = [
    { label: "Black", slug: "black" },
    { label: "White", slug: "white" },
    { label: "Red", slug: "red" },
    { label: "Blue", slug: "blue" },
    { label: "Green", slug: "green" },
    { label: "Grey", slug: "grey" },
    { label: "Yellow", slug: "yellow" },
    { label: "Pink", slug: "pink" },
  ];

  return (
    <div className="space-y-2">
      <h3 className="text-md md:text-lg font-medium">Color</h3>
      <ToggleGroup
        type="multiple"
        className="flex flex-wrap gap-2"
        value={value}
        onValueChange={onChange}
        disabled={disabled}
      >
        {allColors.map((c) => (
          <ToggleGroupItem
            key={c.slug}
            value={c.slug}
            className="px-3 py-1 rounded-md border border-neutral-300 
                       data-[state=on]:bg-primary data-[state=on]:text-white"
          >
            {c.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}
