// components/products-page/GenderFilter.tsx
"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface GenderFilterProps {
  value: string[];                     // e.g. ["men", "women"]
  onChange: (newValues: string[]) => void;
  disabled?: boolean;
}

export default function GenderFilter({ value, onChange,disabled }: GenderFilterProps) {
  // Adjust these slugs/styles to fit your needs:
  const allGenders = [
    { label: "Men", slug: "men" },
    { label: "Women", slug: "women" },
   
  ];

  return (
    <div className="space-y-2">
      <h3 className="text-md md:text-lg font-medium">Gender</h3>
      <ToggleGroup
        type="multiple"
        className="flex flex-wrap gap-2"
        value={value}
        onValueChange={onChange}
        disabled={disabled}
      >
        {allGenders.map((g) => (
          <ToggleGroupItem
            key={g.slug}
            value={g.slug}
            className="px-3 py-1 rounded-md border border-neutral-300 
                       data-[state=on]:bg-primary data-[state=on]:text-white"
          >
            {g.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}
