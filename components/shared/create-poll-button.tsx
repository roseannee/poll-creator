import Link from "next/link"

import { cn } from "@/lib/utils"

import { buttonVariants } from "../ui/button"
import { Icons } from "./icons"

interface CreatePollButtonProps {
  children: React.ReactNode
  variant?: string
  replaceMobileWithIcon?: boolean
}

export function CreatePollButton({
  children,
  variant = "outline",
  replaceMobileWithIcon = false,
}: CreatePollButtonProps) {
  return (
    <Link
      href="/create"
      rel="noreferrer"
      className={cn(
        replaceMobileWithIcon &&
          "size-10 !p-0 md:h-10 md:w-auto md:!px-4 md:!py-2",
        buttonVariants({
          variant: variant as keyof typeof buttonVariants,
        })
      )}
    >
      <span className={replaceMobileWithIcon ? "hidden md:flex" : undefined}>
        {children}
      </span>

      {replaceMobileWithIcon && <Icons.add className="!size-5 md:hidden" />}
    </Link>
  )
}
