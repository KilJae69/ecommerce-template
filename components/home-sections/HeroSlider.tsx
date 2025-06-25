"use client";

import { useState } from "react";
import { AnimatePresence, m } from "motion/react";

import { heroSlides } from "@/constants/heroSlidesData";
import { Container } from "../shared/Container";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import HeroButton from "./HeroButton";
import Image from "next/image";

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
                className="flex flex-col min-h-[404px] items-center lg:items-start justify-center"
              >
                {/* fixed-size logo box */}
                <div className=" mb-2 size-18">
                  <slide.Logo className="h-full w-full object-contain" />
                </div>

                <h1 className="text-4xl lg:text-5xl max-w-lg font-bold mb-4">
                  <span className="text-primary-accent">{slide.brand}</span>{" "}
                  <span>{slide.title}</span>
                </h1>
                <p className="max-w-md mx-auto lg:mx-0 mb-6">
                  {slide.description}
                </p>
                <HeroButton />
              </m.div>
            </AnimatePresence>
          </div>

          {/* Image & Controls */}
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0 relative">
            {/* image wrapper with fixed aspect-ratio to avoid jumps */}
            <div className="mx-auto aspect-square">
              <AnimatePresence mode="wait">
                <m.div
                  key={`badge-${slide.key}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6 }}
                  className="absolute z-30 -right-10 -top-10 aspect-square w-[50%]"
                >
                  <Image src="/icons/quality.png" alt="quality badge" fill />
                </m.div>
                <m.img
                  key={slide.img}
                  src={slide.img}
                  alt={slide.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6 }}
                  className="h-full z-10 relative w-full object-contain"
                />
              </AnimatePresence>
            </div>

            {/* Prev/Next Arrows */}
            <button
              onClick={prev}
              className="absolute left-0 z-50 top-2/3 flex items-center text-primary justify-center size-18 cursor-pointer -translate-y-1/2 p-2   rounded-full border transition hover:text-primary-accent"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={next}
              className="absolute right-0 z-50 top-2/3 flex items-center text-primary justify-center size-18 cursor-pointer -translate-y-1/2 p-2  border rounded-full transition hover:text-primary-accent"
            >
              <FaArrowRight />
            </button>

            {/* Dots */}
            <div className="absolute z-40 bottom-0 left-1/2 -translate-x-1/2 flex space-x-4">
              {heroSlides.map((_, i) => (
                <button
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
    </section>
  );
}
