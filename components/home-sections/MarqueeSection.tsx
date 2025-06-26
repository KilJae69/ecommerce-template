import { Marquee } from "../ui/marquee";

export default function MarqueeSection() {
    const messages = [
    "Free shipping on orders over $75",
    "New arrivals just dropped—shop the latest sneaker releases",
    "Sign up & save 15% on your first order",
    "Members get early access to VIP sales",
    "Flash sale: 30% off select running shoes—today only!",
    "Eco-friendly styles made with recycled materials",
    "Best sellers: Top-rated kicks of the month",
    "Gift cards available—give the perfect fit"
  ];
  return (
    <section className="my-12 py-12 lg:py-24 lg:my-24 shadow-xl bg-primary">
          <Marquee pauseOnHover repeat={3}  className="[--duration:120s]  w-full flex-1">
        {messages.map((msg, i) => (
          <p key={i} className="text-gradient-accent text-3xl leading-[1.2] lg:text-6xl mr-46">
            {msg}
          </p>
        ))}
      </Marquee>
    </section>
  );
  
}