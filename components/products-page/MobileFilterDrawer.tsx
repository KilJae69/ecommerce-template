import {
  Drawer,
  DrawerClose,
  DrawerContent,
  // DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
// import { Button } from "../ui/button";
import { FaFilter, FaXmark } from "react-icons/fa6";

import FilterPanel from "./FilterPanel";

export default function MobileFilterDrawer() {
  return (
    <Drawer>
      <DrawerTrigger className="bg-primary text-lg flex items-center gap-2 px-4 text-white  rounded-full">
        <FaFilter />
        Filters
      </DrawerTrigger>
      <DrawerContent className="bg-white  pb-4">
        <DrawerHeader className="flex border-b border-dashed pb-4 mb-4 flex-row text-lg justify-between items-center">
          <DrawerTitle>Filters</DrawerTitle>
          <DrawerClose className="bg-primary text-white rounded-full p-1">
            <FaXmark />
          </DrawerClose>
        </DrawerHeader>
        <div className="px-4 overflow-y-auto">
          <FilterPanel />
        </div>

        {/* <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>Cancel</DrawerClose>
        </DrawerFooter> */}
      </DrawerContent>
    </Drawer>
  );
}
