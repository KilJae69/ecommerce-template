import Image from "next/image";
import SpotlightCard from "../ui/spotlight-card";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import { FadeIn, FadeInStagger } from "./FadeIn";

export default function GlareCTA() {
  return (
    <section className="pt-12 lg:pt-24">
      <SpotlightCard
        className="relative h-[400px]  shadow-2xl w-full bg-transparent"
        spotlightColor={"rgba(212, 175, 55, 0.4)"}
      >
        {/* 1) Background image */}
        <Image
          fill
          className="relative object-cover  -z-20  "
          alt="sneakers"
          src="/cta-image.jpg"
        />

        {/* 2) Stronger overlay + blur */}
        <div className="absolute inset-0 bg-primary/50 backdrop-blur-xs -z-10" />

        {/* 3) Centered text block with its own semi-opaque box */}
        <div className="absolute inset-0 flex flex-col text-center items-center justify-center px-6">
          <FadeInStagger>
            <FadeIn>
              <h2 className="text-2xl md:text-4xl uppercase tracking-widest font-bold  text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                Elevate Your Sneaker Game
              </h2>
            </FadeIn>
            <FadeIn>
              <p className="max-w-xl mx-auto text-sm md:text-lg leading-relaxed tracking-wide text-white opacity-90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] mb-6">
                Dive into our handpicked collection of next-level kicks,
                designed for style and performance. Whether you’re hitting the
                streets or the gym, we’ve got the perfect pair waiting for you.
              </p>
            </FadeIn>
            <FadeIn>
              <InteractiveHoverButton
                className="text-sm md:text-lg"
                href="/collections"
              >
                Shop Now
              </InteractiveHoverButton>
            </FadeIn>
          </FadeInStagger>
        </div>
      </SpotlightCard>
    </section>
  );
}
