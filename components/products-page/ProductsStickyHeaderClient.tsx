"use client";

import { useHeaderScroll } from "@/lib/hooks/useHeaderScroll";
import SortBySelect from "../products-page/SortBySelect";
import { m } from "motion/react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaXmark } from "react-icons/fa6";
import { Suspense } from "react";
import { SortBySelectSkeleton } from "../shared/Skeletons";
import { useProductFilter } from "@/lib/hooks/useProductFilter";

export default function ProductsStickyHeaderClient() {
    const {totalCount,totalResults} = useProductFilter()
  const { positions } = useHeaderScroll();
  const router = useRouter();
  const searchParams = useSearchParams();

  // 1) Read `query` straight from URL
  const query = searchParams.get("query") || "";

  // 2) Remove only that key
  const removeQuery = () => {
    const updated = new URLSearchParams(searchParams.toString());
    updated.delete("query");
    const href = updated.toString()
      ? `/collections?${updated.toString()}`
      : "/collections";
    router.push(href);
  };
  return (
    <m.div
      className="py-3 z-10 px-2 hidden md:block sticky bg-white  w-full "
      animate={{
        top: positions.desktop.totalHeight,
      }}
      transition={{ type: "tween", duration: 0.2 }}
    >
      <div className="w-full flex justify-between items-center">
        <p>
          Showing {totalResults} of {totalCount} results
        </p>
        {query && (
          <button
            aria-label="Clear search"
            onClick={removeQuery}
            className=" flex items-center gap-2 group cursor-pointer"
          >
            <span className="bg-gray-100 px-3 py-1 rounded-full inline-flex items-center">
              <span className="text-sm font-medium truncate max-w-xs">
                {query}
              </span>
              <span className="ml-2 text-gray-500 cursor-pointer group-hover:text-gray-800">
                <FaXmark />
              </span>
            </span>
          </button>
        )}
        <div className="flex gap-4">
          <Suspense fallback={<SortBySelectSkeleton />}>
            <SortBySelect />
          </Suspense>
         
        </div>
      </div>
    </m.div>
  );
}


