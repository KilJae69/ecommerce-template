"use client";

import { useState } from "react";
import { AnimatePresence, m } from "motion/react";

import { heroSlides } from "@/constants/heroSlidesData";
import { Container } from "../shared/Container";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import HeroButton from "./HeroButton";
import Image from "next/image";
import { heroFeaturesData } from "@/constants/heroFeaturesData";

export default function HeroSlider() {
  const [idx, setIdx] = useState(0);
  const slide = heroSlides[idx];

  // (optional) auto-play every 5s
  // useEffect(() => {
  //   const tid = setInterval(
  //     () => setIdx((i) => (i + 1) % heroSlides.length),
  //     9000
  //   );
  //   return () => clearInterval(tid);
  // }, []);

  const next = () => setIdx((i) => (i + 1) % heroSlides.length);
  const prev = () =>
    setIdx((i) => (i - 1 + heroSlides.length) % heroSlides.length);

  return (
    <section className="relative pt-42 overflow-hidden">
      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${slide.bg}`}
        aria-hidden
      />

      <Container>
        {/* Text & Logo */}
        <div className="relative  mx-auto px-4 flex flex-col lg:flex-row items-center py-12">
          <div className="w-full lg:w-1/2  text-center lg:text-left flex flex-col  justify-center text-gray-800">
            <AnimatePresence mode="wait">
              <m.div
                key={slide.key}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col min-h-[420px] md:min-h-[452px] lg:min-h-[420px] items-center lg:items-start justify-center"
              >
                {/* fixed-size logo box */}

                <div className=" mb-2 size-18">
                  <slide.Logo className="h-full w-full object-contain" />
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-5xl max-w-lg font-bold mb-4">
                  <span className="text-primary-accent">{slide.brand}</span>{" "}
                  <span className="text-gradient">{slide.title}</span>
                </h1>

                <p className="max-w-md mx-auto text-paragraph lg:mx-0 mb-6">
                  {slide.description}
                </p>

                <HeroButton />
              </m.div>
            </AnimatePresence>
          </div>

          {/* Image & Controls */}
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0 relative max-w-[600px]">
            {/* image wrapper with fixed aspect-ratio to avoid jumps */}
            <div className="mx-auto aspect-square ">
              <AnimatePresence mode="wait">
                <m.div
                  key={`badge-${slide.key}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6 }}
                  className="absolute z-30 -right-10 -top-10 aspect-square w-[50%]"
                >
                  <Image
                    priority
                    src="/icons/quality.png"
                    alt="quality badge"
                    fill
                  />
                </m.div>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <m.div
                  key={slide.img}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6 }}
                  className="relative size-full aspect-square"
                >
                  <Image
                    fill
                    priority
                    className="h-full z-10 relative w-full object-contain"
                    src={slide.img}
                    alt={slide.title}
                  />
                </m.div>
              </AnimatePresence>
            </div>

            {/* Prev/Next Arrows */}
            <button
              aria-label="Previous slide"
              onClick={prev}
              className="absolute left-0 z-50 top-2/3 flex items-center text-primary justify-center size-18 cursor-pointer -translate-y-1/2 p-2   rounded-full border transition hover:text-primary-accent"
            >
              <FaArrowLeft />
            </button>
            <button
              aria-label="Next slide"
              onClick={next}
              className="absolute right-0 z-50 top-2/3 flex items-center text-primary justify-center size-18 cursor-pointer -translate-y-1/2 p-2  border rounded-full transition hover:text-primary-accent"
            >
              <FaArrowRight />
            </button>

            {/* Dots */}
            <div role="group" aria-label="Slide navigation" className="absolute z-40 bottom-0 left-1/2 -translate-x-1/2 flex space-x-4">
              {heroSlides.map((_, i) => (
                <button
                  aria-label={`Go to slide ${i + 1}`}
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`w-4 h-4 rounded-full cursor-pointer ${
                    i === idx ? "bg-primary-accent" : "bg-primary"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
      <div className="w-full px-4 flex items-center justify-center py-8  bg-primary relative z-10">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y divide-gray-300 md:divide-y-0 gap-y-6 lg:gap-y-0 lg:divide-x container mx-auto px-4 lg:px-12 py-12 bg-white rounded-3xl overflow-hidden">
          {heroFeaturesData.map((feature) => (
            <li
              key={feature.key}
              className="
        flex items-center gap-4 p-6 text-center sm:text-left
        md:even:border-l md:even:border-gray-300 lg:even:border-l-0
      "
            >
              <Image
                src={feature.icon}
                alt={`feature icon ${feature.title}`}
                width={52}
                height={52}
                priority
              />
              <div className="flex flex-col">
                <p className="text-lg font-semibold whitespace-nowrap text-primary-accent">
                  {feature.title}
                </p>
                <p className="italic text-gray-400">{feature.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
