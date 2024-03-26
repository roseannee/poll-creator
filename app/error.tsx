"use client"

import { useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/shared/icons"
import Typography from "@/components/typography"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="container flex min-h-screen-with-header flex-col items-center justify-center space-y-6 py-4 md:py-10">
      <Icons.error />

      <div className="flex flex-col items-center space-y-2">
        <Typography variant="h2">Something went wrong!</Typography>

        <Button variant="outline" onClick={() => reset()} className="w-max">
          Try again
        </Button>
      </div>
    </section>
  )
}
