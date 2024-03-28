"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { m } from "framer-motion"

import { progressVariants } from "@/lib/framer-variants"
import { cn } from "@/lib/utils"

const MIndicator = m(ProgressPrimitive.Indicator)

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-1 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
  >
    <MIndicator
      initial="hidden"
      animate="visible"
      variants={progressVariants({ x: value })}
      className="size-full flex-1 bg-primary transition-all"
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
