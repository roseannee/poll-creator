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

export default function SharePage({ params }: { params: { id: string } }) {
  return (
    <section className="container flex min-h-[calc(100vh-65px)] flex-col items-center justify-center space-y-8 pb-8 pt-6 md:py-10">
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle>Created 🎉</CardTitle>
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
