"use client";

// import { useHeaderScroll } from "@/lib/hooks/useHeaderScroll";
import { Container } from "../shared/Container";

import { m } from "motion/react";


import { ReactNode, } from "react";
import FiltersSidebar from "@/components/products-page/FiltersSidebar";
import MobileFiltersBar from "./MobileFiltersBar";



export default function CollectionsPageClientWrapper({children,}:{children:ReactNode; }) {
//   const { positions } = useHeaderScroll();
//   useEffect(() => {
//   if (typeof window !== "undefined") {
//     // Disable automatic scroll restoration behavior
//     window.history.scrollRestoration = "manual";
//     window.scrollTo(0, 0);
//   }
// }, []);
  
  return (
    <>
      <Container className="relative">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Desktop Sticky Sidebar */}
          <aside className="hidden md:block md:w-64 lg:w-72">
            <m.div
              className="sticky   overflow-y-auto px-4 py-4 rounded-md"
              // animate={{
              //   top: positions.desktop.totalHeight,
              //   height: `calc(100vh - ${positions.desktop.totalHeight}px)`,
              // }}
              transition={{ type: "tween", duration: 0.2 }}
            >
              <FiltersSidebar />
            </m.div>
          </aside>

          {/* Main Content */}
          <div className="w-full pb-20 md:pb-0">
            

            {children}
          </div>
        </div>
      </Container>

      {/* Mobile Fixed Bar */}
      <div className="md:hidden">
        <MobileFiltersBar />
      </div>
    </>
  );
}
