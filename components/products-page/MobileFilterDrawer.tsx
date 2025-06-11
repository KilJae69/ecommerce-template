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
import { FaXmark } from "react-icons/fa6";

import FilterPanel from "./FilterPanel";

export default function MobileFilterDrawer() {
  return (
    <Drawer>
      <DrawerTrigger>Filters</DrawerTrigger>
      <DrawerContent className="bg-white px-4 pb-4">
        <DrawerHeader className="flex border-b border-dashed pb-4 mb-4 flex-row text-lg justify-between items-center">
          <DrawerTitle>Filters</DrawerTitle>
          <DrawerClose className="bg-primary text-white rounded-full p-1">
            <FaXmark />
          </DrawerClose>
        </DrawerHeader>

        <FilterPanel />

        {/* <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>Cancel</DrawerClose>
        </DrawerFooter> */}
      </DrawerContent>
    </Drawer>
  );
}
