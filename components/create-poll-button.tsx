import Link from "next/link"

import { buttonVariants } from "./ui/button"

interface CreatePollButtonProps {
  children: React.ReactNode
  isHeader?: boolean
}

export function CreatePollButton({
  children,
  isHeader = false,
}: CreatePollButtonProps) {
  return (
    <Link
      href="/create"
      rel="noreferrer"
      className={buttonVariants({ variant: isHeader ? "ghost" : "outline" })}
    >
      {children}
    </Link>
  )
}
