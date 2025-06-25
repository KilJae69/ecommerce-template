// components/products-page/BrandFilter.tsx
"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  AdidasLogo,
  NewBalanceLogo,
  NikeLogo,
  UnderArmourLogo,
} from "./brand-logos";

interface BrandFilterProps {
  value: string[]; // e.g. [ "nike", "adidas" ]
  onChange: (newValues: string[]) => void;
   disabled?: boolean;
}

export default function BrandFilter({ value, onChange,disabled }: BrandFilterProps) {
  return (
    <div className="space-y-2 ">
      <h3 className="text-md md:text-lg font-medium">Brand</h3>
      <ToggleGroup
        type="multiple"
        className="grid grid-cols-4 md:grid-cols-2 w-full gap-2"
        value={value}
         disabled={disabled}
        onValueChange={onChange}
      >
        <ToggleGroupItem
          value="nike"
          className=" rounded-md  border group  border-neutral-300 data-[state=on]:bg-primary-accent data-[state=on]:text-white"
        >
          <NikeLogo />
        </ToggleGroupItem>

        <ToggleGroupItem
          value="adidas"
          className="px-2 py-1  rounded-md group border border-neutral-300 data-[state=on]:bg-primary-accent data-[state=on]:text-white"
        >
          <AdidasLogo />
        </ToggleGroupItem>

        <ToggleGroupItem
          value="under-armour"
          className="px-2 py-1  rounded-md group border border-neutral-300 data-[state=on]:bg-primary-accent data-[state=on]:text-white"
        >
          <UnderArmourLogo />
        </ToggleGroupItem>

        <ToggleGroupItem
          value="new-balance"
          className="px-2 py-1  rounded-md group border border-neutral-300 data-[state=on]:bg-primary-accent data-[state=on]:text-white"
        >
          <NewBalanceLogo />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
