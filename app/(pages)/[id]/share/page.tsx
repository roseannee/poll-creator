import { Metadata } from "next"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CopyToClipboard } from "@/components/features/share-page/copy-to-clipboard"
import { CreatePollButton } from "@/components/shared/create-poll-button"
import { Icons } from "@/components/shared/icons"

export const metadata: Metadata = {
  title: "Share poll",
}

export default function SharePage({ params }: { params: { id: string } }) {
  return (
    <section className="container flex min-h-screen-with-header flex-col items-center justify-center space-y-8 py-4 md:py-10">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center">
            Created! <Icons.party className="ml-2 text-amber-500" />
          </CardTitle>
          <CardDescription className="text-balance">
            Poll created successfully! Copy the link below to share it.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CopyToClipboard pollId={params.id} />
        </CardContent>
        <CardFooter>
          <Link
            href={`/${params.id}/vote`}
            rel="noreferrer"
            className={cn("w-full", buttonVariants())}
          >
            View poll
          </Link>
        </CardFooter>
      </Card>

      <CreatePollButton>Create a new poll</CreatePollButton>
    </section>
  )
}
