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