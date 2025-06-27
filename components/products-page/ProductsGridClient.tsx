"use client";

import { useProductFilter } from "@/lib/hooks/useProductFilter";
import { AnimatePresence, motion } from "motion/react";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { ProductCardSkeleton } from "../shared/Skeletons";

const ITEMS_PER_LOAD = 12;

const ProductCard = dynamic(() => import("./ProductCard"), {
  ssr: false, // never render on the server
  loading: () => <ProductCardSkeleton />,
});

export default function ProductsGridClient() {
  const { products } = useProductFilter();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const lastScrollY = useRef(0);

  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // Auto-load more on scroll to bottom
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting && visibleCount < products.length) {
          setIsLoadingMore(true);
          setTimeout(() => {
            setVisibleCount((prev) =>
              Math.min(prev + ITEMS_PER_LOAD, products.length)
            );
            setIsLoadingMore(false);
          }, 300); // small delay for visual smoothness
        }
      },
      { threshold: 1 }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => observer.disconnect();
  }, [products.length, visibleCount]);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // If user is not near the top and is scrolling upward, show the button
      if (currentY > 100 && currentY < lastScrollY.current) {
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

  const visibleProducts = products.slice(0, visibleCount);

  return (
    <>
      <div className="grid gap-4 relative mt-8 px-2 grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {visibleProducts.map((product, index) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <ProductCard index={index} product={product} />
              <div className="aspect-square bg-rose-400"></div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Sentinel for lazy loading */}
        <div ref={sentinelRef} className="h-10 col-span-full" />

        {/* Loader */}
        {isLoadingMore && (
          <div className="col-span-full text-center flex items-center justify-center gap-3 text-sm text-primary py-4 animate-pulse">
            <Image
              src="/spinning-dots.svg"
              alt="loader"
              width={36}
              height={36}
            />{" "}
            Loading more products...
          </div>
        )}
      </div>

      {/* Scroll to top FAB */}
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

      {/* Empty state */}
      {products.length === 0 && (
        <div className="w-full flex items-center flex-col justify-center text-center mt-12 px-4">
          <Image
            src="/empty-shelf.png"
            alt="Empty shelf illustration"
            width={320}
            height={240}
            className="mb-6"
          />
          <h2 className="text-2xl font-semibold mb-4">
            Hmm... no results found
          </h2>
          <p className="text-gray-500 max-w-md">
            We couldn’t find any products that match your current search or
            filter settings. Try adjusting your filters or browse our full
            collection to discover more items.
          </p>
        </div>
      )}
    </>
  );
}
