"use client";

import { useProductFilter } from "@/lib/hooks/useProductFilter";
import { AnimatePresence, motion } from "motion/react";
import ProductCard from "./ProductCard";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ProductsGridClient() {
  const { products } = useProductFilter();

  const [showScrollTop, setShowScrollTop] = useState(false);
  const lastScrollY = useRef(0);

  // Track scroll direction and position
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY < 100) {
        setShowScrollTop(false);
      } else if (currentY < lastScrollY.current) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="grid gap-4 relative mt-8 px-2 grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProductCard index={index} product={product} />
            </motion.div>
          ))}
        </AnimatePresence>

        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.3 }}
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="bg-primary cursor-pointer text-white text-sm px-4 py-2 rounded-full shadow-md fixed bottom-30 md:bottom-5 right-6 z-[3000] focus:outline-none focus:ring-2 focus:ring-primary-accent"
            >
              ↑ Top
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {products.length === 0 && (
        <div className="w-full flex items-center flex-col justify-center text-center mt-12 px-4">
          <Image
            src="/empty-shelf.png"
            alt="Empty shelf illustration"
            width={320}
            height={240}
            className="mb-6"
          />
          <h2 className="text-2xl font-semibold mb-4">Hmm... no results found</h2>
          <p className="text-gray-500 max-w-md">
            We couldn’t find any products that match your current search or filter
            settings. Try adjusting your filters or browse our full collection to
            discover more items.
          </p>
        </div>
      )}
    </>
  );
}
