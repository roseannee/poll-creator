import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CopyToClipboard } from "@/components/copy-to-clipboard"
import { CreatePollButton } from "@/components/create-poll-button"
import { Icons } from "@/components/icons"

export default function SharePage({ params }: { params: { id: string } }) {
  return (
    <section className="container flex min-h-screen-with-header flex-col items-center justify-center space-y-8 pb-8 pt-6 md:py-10">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex">
            Created <Icons.party className="ml-2 text-amber-500" />
          </CardTitle>
          <CardDescription>
            Your survey has been successfully created. Copy the link below to
            share it.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CopyToClipboard pollId={params.id} />
        </CardContent>
        <CardFooter className="justify-center">
          <Link
            href={`/${params.id}/vote`}
            rel="noreferrer"
            className={buttonVariants()}
          >
            Open poll
          </Link>
        </CardFooter>
      </Card>

      <CreatePollButton>Make another poll</CreatePollButton>
    </section>
  )
}
