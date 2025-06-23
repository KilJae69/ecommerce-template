"use client";

import { useController } from "react-hook-form";
import { Input } from "@/components/ui/input";

export function CardNumberInput({ name }: { name: string }) {
  const { field, fieldState } = useController({ name });

  const formatCardNumber = (value: string) =>
    value
      .replace(/\D/g, "")                // Remove all non-digits
      .slice(0, 16)                      // Limit to 16 digits
      .replace(/(\d{4})(?=\d)/g, "$1 "); // Insert space every 4 digits

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "").slice(0, 16); // stripped
    field.onChange(raw); // Store raw value in form state
  };

  return (
    <div>
      <Input
        {...field}
        value={formatCardNumber(field.value ?? "")}
        onChange={handleChange}
        placeholder="4242 4242 4242 4242"
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
