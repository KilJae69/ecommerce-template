// components/products-page/MobileFiltersBar.tsx
"use client";

import React, { Suspense, useState } from "react";
import { useScroll, useMotionValueEvent, m } from "motion/react";

import ActiveFiltersBar from "./ActiveFiltersBar";
import MobileFilterDrawer from "./MobileFilterDrawer";
import SortBySelect from "./SortBySelect";
import { SortBySelectSkeleton } from "../shared/Skeletons";

export default function MobileFiltersBar() {
  //
  // 1) Listen to scrollY to know whether we're scrolling up or down
  //
  const { scrollY } = useScroll();
  const [barState, setBarState] = useState<"shown" | "hidden">("shown");

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    // If we're at the very top, always show the bar
    if (latest <= 0) {
      setBarState("shown");
      return;
    }

    // If scrolling down past a small threshold, hide the bar
    if (latest > previous && latest > 20) {
      setBarState("hidden");
    }
    // If scrolling up, show the bar
    else if (latest < previous) {
      setBarState("shown");
    }
  });

  //
  // 2) Slide the filters bar vertically by animating its 'y' value
  //
  //    - When "hidden", move it down out of view: 100% of its own height.
  //    - When "shown", move it back to y=0.
  //
  //    Note: Our bar’s container has a fixed height of “h-32” (128px).
  //          We can therefore push it down by e.g. “100%” or “128px”.
  //
  return (
    <m.div
      // Initial state: fully visible (y = 0)
      initial={{ y: 0 }}
      // Animate either “hidden” or “shown”
      animate={{
        // When hidden, move it down by 100% of its own height, so it’s off‐screen.
        // You could also hardcode “y: 128” if you know it’s always h-32 (128px).
        y: barState === "hidden" ? "100%" : 0,
      }}
      transition={{ type: "tween", duration: 0.2 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-neutral-200 shadow-md p-4  h-28 flex flex-col justify-between"
    >
      {/* ─────────────────────────────── */}
      {/* 1) Show active filter pills (if any) */}
      {/* ─────────────────────────────── */}
      <div className="flex-1 overflow-x-auto pb-2">
        <Suspense>
          <ActiveFiltersBar />
        </Suspense>
      </div>

      {/* ─────────────────────────────── */}
      {/* 2) Always‐visible row with “Filters” button and “Sort” button */}
      {/* ─────────────────────────────── */}
      <div className="flex w-full justify-between">
        <Suspense fallback={<SortBySelectSkeleton />}>
          <MobileFilterDrawer />
        </Suspense>
        <Suspense fallback={<SortBySelectSkeleton />}>
          <SortBySelect />
        </Suspense>
      </div>
    </m.div>
  );
}
