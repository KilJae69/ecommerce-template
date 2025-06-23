"use client";

import { useController } from "react-hook-form";
import { Input } from "@/components/ui/input";


export function ExpiryInput({ name }: { name: string }) {
  const { field, fieldState } = useController({ name });

  const formatExpiry = (val: string) =>
    val
      .replace(/\D/g, "")
      .slice(0, 4)
      .replace(/(\d{2})(\d{1,2})/, "$1/$2");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "").slice(0, 4); // 4 digits only
    field.onChange(raw); // Store raw value like "1234"
  };

  return (
    <div>
      <Input
        {...field}
        value={formatExpiry(field.value ?? "")}
        onChange={handleChange}
        placeholder="MM/YY"
        className="bg-gray-100"
      />
      {fieldState.error && (
        <p className="pl-2 text-xs text-rose-500 min-h-[1rem]">
          {fieldState.error.message}
        </p>
      )}
    </div>
  );
}
