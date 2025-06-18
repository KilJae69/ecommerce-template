// app/components/InteractiveHoverButton.tsx
"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type InteractiveHoverButtonProps =
  // all the normal button attributes...
  React.ButtonHTMLAttributes<HTMLButtonElement> & // plus optional href/external so you can pass those without TS errors:
  {
    href?: string;
    external?: boolean;
     icon?: React.ReactNode;
  dark?:boolean;
  invert?:boolean
  } & // and also allow any anchor attributes in your {...props} spread:
    React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className, href, external = false,icon,dark = false,invert=false, ...props }, ref) => {
  // your existing markup exactly, unchanged:
   const TheIcon = icon ?? <ArrowRight />;
  if (href && !external)
    return (
      <Link
        href={href}
        className={cn(
          "group inline-block relative w-auto cursor-pointer text-lg overflow-hidden rounded-full border border-primary-accent bg-background p-4 px-6 text-center font-semibold",
          className,
          dark && "border-primary",
          invert && "bg-primary-accent"
        )}
      >
        <div className="flex justify-center items-center gap-2">
          <div className={cn("size-3 rounded-full bg-primary-accent transition-all duration-300 group-hover:scale-[100.8]",
            dark && "bg-primary",
             invert && "bg-white"
          )}></div>
          <span className={cn("inline-block tracking-widest transition-all text-primary-accent duration-300 group-hover:translate-x-12 group-hover:opacity-0",
             dark && "text-primary",
              invert && "text-white"
          )}>
            {children}
          </span>
        </div>
        <div className={cn("absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100",
           invert && "text-primary-accent"
        )}>
          <span className="tracking-widest">{children}</span>
          {TheIcon}
        </div>
      </Link>
    );

  if (href && external)
    return (
      <a
        href={href}
        target="__blank"
        rel="noreferrer noopener"
        className={cn(
          "group inline-block relative w-auto cursor-pointer text-lg overflow-hidden rounded-full border border-primary-accent bg-background p-4 px-6 text-center font-semibold",
          className,
           dark && "border-primary",
            invert && "bg-primary-accent"
        )}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        <div className="flex items-center gap-2">
          <div className={cn("size-3 rounded-full bg-primary-accent transition-all duration-300 group-hover:scale-[100.8]",
              dark && "bg-primary",
                invert && "bg-white"
          )}></div>
          <span className={cn("inline-block tracking-widest transition-all text-primary-accent duration-300 group-hover:translate-x-12 group-hover:opacity-0",
             dark && "text-primary",
              invert && "text-white"
          )}>
            {children}
          </span>
        </div>
        <div className={cn("absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100",
           invert && "text-primary-accent"
        )}>
          <span className="tracking-widest">{children}</span>
          {TheIcon}
        </div>
      </a>
    );

  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-auto cursor-pointer text-lg overflow-hidden rounded-full border border-primary-accent bg-background p-4 px-6 text-center font-semibold",
        className,
         dark && "border-primary",
          invert && "bg-primary-accent"
      )}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      <div className="flex items-center justify-center gap-2">
        <div className={cn("size-3 rounded-full bg-primary-accent transition-all duration-300 group-hover:scale-[100.8]",
            dark && "bg-primary",
             invert && "bg-white"
        )}></div>
        <span className={cn("inline-block tracking-widest transition-all text-primary-accent duration-300 group-hover:translate-x-12 group-hover:opacity-0",
           dark && "text-primary",

             invert && "text-white"
        )}>
          {children}
        </span>
      </div>
      <div className={cn("absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100",
         invert && "text-primary-accent"
      )}>
        <span className="tracking-widest">{children}</span>
        {TheIcon}
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
