import Link from "next/link"

import { cn } from "@/lib/utils"

import { buttonVariants } from "./ui/button"

interface CreatePollButtonProps {
  children: React.ReactNode
  variant?: string
}

export function CreatePollButton({
  children,
  variant = "outline",
}: CreatePollButtonProps) {
  return (
    <Link
      href="/create"
      rel="noreferrer"
      className={cn(
        "min-w-max",
        buttonVariants({
          variant: variant as keyof typeof buttonVariants,
        })
      )}
    >
      {children}
    </Link>
  )
}
