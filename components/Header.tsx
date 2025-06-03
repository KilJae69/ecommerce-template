// app/components/Header.tsx
"use client";

import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { useScroll, useMotionValueEvent, m } from "motion/react";

import navLinks from "@/constants/navData";
import { Container } from "./shared/Container";

import SearchInput from "./shared/SearchInput";
import NavModal from "./NavModal";
import CartModal from "./CartModal";
import { FaRegUser } from "react-icons/fa";
import { ScrollProgress } from "./ui/scroll-progress";

// 1) hook to detect a CSS media-query
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    console.log("firing");
    const mql = window.matchMedia(query);
    const onChange = (e: MediaQueryListEvent) => setMatches(e.matches);
    mql.addEventListener("change", onChange);
    setMatches(mql.matches);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

export default function Header() {
  // detect md breakpoint
  const isMdUp = useMediaQuery("(min-width: 768px)");

  // your existing scroll logic
  const [headerState, setHeaderState] = useState<"top" | "hidden" | "small">(
    "top"
  );
  const { scrollY } = useScroll();
  

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest === 0) {
      setHeaderState("top");
    } else if (latest > previous && latest > 50) {
      setHeaderState("hidden");
    } else if (latest < previous) {
      setHeaderState("small");
    }
  });

  // MD-up version: animate whole header & padding
  if (isMdUp) {
    const DEFAULT_PY = 20;
    const REDUCED_PY = 10;

    return (
      <m.header
        initial={{ y: -150 }}
        animate={{ y: headerState === "hidden" ? -44 : 0 }}
        transition={{ type: "tween", duration: 0.2 }}
        className="fixed z-[1000] top-0 left-0 right-0"
      >
        {/* Top Header Div */}
        <div className="bg-primary w-full hidden md:block text-white py-1">
          <Container>
            <div className="flex justify-between items-center">
              <nav>
                <ul className="flex gap-4 text-sm capitalize">
                  {navLinks.map((link, idx) => (
                    <Fragment key={link.href}>
                      <li className="relative group">
                        <Link
                          href={link.href}
                          className="group-hover:text-primary-accent whitespace-nowrap"
                        >
                          {link.title}
                        </Link>
                        <span className="absolute w-0 h-[2px] bg-primary-accent bottom-0 left-0 group-hover:w-full transition-all duration-300" />
                      </li>
                      {idx < navLinks.length - 1 && (
                        <div className="bg-white/40 w-[2px]" />
                      )}
                    </Fragment>
                  ))}
                </ul>
              </nav>
             
            </div>
          </Container>
        </div>

        {/* Bottom Header Div */}
        <m.div
          className="relative  border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] border-b border-primary/30"
          initial={{ paddingTop: DEFAULT_PY, paddingBottom: DEFAULT_PY }}
          animate={{
            paddingTop: headerState === "hidden" ? REDUCED_PY : DEFAULT_PY,
            paddingBottom: headerState === "hidden" ? REDUCED_PY : DEFAULT_PY,
          }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          <Container>
            <div className="flex items-center justify-between gap-8">
              <div className="md:hidden">
                <NavModal />
              </div>
              <Link href="/">
                <div className="relative w-[140px] h-[80px]">
                  <Image
                    src="/logo.png"
                    className="object-contain"
                    priority
                   
                    fill
                    alt="logo"
                  />
                </div>
              </Link>
              <div className="hidden md:block flex-1">
                <SearchInput />
              </div>

              <div className="flex items-center gap-4">
                <FaRegUser className="size-6 md:size-8" />
                <CartModal />
              </div>
            </div>
            <div className="md:hidden mt-3">
              <SearchInput />
            </div>
          </Container>

          <ScrollProgress
            className={`top-[181px]  ${
              headerState === "hidden" ? "md:top-[101px]" : "md:top-[121px]"
            }`}
          />
        </m.div>
      </m.header>
    );
  }

  // < md version: static header, only animate the mobile search bar
  return (
    <header className="fixed z-100 top-0 left-0 right-0">
      {/* we still render your two header divs exactly as before */}

      <div className="relative z-10  border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] border-b border-primary/30">
        <Container>
          <div className="flex items-center justify-between gap-8">
            <div className="md:hidden">
              <NavModal />
            </div>
            <div className="relative w-[140px] h-[80px]">
              <Image
                src="/logo.png"
                className="object-contain"
                fill
                alt="logo"
              />
            </div>
            <div className="hidden md:block flex-1">
              <SearchInput />
            </div>

            <div className="flex items-center gap-4">
              <FaRegUser className="size-6 md:size-8" />
              <CartModal />
            </div>
          </div>
        </Container>
      </div>
      {/* THIS is the mobile-only search you wanted to slide */}
      <m.div
        initial={{ y: 0 }}
        animate={{
          y: headerState === "hidden" ? -100 : 0,
        }}
        transition={{ type: "tween", duration: 0.2 }}
        className="md:hidden py-3  border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] border-b border-primary/30"
      >
        <Container>
          <SearchInput />
        </Container>
      </m.div>
      <ScrollProgress
        className={` ${
          headerState === "hidden" ? "top-[80px]" : "top-[153px]"
        }`}
      />
    </header>
  );
}
