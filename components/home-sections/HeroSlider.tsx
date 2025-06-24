"use client"

import { useState, useEffect } from "react"
import { AnimatePresence, m } from "motion/react"
import { useRouter } from "next/navigation"
import { heroSlides } from "@/constants/heroSlidesData"

export default function HeroSlider() {
  const [idx, setIdx] = useState(0)
  const slide = heroSlides[idx]
  const router = useRouter()

  // (optional) auto-play every 5s
  useEffect(() => {
    const tid = setInterval(() => setIdx(i => (i + 1) % heroSlides.length), 9000)
    return () => clearInterval(tid)
  }, [])

  const next = () => setIdx(i => (i + 1) % heroSlides.length)
  const prev = () => setIdx(i => (i - 1 + heroSlides.length) % heroSlides.length)

  return (
    <section className="relative pt-42 overflow-hidden">
      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${slide.bg}`}
        aria-hidden
      />

      <div className="relative container mx-auto px-4 flex flex-col lg:flex-row items-center py-20">
        {/* Text & Logo */}
        <div className="w-full lg:w-1/2 text-center lg:text-left text-gray-800">
          <AnimatePresence mode="wait">
            <m.div
              key={slide.key}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              {/* fixed-size logo box */}
              <div className="mx-auto lg:mx-0 mb-6 h-12 w-40">
                <slide.Logo className="h-full w-full object-contain" />
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="max-w-md mx-auto lg:mx-0 mb-6">
                {slide.description}
              </p>
              <button
                onClick={() => router.push(`/collections?brand=${slide.key}`)}
                className="btn-primary"
              >
                Shop {slide.key.charAt(0).toUpperCase() + slide.key.slice(1)}
              </button>
            </m.div>
          </AnimatePresence>
        </div>

        {/* Image & Controls */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 relative">
          {/* image wrapper with fixed aspect-ratio to avoid jumps */}
          <div className="mx-auto min-h-[500px] max-h-[500px] max-w-[600px]">
            <AnimatePresence mode="wait">
              <m.img
                key={slide.img}
                src={slide.img}
                alt={slide.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6 }}
                className="h-full w-full object-contain"
              />
            </AnimatePresence>
          </div>

          {/* Prev/Next Arrows */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow"
          >
            ›
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`w-2 h-2 rounded-full ${
                  i === idx ? "bg-gray-800" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
