export  function SortBySelectSkeleton() {
  return (
    <div
      className="w-[150px] h-9 bg-gray-200 rounded-md   animate-pulse       
      "
    />
  );
}

export  function GlobalSearchSkeleton() {
  return (
    <div
      className="
        w-full relative max-w-xl mx-auto
        bg-white h-12 rounded-full overflow-hidden
        shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)]
        animate-pulse
      "
    >
      {/* input bar skeleton */}
      <div
        className="
          absolute left-4 top-1/2 -translate-y-1/2
          h-6 w-[60%] bg-gray-200 rounded-full
        "
      />

      {/* button circle skeleton */}
      <div
        className="
          absolute right-2 top-1/2 -translate-y-1/2
          h-8 w-8 bg-gray-200 rounded-full
        "
      />
    </div>
  );
}

export  function FiltersPanelSkeleton() {
  return (
    <div className="space-y-8 h-full animate-pulse">
      {/* Header Skeleton */}
      {/* <div className="flex items-center gap-2 border-b pb-3">
        <div className="h-8 w-6 rounded-full bg-gray-200" />
        <div className="h-8 w-24 rounded bg-gray-200" />
      </div> */}

      {/* Filters Skeleton */}
      <div className="space-y-4 md:space-y-8">
        {/* Brand Filter Skeleton */}
        <div className="space-y-2">
          <div className="h-5 w-20 rounded bg-gray-200" />
          <div className="grid grid-cols-4 md:grid-cols-2 w-full gap-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-12 rounded bg-gray-200" />
            ))}
          </div>
        </div>

        {/* Gender Filter Skeleton */}
        <div className="space-y-2">
          <div className="h-5 w-16 rounded bg-gray-200" />
          <div className="flex flex-wrap gap-2">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="h-8 w-16 rounded bg-gray-200" />
            ))}
          </div>
        </div>

        {/* Price Filter Skeleton */}
        <div className="space-y-4">
          <div className="h-5 w-16 rounded bg-gray-200" />
          <div className="flex justify-between">
            <div className="h-4 w-8 rounded bg-gray-200" />
            <div className="h-4 w-8 rounded bg-gray-200" />
          </div>
          <div className="h-2 rounded bg-gray-200" />
        </div>

        {/* Color Filter Skeleton */}
        <div className="space-y-2">
          <div className="h-5 w-16 rounded bg-gray-200" />
          <div className="flex flex-wrap gap-2">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-8 w-16 rounded bg-gray-200" />
            ))}
          </div>
        </div>

        {/* Size Filter Skeleton */}
        <div className="space-y-2">
          <div className="h-5 w-16 rounded bg-gray-200" />
          <div className="flex flex-wrap gap-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-8 w-12 rounded bg-gray-200" />
            ))}
          </div>
        </div>

        {/* Clear All Skeleton */}
        <div className="pt-4 border-t border-neutral-200">
          <div className="h-10 w-full rounded bg-gray-200" />
        </div>
      </div>
    </div>
  );
}

export function ProductsGridSkeleton() {
  return (
    <div className="grid gap-4 mt-8 px-2 sm:grid-cols-2 lg:grid-cols-3 animate-pulse">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="bg-white rounded-md overflow-hidden shadow-sm">
          {/* Image placeholder */}
          <div className="aspect-square bg-gray-200" />

          {/* Text placeholders */}
          <div className="p-4 space-y-2">
            <div className="h-5 w-3/4 bg-gray-200 rounded" />
            <div className="h-4 w-1/2 bg-gray-200 rounded" />
            <div className="h-5 w-1/4 bg-gray-200 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function ProductsStickyHeaderSkeleton() {
  return (
    <div className="py-3 z-10 px-2 hidden md:block sticky bg-white w-full animate-pulse">
      <div className="w-full flex justify-between items-center">
        {/* Line for "Showing X of Y" */}
        <div className="h-4 w-1/4 bg-gray-200 rounded" />
        <div className="flex gap-4">
          {/* SortBySelect placeholder */}
          <div className="h-8 w-28 bg-gray-200 rounded" />
          {/* View button placeholder */}
          <div className="h-8 w-12 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
}