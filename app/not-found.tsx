import { Metadata } from "next"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/shared/icons"
import Typography from "@/components/typography"

export default function NotFound() {
  return (
    <section className="container flex min-h-screen-with-header flex-col items-center justify-center space-y-6 py-4 md:py-10">
      <Icons.notFound />

      <Typography variant="h2">Not Found</Typography>

      <div className="flex flex-col items-center space-y-2">
        <Typography>Could not find requested resource</Typography>

        <Link
          href="/"
          rel="noreferrer"
          className={buttonVariants({ variant: "link" })}
        >
          Return Home
        </Link>
      </div>

      <title>Poll Not Found | Poll Creator</title>
    </section>
  )
}
