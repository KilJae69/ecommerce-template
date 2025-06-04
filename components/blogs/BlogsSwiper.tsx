"use client";

import React from "react";

import Image from "next/image";

import { useLazySwiper } from "@/lib/hooks/useLazySwiper";
import { Blog } from "@/constants/blogsData";
import BlogCard from "./BlogCard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function BlogsSwiper({ blogs }: { blogs: Blog[] }) {
  const { ref, SwiperComponent, SwiperSlideComponent, modules } =
    useLazySwiper();

  return (
    <div ref={ref} className="flex items-center justify-center w-full">
      {SwiperComponent ? (
        <SwiperComponent
          pagination={{
            clickable: true,
          }}
          navigation={true}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          spaceBetween={30}
          grabCursor={true}
          modules={modules}
          className=" size-full px-10 h-[450px] "
        >
          {blogs.map((item) => (
            <SwiperSlideComponent
              key={item.title}
              className="relative py-3  cursor-grab"
            >
              <BlogCard blog={item} className="h-[400px] hover:shadow-lg " />
            </SwiperSlideComponent>
          ))}
        </SwiperComponent>
      ) : (
        <Skeleton />
      )}
    </div>
  );
}

// 2) One single skeleton placeholder
function Skeleton() {
  return (
    <div
      className="flex items-center justify-center w-[280px] h-[450px]
                    sm:w-[400px] md:w-[300px] lg:w-[500px] "
    >
      <Image
        src="/bouncing-circles.svg"
        width={100}
        height={100}
        alt="Loading"
      />
    </div>
  );
}
