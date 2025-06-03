"use client";

import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";

export default function SearchInput() {
  const placeholders = [
    "Nike Air Jordan",
    "UA Infinite Elite Team",
    "Fresh Foam X 1080v14",
    "Under Armour",
    "Nike Vomero 18",
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
