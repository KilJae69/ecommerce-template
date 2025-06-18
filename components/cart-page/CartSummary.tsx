// components/cart/CartSummary.tsx
"use client";

import { useCartStore } from "@/lib/hooks/useStore";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export default function CartSummary() {
  const { items } = useCartStore();
  const [shipping, setShipping] = useState<"free" | "standard" | "express">("free");

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = subtotal > 200 ? subtotal * 0.1 : 0;
  const shippingCost = shipping === "free" ? 0 : shipping === "standard" ? 19 : 22;
  const taxes = Math.round(subtotal * 0.1);
  const total = subtotal - discount + shippingCost + taxes;

  return (
    <div className="sticky top-34 p-6 min-w-[300px] shadow-sm rounded-md space-y-6 h-[600px] bg-white">
      <h2 className="text-2xl font-semibold text-gradient">Summary</h2>

      <div className="flex justify-between text-sm">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      {discount > 0 && (
        <div className="flex justify-between text-sm text-green-600 font-semibold">
          <span>Discount (10%)</span>
          <span>−${discount.toFixed(2)}</span>
        </div>
      )}

      <div className="space-y-4">
        <p className="text-lg font-semibold">Shipping</p>
        <RadioGroup
          defaultValue={shipping}
          onValueChange={(val) => setShipping(val as typeof shipping)}
          className="space-y-2"
        >
          {[
            { id: "shipping-free", value: "free", label: "Free Shipping ($0.00)" },
            { id: "shipping-standard", value: "standard", label: "Standard ($19.00)" },
            { id: "shipping-express", value: "express", label: "Express ($22.00)" },
          ].map(({ id, value, label }) => (
            <div className="flex items-center space-x-2" key={value}>
              <RadioGroupItem value={value} id={id} />
              <Label className="text-primary cursor-pointer" htmlFor={id}>
                {label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="flex justify-between text-sm">
        <span>Estimated Taxes</span>
        <span>${taxes.toFixed(2)}</span>
      </div>

      <div className="flex text-lg justify-between font-bold border-t border-gray-300 pt-4">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <div className="flex flex-col gap-4">
        {items.length > 0 && (
          <InteractiveHoverButton invert className="w-full px-4 text-md" href="/checkout">
            Checkout
          </InteractiveHoverButton>
        )}
        <InteractiveHoverButton dark className="w-full px-4 text-md" href="/collections">
          Continue Shopping
        </InteractiveHoverButton>
      </div>
    </div>
  );
}
