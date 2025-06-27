import { cn } from "@/lib/utils";

import Image from "next/image";

import { Marquee } from "../ui/marquee";
import { testimonialData } from "@/constants/testimonialData";

const firstRow = testimonialData.slice(0, testimonialData.length / 2);
const secondRow = testimonialData.slice(testimonialData.length / 2);

const ReviewCard = ({
  img,
  name,
  rating,
  body,
}: {
  img: string;
  name: string;
  rating: number;

  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 lg:w-94 cursor-pointer overflow-hidden rounded-xl border px-4 py-4 md:py-6 bg-gray-900",
        // light styles
        "border-primary-light  hover:bg-gray-900/[.5]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="relative w-[32px] md:w-[48px] aspect-square ">
          <Image
            className="rounded-full bg-primary-lighter"
           fill
            alt={name}
            src={img}
          />
        </div>
        <div className="flex flex-col">
          <figcaption className="text-sm md:text-xl font-medium text-white">
            {name}
          </figcaption>
          {/* optional star-rating */}
          <div className="flex items-center gap-1">
            {Array.from({ length: rating }).map((_, i) => (
              <span key={i} className="text-amber-400">
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
      <blockquote className="mt-2 text-gray-300 text-sm md:text-md italic">&quot;{body}&quot;</blockquote>
    </figure>
  );
};

export function MarqueeTestimonials() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-primary"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-primary"></div>
    </div>
  );
}
