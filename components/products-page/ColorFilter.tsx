// components/products-page/ColorFilter.tsx
"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface ColorFilterProps {
  value: string[];
  onChange: (newValues: string[]) => void;
  disabled?: boolean;
}

const allColors = [
  { label: "Black", slug: "black",    bg: "bg-black" },
  { label: "White", slug: "white",    bg: "bg-white border" },
  { label: "Red",   slug: "red",      bg: "bg-red-500" },
  { label: "Blue",  slug: "blue",     bg: "bg-blue-500" },
  { label: "Green", slug: "green",    bg: "bg-green-500" },
  { label: "Grey",  slug: "grey",     bg: "bg-gray-400" },
  { label: "Yellow",slug: "yellow",   bg: "bg-yellow-400" },
  { label: "Pink",  slug: "pink",     bg: "bg-pink-400" },
];

export default function ColorFilter({
  value,
  onChange,
  disabled,
}: ColorFilterProps) {
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
            aria-label={c.label}
            className={`
              w-8 h-8  first:rounded-full last:rounded-full !rounded-full border border-neutral-300
              ${c.bg}
              data-[state=on]:ring-2 data-[state=on]:ring-offset-1 data-[state=on]:ring-primary-accent
              transition
            `}
          />
        ))}
      </ToggleGroup>
    </div>
  );
}
