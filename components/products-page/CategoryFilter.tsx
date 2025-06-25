// components/products-page/CategoryFilter.tsx
"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const allCategories = [
  { label: "Running", slug: "running" },
  { label: "Lifestyle", slug: "lifestyle" },
  { label: "Basketball", slug: "basketball" },
  { label: "Training", slug: "training" },
];

export default function CategoryFilter({
  value,
  onChange,
  disabled,
}: {
  value: string[];
  onChange: (newValues: string[]) => void;
  disabled?: boolean;
}) {
  return (
    <div className="space-y-2">
      <h3 className="text-md md:text-lg font-medium">Category</h3>
      <ToggleGroup
        type="multiple"
        className="flex flex-wrap gap-2"
        value={value}
        onValueChange={onChange}
        disabled={disabled}
      >
        {allCategories.map((c) => (
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
