"use client";
import { HTMLAttributes, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import WaveReveal from "./wave-reveal";
import Image from "next/image";

interface ImageProps extends HTMLAttributes<HTMLDivElement> {
  item: { image: string; title: string };
  index: number;
  activeItem: number;
}

const List = ({ item, index, activeItem, ...props }: ImageProps) => {
  const isActive = index === activeItem;

  return (
    <div
      {...props}
      className={cn(
        // flex-column on mobile (stack), flex-row on md+ (overlay)
        "relative flex flex-col w-full cursor-pointer overflow-hidden rounded-md transition-all duration-300 ease-in-out",
        "md:flex-row md:w-20 md:h-full",

        // height: 5rem collapsed / 25rem expanded on mobile
        isActive ? "h-[400px]" : "h-20",

        // md+: let active flex-grow, others stay
        isActive && "md:flex-grow",
      )}
    >
      <Image
        src={item.image}
        alt={item.title}
        width={400}
        height={400}
        className={cn("h-full w-full object-cover", {
          "blur-[2px]": !isActive,
        })}
      />

      {isActive && (
        <div
          className={cn(
            // mobile: static in the flow + dark text
            
            // md+: absolute overlay + white text
            "absolute bottom-4 left-4 text-white md:mb-0"
          )}
        >
          <WaveReveal
            duration="1000ms"
            className="items-start justify-start text-xl sm:text-2xl md:text-6xl"
            text={item.title}
            direction="up"
          />
        </div>
      )}
    </div>
  );
};

const items = [
  { image: "/images/featured-brands/nike-featured.jpg", title: "Nike" },
  { image: "/images/featured-brands/adidas-featured.jpg", title: "Adidas" },
  { image: "/images/featured-brands/under-featured.jpg", title: "Under Armour" },
  { image: "/images/featured-brands/nb-featured.jpg", title: "New Balance" },
];

export default function Expandable({
  list = items,
  autoPlay = true,
  className,
}: {
  list?: typeof items;
  autoPlay?: boolean;
  className?: string;
}) {
  const [activeItem, setActiveItem] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!autoPlay) return;
    const tid = setInterval(() => {
      if (!isHovering) setActiveItem((i) => (i + 1) % list.length);
    }, 5000);
    return () => clearInterval(tid);
  }, [autoPlay, isHovering, list.length]);

  return (
    <div
      className={cn(
        // ALWAYS a row, auto height on mobile
        "flex md:flex-row flex-col w-full gap-1 h-auto",
        // md+ fixed height
        "md:h-[400px]",
        className
      )}
    >
      {list.map((item, index) => (
        <List
          key={item.title}
          item={item}
          index={index}
          activeItem={activeItem}
          onMouseEnter={() => {
            setActiveItem(index);
            setIsHovering(true);
          }}
          onMouseLeave={() => setIsHovering(false)}
        />
      ))}
    </div>
  );
}
