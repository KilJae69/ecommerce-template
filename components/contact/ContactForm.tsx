"use client";

import type React from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Label } from "@/components/ui/label";

import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

import { FadeIn } from "../shared/FadeIn";


import { contactFormSchema, TContactFormSchema } from "@/lib/contactSchema";

import { Input } from "../ui/input";

// Props interface for reusability
interface ContactFormProps {
  defaultValues?: Partial<TContactFormSchema>;
  className?: string;
}

export default function ContactForm({
  defaultValues,
  className,
}: ContactFormProps) {
  

  // Initialize React Hook Form with Zod resolver
  const {
    register,
    handleSubmit,
    reset,
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

  // Form submission handler
  const onSubmit = async (data: TContactFormSchema) => {
    console.log(data);
    reset();
  };

  return (
    <div
      className={cn(
        "shadow-input mx-auto w-full max-w-3xl rounded-none bg-white md:rounded-2xl  ",
        className
      )}
    >
      <FadeIn>
        <form
          className="my-8 bg-linear-to-b from-primary/20  to-white relative shadow-md p-4 md:p-16 rounded-md"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer>
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                placeholder={"Your first name"}
                {...register("firstName")}
              />
              <ErrorMessage>{errors.firstName?.message}</ErrorMessage>
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                placeholder="Your last name"
                {...register("lastName")}
              />
              <ErrorMessage>{errors.lastName?.message}</ErrorMessage>
            </LabelInputContainer>
          </div>

          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer className="mb-4">
              <Label htmlFor="phone">Phone (optional)</Label>
              <Input
                id="phone"
                placeholder="+1 (555) 123-4567"
                type="tel"
                {...register("phone")}
              />
              <ErrorMessage>{errors.phone?.message}</ErrorMessage>
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                placeholder="john.doe@gmail.com"
                type="email"
                {...register("email")}
              />
              <ErrorMessage>{errors.email?.message}</ErrorMessage>
            </LabelInputContainer>
          </div>

          <LabelInputContainer className="mb-8">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              placeholder="How can we help you?"
              className="min-h-[120px] resize-y"
              {...register("message")}
            />
            <ErrorMessage>{errors.message?.message}</ErrorMessage>
          </LabelInputContainer>

          <button
            className="group/btn cursor-pointer relative block h-10 w-full rounded-md bg-gradient-to-br from-primary-accent to-primary-accent/80 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]  disabled:opacity-70"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}{" "}
            {!isSubmitting && "→"}
            <BottomGradient />
          </button>
        </form>
      </FadeIn>
    </div>
  );
}

// Reusable components
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

// Error message component with fixed height to prevent layout shifts
export const ErrorMessage = ({ children }: { children: React.ReactNode }) => {
  return <div className="min-h-[20px] text-xs text-rose-500 ">{children}</div>;
};
