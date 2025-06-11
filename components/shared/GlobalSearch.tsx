// components/GlobalSearch.tsx
"use client";

import { FormEvent, useState } from "react";
import { m } from "motion/react";
import { useRouter, useSearchParams } from "next/navigation";

export default function GlobalSearch() {
  const [value, setValue] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // clone existing params
    const params = new URLSearchParams(searchParams.toString());

    if (value.trim()) {
      params.set("query", value.trim());
    } else {
      params.delete("query");
    }

    // navigate client-side
    router.push(`/collections?${params.toString()}`);
    setValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full relative max-w-xl mx-auto bg-white h-12 rounded-full overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200"
    >
      <input
        value={value}
        name="query"
        autoComplete="off"
        placeholder="Nike Air Jordan"
        type="text"
        className="w-full relative text-md sm:text-base  border-none bg-transparent text-black h-full rounded-full focus:outline-none focus:ring-0 pl-4 sm:pl-10 pr-20"
        onChange={(e) => setValue(e.target.value)}
      />

      <button
        disabled={!value.trim()}
        type="submit"
        className="absolute right-2 top-1/2 z-50 cursor-pointer -translate-y-1/2 h-8 w-8 rounded-full disabled:bg-primary-accent/50 bg-primary-accent transition duration-200 flex items-center justify-center disabled:cursor-not-allowed"
      >
        <m.svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white h-4 w-4"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <m.path
            d="M5 12l14 0"
            initial={{ strokeDasharray: "50%", strokeDashoffset: "50%" }}
            animate={{ strokeDashoffset: value ? 0 : "50%" }}
            transition={{ duration: 0.3, ease: "linear" }}
          />
          <path d="M13 18l6 -6" />
          <path d="M13 6l6 6" />
        </m.svg>
      </button>
    </form>
  );
}
