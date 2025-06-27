"use client";

import type React from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { FadeIn } from "../shared/FadeIn";
import { contactFormSchema, TContactFormSchema } from "@/lib/contactSchema";
import { useState } from "react";
import { VanishingInput } from "../shared/VanishingInput";
import { VanishingTextarea } from "../shared/VanishingTextarea";
import { AnimatePresence, m } from "motion/react";
import Image from "next/image";

interface ContactFormProps {
  defaultValues?: Partial<TContactFormSchema>;
  className?: string;
}

export default function VanishingContactForm({
  defaultValues,
  className,
}: ContactFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<TContactFormSchema>({
    resolver: zodResolver(contactFormSchema()),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
      ...defaultValues,
    },
  });

  const firstName = watch("firstName");
  const lastName = watch("lastName");
  const phone = watch("phone");
  const email = watch("email");
  const message = watch("message");

  const [vanish, setVanish] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const onSubmit = async (data: TContactFormSchema) => {
    console.log(data);
    setVanish(true);
    setTimeout(() => {
      setShowThankYou(true);
      setVanish(false);
      reset();
    }, 1500);
  };

  return (
    <div
      className={cn(
        "shadow-input mx-auto w-full max-w-3xl rounded-none bg-white md:rounded-2xl  ",
        className
      )}
    >
      <FadeIn>
        <AnimatePresence mode="wait">
          {!showThankYou ? (
            <m.form
              key="form"
              initial={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="my-8 bg-primary relative shadow-2xl p-4 md:p-16 rounded-md"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                <LabelInputContainer>
                  <Label htmlFor="firstName">First Name *</Label>
                  <VanishingInput
                    {...register("firstName")}
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setValue("firstName", e.target.value)}
                    triggerVanish={vanish}
                    placeholders={["Enter your first name...", "John", "Alice"]}
                  />
                  <ErrorMessage>{errors.firstName?.message}</ErrorMessage>
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <VanishingInput
                    {...register("lastName")}
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setValue("lastName", e.target.value)}
                    triggerVanish={vanish}
                    placeholders={["Enter your last name...", "Doe", "Bergmann"]}
                  />
                  <ErrorMessage>{errors.lastName?.message}</ErrorMessage>
                </LabelInputContainer>
              </div>

              <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="phone">Phone (optional)</Label>
                  <VanishingInput
                    {...register("phone")}
                    id="phone"
                    value={phone || ""}
                    onChange={(e) => setValue("phone", e.target.value)}
                    triggerVanish={vanish}
                    placeholders={[
                      "Enter your phone number...",
                      "+123 456 7890",
                      "+123456789",
                    ]}
                  />
                  <ErrorMessage>{errors.phone?.message}</ErrorMessage>
                </LabelInputContainer>

                <LabelInputContainer className="mb-4">
                  <Label htmlFor="email">Email *</Label>
                  <VanishingInput
                    {...register("email")}
                    id="email"
                    value={email}
                    onChange={(e) => setValue("email", e.target.value)}
                    triggerVanish={vanish}
                    placeholders={[
                      "Enter your email address...",
                      "john.doe@gmail.com",
                      "alice.bergman@outlook.com",
                    ]}
                  />
                  <ErrorMessage>{errors.email?.message}</ErrorMessage>
                </LabelInputContainer>
              </div>

              <LabelInputContainer className="mb-8">
                <Label htmlFor="message">Message *</Label>
                <VanishingTextarea
                  {...register("message")}
                  id="message"
                  value={message}
                  onChange={(e) => setValue("message", e.target.value)}
                  triggerVanish={vanish}
                  placeholders={[
                    "How can we help you?",
                    "Tell us about your project...",
                    "Share your ideas, questions or concerns...",
                  ]}
                />
                <ErrorMessage>{errors.message?.message}</ErrorMessage>
              </LabelInputContainer>

              <button
              
                className="group/btn cursor-pointer relative block h-10 w-full rounded-md bg-gradient-to-br from-primary-accent to-primary-accent/80 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]  disabled:opacity-70"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"} {!isSubmitting && "→"}
                <BottomGradient />
              </button>
            </m.form>
          ) : (
            <m.div
              key="thankyou"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="my-8 flex flex-col items-center gap-8 justify-center p-16 text-center text-xl font-semibold text-primary-accent"
            >
              <Image alt="success gif" src="/gifs/success.gif" width={400} height={400} />
              Thank you! We&apos;ll get back to you soon.
            </m.div>
          )}
        </AnimatePresence>
      </FadeIn>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-slate-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

export const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

export const ErrorMessage = ({ children }: { children: React.ReactNode }) => {
  return <div className="min-h-[20px] pl-8 text-xs text-rose-500 ">{children}</div>;
};
