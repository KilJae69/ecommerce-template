"use client";
import React, { ReactElement } from "react";

import { cn } from "@/lib/utils";
import { Button } from "../ui/moving-border";

export function MovingBorderBadge({
  text,
  icon,
  className,
  duration = 5000
}: {
  text: string;
  icon?: ReactElement;
  className?: string;
  duration?:number
}) {
  return (
    <Button
      as={"div"}
      duration={duration}
      borderRadius="1.75rem"
      className={cn("bg-primary flex items-center justify-center text-accent text-white py-2 px-4 text-lg  font-semibold  border-white ",className)}
    >
      {icon} {text}
    </Button>
  );
}
