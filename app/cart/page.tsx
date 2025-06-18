// app/cart/page.tsx
"use client";




import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import CartItemCard from "@/components/shared/CartItemCard";
import { useCartStore } from "@/lib/hooks/useStore";
import { Container } from "@/components/shared/Container";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import GlareCTA from "@/components/shared/GlareCTA";
import Image from "next/image";
import { useHasHydrated } from "@/lib/hooks/useHasHydrated";

export default function CartPage() {
   const hasHydrated = useHasHydrated();
  const { items } = useCartStore();

  const [shipping, setShipping] = useState<"free" | "standard" | "express">(
    "free"
  );

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = subtotal > 200 ? subtotal * 0.1 : 0;

  const shippingCost =
    shipping === "free" ? 0 : shipping === "standard" ? 19 : 22;
  const taxes = Math.round(subtotal * 0.1);
  const total = subtotal - discount + shippingCost + taxes;

  if (!hasHydrated) {
    return null; // or a small loading spinner if you prefer
  }

  return (
    <section className="relative py-12 mt-42 lg:pb-24 ">
      {/* Item list */}
      <Container>
        <div className="w-full border-b pb-6 md:pb-12 border-gray-300">
          <h1 className="text-h2  text-gradient">Your Cart</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10 pt-6  md:pt-12">
          {items.length > 1 ? (
            <div className="space-y-8">
              {items.map((item) => (
                <CartItemCard page key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="w-full flex flex-col items-center gap-4">
              <Image
                src="/empty-cart.png"
                alt="empty cart"
                width={400}
                height={400}
              />
              <p className="text-center text-2xl text-gradient font-semibold">
                Your shopping cart is empty.
              </p>
              <p className="text-center text-gray-500 max-w-xl">
                Looks like you have not added anything to your cart. Go ahead &
                explore top products.
              </p>
            </div>
          )}

          {/* Summary */}
          <div className=" sticky top-34 p-6 min-w-[300px] shadow-sm rounded-md space-y-6 h-[600px] bg-white ">
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
                <div className="flex items-center  space-x-2">
                  <RadioGroupItem value="free" id="shipping-free" />
                  <Label
                    className="text-primary cursor-pointer"
                    htmlFor="shipping-free"
                  >
                    Free Shipping ($0.00)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="standard" id="shipping-standard" />
                  <Label
                    className="text-primary cursor-pointer"
                    htmlFor="shipping-standard"
                  >
                    Standard ($19.00)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="express" id="shipping-express" />
                  <Label
                    className="text-primary cursor-pointer"
                    htmlFor="shipping-express"
                  >
                    Express ($22.00)
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="flex justify-between text-sm">
              <span>Estimated Taxes</span>
              <span>${taxes.toFixed(2)}</span>
            </div>

            <div className="flex text-lg  justify-between font-bold border-t border-gray-300 pt-4">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <div className="flex flex-col gap-4">
              {items.length > 0 && (
                <InteractiveHoverButton
                  invert
                  className="w-full px-4  text-md"
                  href="/checkout"
                >
                  Checkout
                </InteractiveHoverButton>
              )}
              <InteractiveHoverButton
                dark
                className="w-full px-4  text-md"
                href="/collections"
              >
                Continue Shopping
              </InteractiveHoverButton>
            </div>
          </div>
        </div>
        <GlareCTA />
      </Container>
    </section>
  );
}
