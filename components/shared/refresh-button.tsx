"use client"

import { useRouter } from "next/navigation"

import { Button } from "../ui/button"
import { Icons } from "./icons"

export function RefreshButton() {
  const { refresh } = useRouter()

  return (
    <Button
      variant="ghost"
      size="icon"
      className="absolute right-6 top-4 z-50"
      onClick={() => refresh()}
    >
      <Icons.refresh />
    </Button>
  )
}
