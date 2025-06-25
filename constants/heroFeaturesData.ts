export interface HeroFeature {
  key: string;
  title: string;
  description: string;
  icon: string;
}

export const heroFeaturesData: HeroFeature[] = [
  {
    key: "delivery",

    title: "Fast Delivery",
    description: "Start from $10",

    icon: "/icons/hero-features/delivery.svg",
  },
  {
    key: "money",

    title: "Refund",
    description: "7 Days Back",
    icon: "/icons/hero-features/piggy.svg",
  },
  {
    key: "return",

    title: "365 Days",
    description: "For free return",
    icon: "/icons/hero-features/alarm.svg",
  },
  {
    key: "payment",

    title: "Payment",
    description: "Secure system",
    icon: "/icons/hero-features/payment.svg",
  },
];
