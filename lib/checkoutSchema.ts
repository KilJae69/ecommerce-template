// schema/checkoutSchema.ts
import dayjs from "dayjs";
import { z } from "zod";

export const checkoutSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^\+?[0-9\s-]{7,15}$/.test(val),
      "Enter a valid phone number"
    ),
  address: z.string().min(1, "Street address is required"),
  apt: z.string().optional(),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zip: z
    .string()
    .min(4, "ZIP must be at least 4 digits")
    .regex(/^\d{4,}$/, "Invalid ZIP code"),
  country: z.string().min(1, "Country is required"),

  // Only card allowed now
  paymentMethod: z.literal("card"),

  cardNumber: z
    .string()
    .min(16, "Card number is required")
    .regex(/^\d{16}$/, "Enter a valid 16-digit card number"),
  cardHolder: z.string().min(1, "Cardholder name is required"),
 expiry: z
  .string()
  .length(4, "Enter expiration as MMYY")
  .refine((val) => {
    const month = Number(val.slice(0, 2));
    const year = Number("20" + val.slice(2, 4));

    if (month < 1 || month > 12) return false;
    const expDate = dayjs(`${year}-${month}-01`).endOf("month");
    return expDate.isAfter(dayjs());
  }, "Card has expired or invalid format"),
  cvc: z.string().regex(/^\d{3,4}$/, "CVC must be 3 or 4 digits"),
});

export type TCheckoutSchema = z.infer<typeof checkoutSchema>;
