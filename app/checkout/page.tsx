"use client";
import CartPageItemsList from "@/components/cart-page/CartPageItemsList";
import CartSummary from "@/components/cart-page/CartSummary";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import { Container } from "@/components/shared/Container";
import { useState } from "react";
import { AnimatePresence, m } from "motion/react";
import {
  CartItemListSkeleton,
  CartSummarySkeleton,
} from "@/components/shared/Skeletons";
import { checkoutSchema, TCheckoutSchema } from "@/lib/checkoutSchema";
import { zodResolver } from "@hookform/resolvers/zod";

import { Suspense } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Image from "next/image";
import { useCartStore } from "@/lib/hooks/useStore";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export default function CheckoutPage() {
  const { clearCart } = useCartStore();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const methods = useForm<TCheckoutSchema>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@outlook.com",
      phone: "",
      address: "1234 Main Street",
      apt: "",
      city: "Emerald City",
      state: "New York",
      zip: "73475",
      country: "United States",
      paymentMethod: "card",
      cardNumber: "4242424242424242",
      cardHolder: "John Doe",
      expiry: "1234",
      cvc: "123",
    },
  });

  const onSubmit = (data: TCheckoutSchema) => {
    setIsProcessing(true);
 window.scrollTo({ top: 0, behavior: "instant" });
    // Simulate delay
    setTimeout(() => {
      clearCart(); 
      setIsProcessing(false);
      setIsSubmitted(true);
      console.log("Submitted:", data);
    }, 1500);
  };
  return (
     <FormProvider {...methods}>
    <section className="relative py-12 mt-42 lg:pb-24">
      <Container>
        <div className="w-full mb-4">
          <h1 className="text-h2 text-gradient">
            Checkout
          </h1>
        </div>

        <AnimatePresence mode="wait">
          {!isSubmitted && !isProcessing && (
            <m.div
              key="checkout-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row gap-4 lg:gap-12"
            >
              <div className="w-full md:w-3/4">
                <CheckoutForm />
              </div>

              <div className="flex flex-col md:w-2/4 gap-4 ">
                <div className="max-h-[600px] p-2 overflow-y-auto">
                  <Suspense fallback={<CartItemListSkeleton />}>
                    <CartPageItemsList />
                  </Suspense>
                </div>

                <Suspense fallback={<CartSummarySkeleton />}>
                  <CartSummary checkout onSubmitExternal={methods.handleSubmit(onSubmit)} />
                </Suspense>
              </div>
            </m.div>
          )}

          {isProcessing && (
            <m.div
              key="processing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center flex flex-col items-center py-24"
            >
               <Image src="/bouncing-circles.svg" width={200} height={200} alt="success gif" />
              <p className="text-xl text-muted-foreground font-semibold">Processing your order...</p>
            </m.div>
          )}

          {isSubmitted && (
            <m.div
              key="thank-you"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center flex flex-col items-center py-24 max-w-2xl mx-auto"
            >
              <Image src="/gifs/success.gif" width={400} height={400} alt="success gif" />
              <h2 className="text-3xl font-bold text-primary mb-4">Thank you for your order!</h2>
              <p className="text-muted-foreground mb-4">
                We’ve sent a confirmation to your email. Your items will ship soon.
              </p>

              {/* <div className="bg-primary  flex flex-col items-start gap-2 text-white p-6 rounded-md shadow">
                <p className="text-sm text-muted-foreground">
                  <strong className="">Name:</strong> {methods.getValues("firstName")} {methods.getValues("lastName")}
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong className="">Email:</strong> {methods.getValues("email")}
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong className="">Card:</strong> **** **** **** {methods.getValues("cardNumber")?.slice(-4)}
                </p>
              </div> */}
              <div className="w-full flex flex-col sm:flex-row gap-4 mt-6 ">
                <InteractiveHoverButton invert className="w-full" href="/collections">
                  Continue shopping
                </InteractiveHoverButton>
                <InteractiveHoverButton dark  className="w-full" href="/">
                 Home
                </InteractiveHoverButton>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  </FormProvider>
  );
}
