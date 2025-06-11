// components/products/VariantSelector.tsx
"use client";

import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface Variant {
  id: string;
  color: string;
  size: string;
  price: number;
  stock: number;
  images: string[];
}

interface VariantSelectorProps {
  variants: Variant[];
  onVariantChange: (variantId: string) => void;
}

export default function VariantSelector({ variants, onVariantChange }: VariantSelectorProps) {
  // Store the entire selected variant object, not just the ID
  const [selectedVariant, setSelectedVariant] = useState<Variant>(variants[0]);
  
  // Group variants by color
  const colorGroups = variants.reduce((acc, variant) => {
    if (!acc[variant.color]) {
      acc[variant.color] = [];
    }
    acc[variant.color].push(variant);
    return acc;
  }, {} as Record<string, Variant[]>);

  // Group variants by size
  const sizeGroups = variants.reduce((acc, variant) => {
    if (!acc[variant.size]) {
      acc[variant.size] = [];
    }
    acc[variant.size].push(variant);
    return acc;
  }, {} as Record<string, Variant[]>);

  const handleColorChange = (color: string) => {
    const availableSizes = colorGroups[color].map(v => v.size);
    const newVariant = colorGroups[color].find(v => 
      availableSizes.includes(v.size) && v.size === selectedVariant.size
    ) || colorGroups[color][0];
    
    setSelectedVariant(newVariant);
    onVariantChange(newVariant.id);
  };

  const handleSizeChange = (size: string) => {
    const availableColors = sizeGroups[size].map(v => v.color);
    const newVariant = sizeGroups[size].find(v => 
      availableColors.includes(v.color) && v.color === selectedVariant.color
    ) || sizeGroups[size][0];
    
    setSelectedVariant(newVariant);
    onVariantChange(newVariant.id);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h4 className="font-medium">Color</h4>
        <ToggleGroup
          type="single"
          value={selectedVariant.color}
          onValueChange={handleColorChange}
          className="flex flex-wrap gap-2"
        >
          {Object.keys(colorGroups).map(color => (
            <ToggleGroupItem
              key={color}
              value={color}
              className="px-3 py-1 rounded-md border border-neutral-300 data-[state=on]:bg-primary data-[state=on]:text-white"
            >
              {color}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      <div className="space-y-2">
        <h4 className="font-medium">Size</h4>
        <ToggleGroup
          type="single"
          value={selectedVariant.size}
          onValueChange={handleSizeChange}
          className="flex flex-wrap gap-2"
        >
          {Object.keys(sizeGroups).map(size => (
            <ToggleGroupItem
              key={size}
              value={size}
              className="px-3 py-1 rounded-md border border-neutral-300 data-[state=on]:bg-primary data-[state=on]:text-white"
            >
              {size}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
    </div>
  );
}