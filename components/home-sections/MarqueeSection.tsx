// components/MarqueeSection.tsx


import { Marquee } from "../ui/marquee";
import {
  FaTruck,
  FaBoxOpen,
  FaTags,
  FaUserCheck,
  FaBolt,
  FaLeaf,
  FaTrophy,
  FaGift,
} from "react-icons/fa";

export default function MarqueeSection() {
  const items = [
    {
      icon: FaTruck,
      text: "Free shipping on orders over $75",
    },
    {
      icon: FaBoxOpen,
      text: "New arrivals just dropped—shop the latest sneaker releases",
    },
    {
      icon: FaTags,
      text: "Sign up & save 15% on your first order",
    },
    {
      icon: FaUserCheck,
      text: "Members get early access to VIP sales",
    },
    {
      icon: FaBolt,
      text: "Flash sale: 30% off select running shoes—today only!",
    },
    {
      icon: FaLeaf,
      text: "Eco-friendly styles made with recycled materials",
    },
    {
      icon: FaTrophy,
      text: "Best sellers: Top-rated kicks of the month",
    },
    {
      icon: FaGift,
      text: "Gift cards available—give the perfect fit",
    },
  ];

  return (
    <section className="my-12 py-12 lg:py-24 lg:my-24 shadow-xl bg-primary">
      <Marquee pauseOnHover repeat={3} className="[--duration:120s] w-full">
        {items.map(({ icon: Icon, text }, i) => (
          <div
            key={i}
            className="flex items-center flex-shrink-0 mr-16"
          >
            <Icon className="text-primary-accent w-8 h-8 lg:w-15 lg:h-15 mr-4" />
            <span className="text-white text-3xl leading-[1.2] lg:text-6xl">
              {text}
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
