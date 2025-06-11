/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  AnimatePresence,
  m,
  useMotionTemplate,
  useMotionValue,
} from "motion/react";
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  forwardRef,
} from "react";
import { cn } from "@/lib/utils";

interface VanishingInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholders: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  triggerVanish?: boolean; // toggled from parent onSubmit
  onVanishEnd?: () => void;
}

export const VanishingInput = forwardRef<HTMLInputElement, VanishingInputProps>(
  (
    { placeholders, value, onChange, triggerVanish, onVanishEnd, ...props },
    ref
  ) => {
    const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [hasVanished, setHasVanished] = useState(false);
    const [internalValue, setInternalValue] = useState(value); // freeze value

    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const newDataRef = useRef<any[]>([]);

    const radius = 200;
    const [visible, setVisible] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      const { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    const startAnimation = useCallback(() => {
      if (intervalRef.current) return;
      intervalRef.current = setInterval(() => {
        setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
      }, 3000);
    }, [placeholders.length]);

    const handleVisibilityChange = useCallback(() => {
      if (document.visibilityState !== "visible" && intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      } else if (document.visibilityState === "visible") {
        startAnimation();
      }
    }, [startAnimation]);

    useEffect(() => {
      startAnimation();
      document.addEventListener("visibilitychange", handleVisibilityChange);
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        document.removeEventListener(
          "visibilitychange",
          handleVisibilityChange
        );
      };
    }, [startAnimation, handleVisibilityChange]);

    const draw = useCallback(() => {
      const canvas = canvasRef.current;
      if (!canvas || !inputRef.current) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = 800;
      canvas.height = 800;
      ctx.clearRect(0, 0, 800, 800);

      const styles = getComputedStyle(inputRef.current);
      const fontSize = parseFloat(styles.getPropertyValue("font-size"));
      ctx.font = `${fontSize * 2}px ${styles.fontFamily}`;
      ctx.fillStyle = "#FFF";
      ctx.fillText(internalValue, 16, 40);

      const imageData = ctx.getImageData(0, 0, 800, 800).data;
      const newData = [];

      for (let y = 0; y < 800; y++) {
        for (let x = 0; x < 800; x++) {
          const i = (y * 800 + x) * 4;
          if (imageData[i] + imageData[i + 1] + imageData[i + 2] > 0) {
            newData.push({
              x,
              y,
              r: 1,
              color: `rgba(${imageData[i]},${imageData[i + 1]},${
                imageData[i + 2]
              },${imageData[i + 3]})`,
            });
          }
        }
      }

      newDataRef.current = newData;
    }, [internalValue]);

    const animate = (start: number) => {
      const frame = (pos = 0) => {
        requestAnimationFrame(() => {
          const ctx = canvasRef.current?.getContext("2d");
          if (!ctx) return;

          const updated = [];
          for (const p of newDataRef.current) {
            if (p.x < pos) {
              updated.push(p);
              continue;
            }

            if (p.r <= 0) continue;

            p.x += Math.random() > 0.5 ? 1 : -1;
            p.y += Math.random() > 0.5 ? 1 : -1;
            p.r -= 0.05 * Math.random();
            updated.push(p);
          }

          ctx.clearRect(pos, 0, 800, 800);
          updated.forEach(({ x, y, r, color }) => {
            if (x > pos) {
              ctx.beginPath();
              ctx.rect(x, y, r, r);
              ctx.fillStyle = color;
              ctx.strokeStyle = color;
              ctx.stroke();
            }
          });

          newDataRef.current = updated;
          if (updated.length > 0) frame(pos - 8);
          else {
            setAnimating(false);
            setInternalValue(""); // wipe the field locally
            if (onVanishEnd) onVanishEnd(); // tell parent to reset
          }
        });
      };
      frame(start);
    };

    // Trigger vanish animation
    useEffect(() => {
      if (triggerVanish && value && !animating && !hasVanished) {
        setHasVanished(true);
        setAnimating(true);
        setInternalValue(value); // freeze current value
        draw();
        const maxX = newDataRef.current.reduce(
          (prev, curr) => Math.max(prev, curr.x),
          0
        );
        animate(maxX);
      }

      if (!triggerVanish) {
        setHasVanished(false); // allow future animations
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [triggerVanish, draw, value, animating, hasVanished]);

    // Sync internal value with form when not animating
    useEffect(() => {
      if (!animating && !triggerVanish) {
        setInternalValue(value);
      }
    }, [value, animating, triggerVanish]);

    return (
      <div className="relative w-full max-w-xl mx-auto">
        <canvas
          ref={canvasRef}
          className={cn(
            "absolute pointer-events-none text-base transform scale-50 top-[20%] left-4 origin-top-left filter invert pr-20",
            animating && "text-white"
          )}
        />
        <m.div
          style={{
            background: useMotionTemplate`
              radial-gradient(
                ${
                  visible ? radius + "px" : "0px"
                } circle at ${mouseX}px ${mouseY}px,
                #d4af37,
                transparent 80%
              )
            `,
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
          className="group/input rounded-full p-[4px] transition duration-300"
        >
          <input
            {...props}
            ref={(node) => {
              inputRef.current = node!;
              if (typeof ref === "function") ref(node);
              else if (ref) ref.current = node;
            }}
            value={internalValue}
            onChange={(e) => {
              setInternalValue(e.target.value); // update local immediately
              onChange(e); // propagate to RHF
            }}
            autoComplete="off"
            className={cn(
              "w-full text-md z-50 border-none bg-white px-6 text-black h-12 rounded-full focus-visible:ring-[2px] focus-visible:ring-primary-accent focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
              animating ? "text-white" : ""
            )}
          />
        </m.div>
        <div className="absolute inset-0 left-4 flex items-center rounded-full pointer-events-none">
          <AnimatePresence mode="wait">
            {!internalValue && (
              <m.p
                key={`placeholder-${currentPlaceholder}`}
                initial={{ y: 5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -15, opacity: 0 }}
                transition={{ duration: 0.3, ease: "linear" }}
                className="text-md text-slate-500 px-4 text-left truncate w-[calc(100%-2rem)]"
              >
                {placeholders[currentPlaceholder]}
              </m.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  }
);

VanishingInput.displayName = "VanishingInput";
