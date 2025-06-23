"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoComponentProps {
  brand: string;
  small?: boolean;
}

const logoMap: Record<string, string> = {
  nike: "/assets/logos/nike-logo.png",
  adidas: "/assets/logos/adidas-logo.png",
  "under-armour": "/assets/logos/under-armor-vector-logo.png",
  "new-balance": "/assets/logos/nb-logo.png",
};

const labelMap: Record<string, string> = {
  nike: "Nike",
  adidas: "Adidas",
  "under-armour": "Under Armour",
  "new-balance": "New Balance",
};

export default function LogoFactory({
  brand,
  small = false,
}: LogoComponentProps) {
  const logoSrc = logoMap[brand];
  const brandLabel = labelMap[brand] ?? brand; // fallback to raw key if not found

  return (
    <div className="flex items-center gap-2">
      <div className={cn("border flex items-center shrink-0 p-1 justify-center  relative rounded-full", `${small ? "size-6": "size-12"}`)}>
        <Image
          src={logoSrc}
          alt={`${brandLabel} logo`}
          fill
          className="relative rounded-full object-contain"
          priority={false}
        />
      </div>
      <p className={`${small ? "text-sm " : ""}`}>{brandLabel}</p>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 256 256"
        className="text-primary-accent shrink-0"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57,9.14C88,40.64,82.56,40.72,77.31,40.8c-9.76.15-20.82.31-28.51,8S41,67.55,40.8,77.31c-.08,5.25-.16,10.67-1.52,13.94-1.47,3.56-5.37,7.63-9.14,11.57C23.51,109.72,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.56,1.47,7.63,5.37,11.57,9.14C109.72,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.56,5.37-7.63,9.14-11.57C232.49,146.28,240,138.44,240,128S232.49,109.73,225.86,102.82Zm-52.2,6.84-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
      </svg>
    </div>
  );
}
