"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
import { useMotionTemplate, useMotionValue, m } from "motion/react"

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  const radius = 200 // change this to increase the rdaius of the hover effect
  const [visible, setVisible] = React.useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect()

    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }
  return (
    <m.div
      style={{
        background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          #d4af37,
          transparent 80%
        )
      `,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="group/input rounded-lg p-[4px] transition duration-300"
    >
      <input
        type={type}
        className={cn(
          `shadow-input flex h-12 w-full rounded-md border-none bg-white px-3 py-3 lg:text-md text-black transition duration-400 group-hover/input:shadow-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-slate-800 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 `,
          className,
        )}
        ref={ref}
        {...props}
      />
    </m.div>
  )
})
Input.displayName = "Input"

export { Input }
