// components/products-page/SaleFilter.tsx
"use client";

import { Switch } from "@/components/ui/switch";

export default function SaleFilter({
  value,
  onChange,
  disabled,
}: {
  value: boolean;
  onChange: (newValue: boolean) => void;
  disabled?: boolean;
}) {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-md md:text-lg font-medium">On Sale</span>
      <Switch checked={value} onCheckedChange={onChange} disabled={disabled} />
    </div>
  );
}
