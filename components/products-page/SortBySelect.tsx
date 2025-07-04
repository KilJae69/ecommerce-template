"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTransition } from "react";

const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Oldest", value: "oldest" },
  { label: "Low to High", value: "price_asc" },
  { label: "High to Low", value: "price_desc" },
];

export default function SortBySelect() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const current = searchParams.get("sort") || "";

  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("sort", value);
    } else {
      params.delete("sort");
    }

    startTransition(() => {
      router.push(`?${params.toString()}`);
    });
  };

  return (
    <Select value={current} onValueChange={handleChange} disabled={isPending}>
      <SelectTrigger className="w-[160px] bg-primary md:bg-transparent px-4 text-white md:text-primary rounded-full text-md cursor-pointer font-semibold tracking-wider border-none shadow-none ">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent className="bg-primary z-[4000] text-white">
        {sortOptions.map((option) => (
          <SelectItem key={option.value} className="cursor-pointer" value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

