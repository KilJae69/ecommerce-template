// components/VariantSelector.tsx
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, useTransition } from "react";
import { ProductVariant } from "@/constants/productsData";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type VariantSelectorProps = {
  slug: string;
  variants: ProductVariant[];
};

export function VariantSelector({ slug, variants }: VariantSelectorProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // read initial values from URL
  const initialColor = searchParams.get("color") ?? "";
  const initialSize = searchParams.get("size") ?? "";

  // optimistic local state
  const [color, setColor] = useState(initialColor);
  const [size, setSize] = useState(initialSize);
  const [quantity, setQuantity] = useState(1);

  // transition API for non-urgent navigation
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isPending, startTransition] = useTransition();

  // keep local state in sync if URL changes externally
  useEffect(() => {
    setColor(initialColor);
    setSize(initialSize);
    setQuantity(1);
  }, [initialColor, initialSize]);

  // derive available options
  const colors = Array.from(new Set(variants.map((v) => v.color)));

  // ← ONLY THIS LINE CHANGED ←
  // always show every size, then gray out the ones not in stock for the selected color
  const sizes = Array.from(
    new Set(variants.flatMap((v) => v.sizes.map(Number)))
  )
    .sort((a, b) => a - b)
    .map(String);

  // find the “current” variant record so we can read its stock
  const currentVariant = variants.find((v) => v.color === color);
  const maxQty = currentVariant?.stock ?? 0;

  // push new ?color & ?size into URL inside a startTransition
  function updateParams(updates: Record<string, string | undefined>) {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    for (const [key, val] of Object.entries(updates)) {
      if (val == null) params.delete(key);
      else params.set(key, val);
    }
    const q = params.toString();
    const href = `/collections/${slug}${q ? `?${q}` : ""}`;

    startTransition(() => {
      router.push(href, { scroll: false });
    });
  }

  // handlers that first update local state, then URL
  function onColorChange(c: string) {
    setColor(c);
    setQuantity(1);
    setSize(""); // reset size on color change
    updateParams({ color: c, size: undefined });
  }

  function onSizeChange(s: string) {
    setSize(s);
    setQuantity(1);
    updateParams({ size: s });
  }

  return (
    <div className="space-y-6">
      {/* ─── Color Picker ─── */}
      <fieldset>
        <legend className="block text-sm font-semibold text-gray-900">
          Color
        </legend>
        <div className="mt-3 flex items-center gap-x-3">
          {colors.map((c) => (
            <label
              key={c}
              className="flex rounded-full border border-gray-200 cursor-pointer"
            >
              <input
                type="radio"
                name="color"
                value={c}
                checked={c === color}
                onChange={() => onColorChange(c)}
                aria-label={c}
                className="size-8 appearance-none cursor-pointer outline-primary-accent rounded-full 
                           checked:outline-2 checked:outline-offset-2 checked:outline-primary-accent
                           focus-visible:outline-3 focus-visible:outline-offset-3"
                style={{
                  backgroundColor:
                    c === "white" ? "#fff" : c === "black" ? "#000" : c,
                }}
              />
            </label>
          ))}
        </div>
      </fieldset>

      {/* ─── Size Picker ─── */}
      <fieldset>
        <legend className="block text-sm font-semibold text-gray-900">
          Size
        </legend>
        <div className="mt-2 flex flex-wrap gap-3">
          {sizes.map((s) => {
            // assume `stock` > 0 means in stock for this color/size combo
            const inStock = variants.some(
              (v) => v.color === color && v.sizes.includes(s) && v.stock > 0
            );

            return (
              <label
                key={s}
                aria-label={`EU${s}`}
                className={classNames(
                  "group relative flex items-center justify-center rounded-md px-7 py-3 md:px-8 md:py-6 transition-all",
                  s === size
                    ? "bg-primary-accent shadow-md"
                    : "bg-gray-100 shadow-sm",
                  !inStock ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                )}
                aria-disabled={!inStock}
              >
                <input
                  type="radio"
                  name="size"
                  value={s}
                  checked={s === size}
                  disabled={!inStock}
                  onChange={() => onSizeChange(s)}
                  className="absolute inset-0 appearance-none cursor-pointer focus:outline-none"
                />
                <span
                  className={classNames(
                    "text-sm font-semibold uppercase transition-all",
                    s === size ? "text-white" : "text-primary"
                  )}
                >
                  EU{s}
                </span>
                {s === size && (
                  <span className="size-5 absolute -top-0.5 -right-0.5 bg-white flex items-center justify-center text-primary-accent rounded-full ">
                    ✔
                  </span>
                )}
              </label>
            );
          })}
        </div>
      </fieldset>

      {/* ─── Quantity Picker ─── */}
      <div className="">
        <label className="block text-sm font-semibold text-primary mb-2">
          Quantity
        </label>
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-between px-2 py-2 w-[150px] bg-gray-100 rounded-full">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              disabled={quantity <= 1}
              className="px-3 py-1 text-2xl text-primary cursor-pointer font-bold disabled:opacity-50"
            >
              –
            </button>
            <span className="px-4 text-md text-primary font-bold">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity((q) => Math.min(maxQty, q + 1))}
              disabled={quantity >= maxQty}
              className="px-3 py-1 text-2xl text-primary cursor-pointer font-bold disabled:opacity-50"
            >
              +
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Only{" "}
            <span className="text-primary-accent">
              {maxQty} {maxQty === 1 ? "item" : "items"}
            </span>{" "}
            left! Don&apos;t miss it
          </p>
        </div>
      </div>
    </div>
  );
}
