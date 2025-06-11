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