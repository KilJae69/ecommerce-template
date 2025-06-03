"use client";

import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";

export default function SubscribeInput() {
 const placeholders = [
  "your.email@example.com",               // classic email cue
  "Get 10% off your first order",         // deal tease
  "Nike Air Max 90",                      // popular product
  "Adidas UltraBoost 22",                 // popular product
  "Yeezy Boost 350 V2",                   // hype drop
  "Under Armour HOVR Infinite",           // variant showcase
  "Be first to shop new releases",        // FOMO copy
  "Exclusive member-only restocks",       // VIP tease
];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="">
      
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
