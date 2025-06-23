"use client";

import { useFormContext } from "react-hook-form";

import { TCheckoutSchema } from "@/lib/checkoutSchema";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import Image from "next/image";
import { CardNumberInput } from "./CardNumberInput";
import { ExpiryInput } from "./ExpiryInput";

export default function CheckoutForm() {
  const {
    register,
    formState: { errors },
    // if you still want to manually reset
  } = useFormContext<TCheckoutSchema>();

  return (
   
      <form className="rounded-md space-y-6">
        <Section title="Personal Information">
          <div className="grid md:grid-cols-2 mb-2 gap-2">
            <LabelInput
              id="firstName"
              label="First Name *"
              error={errors.firstName?.message}
            >
              <Input
                className="bg-gray-100"
                {...register("firstName")}
                placeholder="Clark"
              />
            </LabelInput>
            <LabelInput
              id="lastName"
              label="Last Name *"
              error={errors.lastName?.message}
            >
              <Input
                className="bg-gray-100"
                {...register("lastName")}
                placeholder="Kent"
              />
            </LabelInput>
          </div>
          <div className="grid md:grid-cols-2 mb-2 gap-2">
            <LabelInput
              id="email"
              label="Email *"
              error={errors.email?.message}
            >
              <Input
                className="bg-gray-100"
                type="email"
                {...register("email")}
                placeholder="clark@example.com"
              />
            </LabelInput>
            <LabelInput
              id="phone"
              label="Phone (optional)"
              error={errors.phone?.message}
            >
              <Input
                className="bg-gray-100"
                type="tel"
                {...register("phone")}
                placeholder="+1 (555) 123-4567"
              />
            </LabelInput>
          </div>
        </Section>

        <Section title="Shipping Address">
          <div className="grid md:grid-cols-2 mb-2 gap-2">
            <LabelInput
              id="address"
              label="Address *"
              error={errors.address?.message}
            >
              <Input
                className="bg-gray-100"
                {...register("address")}
                placeholder="1234 Main St"
              />
            </LabelInput>
            <LabelInput id="apt" label="Apt, Suite (optional)">
              <Input
                className="bg-gray-100"
                {...register("apt")}
                placeholder="567"
              />
            </LabelInput>
          </div>
          <div className="grid md:grid-cols-3 mb-2 gap-2">
            <LabelInput id="city" label="City *" error={errors.city?.message}>
              <Input
                className="bg-gray-100"
                {...register("city")}
                placeholder="Cityville"
              />
            </LabelInput>
            <LabelInput
              id="state"
              label="State/Province *"
              error={errors.state?.message}
            >
              <Input
                className="bg-gray-100"
                {...register("state")}
                placeholder="Arizona"
              />
            </LabelInput>
            <LabelInput
              id="zip"
              label="Postal Code *"
              error={errors.zip?.message}
            >
              <Input
                className="bg-gray-100"
                {...register("zip")}
                placeholder="12345"
              />
            </LabelInput>
          </div>
          <LabelInput
            id="country"
            label="Country *"
            error={errors.country?.message}
          >
            <Input
              className="bg-gray-100"
              {...register("country")}
              placeholder="United States"
            />
          </LabelInput>
        </Section>

        <Section title="Billing Details">
          <Label className="font-semibold uppercase text-sm text-muted-foreground mb-4 flex items-center gap-4">
            Credit / Debit Card{" "}
            <span className="flex gap-2">
              <Image
                alt="visa icon"
                width={32}
                height={32}
                src="/icons/payments/payment-01.svg"
              />
              <Image
                alt="mastercard icon"
                width={32}
                height={32}
                src="/icons/payments/payment-03.svg"
              />
            </span>
          </Label>
          <div className="space-y-2">
            <LabelInput id="cardNumber" label="Card number *">
              <CardNumberInput name="cardNumber" />
            </LabelInput>
            <LabelInput
              id="cardHolder"
              label="Card holder name *"
              error={errors.cardHolder?.message}
            >
              <Input
                className="bg-gray-100"
                {...register("cardHolder")}
                placeholder="Clark Kent"
              />
            </LabelInput>
            <div className="grid md:grid-cols-2 gap-4">
              <LabelInput id="expiry" label="Expiration date (MM/YY) *">
                <ExpiryInput name="expiry" />
              </LabelInput>
              <LabelInput id="cvc" label="CVC *" error={errors.cvc?.message}>
                <Input
                  className="bg-gray-100"
                  {...register("cvc")}
                  placeholder="123"
                />
              </LabelInput>
            </div>
          </div>
        </Section>

        {/* <button
          type="submit"
          className="w-full bg-primary-accent cursor-pointer text-white font-semibold py-4 rounded-md hover:bg-primary-accent/90 transition"
        >
          {isSubmitting ? "Processing..." : "Confirm Order"}
        </button> */}
      </form>
    
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-6 shadow-md p-3 md:p-6 rounded-md">
      <h2 className="text-xl pb-3 text-primary-accent font-semibold tracking-wider border-b">
        {title}
      </h2>
      {children}
    </div>
  );
}

function LabelInput({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col space-y-1">
      <Label htmlFor={id} className="text-primary text-sm">
        {label}
      </Label>
      {children}
      <p className="pl-2 text-xs text-rose-500 min-h-[1rem]">{error}</p>
    </div>
  );
}
