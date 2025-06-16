import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  CalendarIcon,
  PackageIcon,
  PercentIcon,
  TruckIcon,
} from "lucide-react";
import { format, addDays } from "date-fns";

export default function ProductInfoTabs() {
  const today = new Date();
  const arrivalMin = format(addDays(today, 10), "dd MMMM yyyy");
  const arrivalMax = format(addDays(today, 12), "dd MMMM yyyy");

  return (
    <div>
      <h2 className="text-xl md:text-3xl font-semibold mb-6">Product Info</h2>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-6 space-x-4">
          <TabsTrigger
            value="overview"
            className="data-[state=active]:border-b-2 data-[state=active]:border-primary-accent text-base font-medium"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="shipment"
            className="data-[state=active]:border-b-2 data-[state=active]:border-primary-accent text-base font-medium"
          >
            Shipment details
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4 text-gray-700">
          <p>
            This is a placeholder product description designed to showcase key
            selling points in a natural and engaging format. It represents how
            real product content might sound once finalized, helping users
            visualize features and benefits clearly.
          </p>
          <p>
            The structure highlights comfort, performance, and usability — ideal
            for dynamic lifestyles or everyday use. Specific product details
            will appear here once content is fully updated and tailored for each
            item.
          </p>
          <div>
            <h3 className="font-semibold mt-4">Note*</h3>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
              est eum magnam doloremque, at adipisci debitis, similique dolores
              ipsa unde necessitatibus vero quibusdam nostrum numquam!
            </p>
          </div>
        </TabsContent>

        <TabsContent value="shipment" className="space-y-6 text-gray-700">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <PercentIcon className="w-6 h-6 text-primary-accent" />
              <div>
                <p className="text-sm text-muted-foreground">Discount</p>
                <p className="font-medium">{"> $200 Disc 10%"}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CalendarIcon className="w-6 h-6 text-primary-accent" />
              <div>
                <p className="text-sm text-muted-foreground">Delivery Time</p>
                <p className="font-medium">6 – 12 Working days</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <PackageIcon className="w-6 h-6 text-primary-accent" />
              <div>
                <p className="text-sm text-muted-foreground">Package</p>
                <p className="font-medium">Regular Premium Box</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <TruckIcon className="w-6 h-6 text-primary-accent" />
              <div>
                <p className="text-sm text-muted-foreground">
                  Estimated Arrival
                </p>
                <p className="font-medium">
                  {arrivalMin} – {arrivalMax}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mt-4">Note*</h3>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
              est eum magnam doloremque, at adipisci debitis, similique dolores
              ipsa unde necessitatibus vero quibusdam nostrum numquam!
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
