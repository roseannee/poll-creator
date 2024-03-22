import Link from "next/link"

import { fetchPollByIdWithVotes } from "@/lib/data"
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
import { VoteResults } from "@/components/features/result-page/vote-results"
import { CreatePollButton } from "@/components/shared/create-poll-button"

export default async function ResultPage({
  params,
}: {
  params: { id: string }
}) {
  const poll = await fetchPollByIdWithVotes(params.id)

  return (
    <section className="container flex min-h-screen-with-header flex-col items-center justify-center space-y-8 py-4 md:py-10">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardDescription>The question of this poll is:</CardDescription>
          <CardTitle>{poll!.question}</CardTitle>
        </CardHeader>
        <CardContent>
          <VoteResults options={poll!.options} votes={poll!.votes} />
        </CardContent>
        <CardFooter>
          <Link
            href={`/${params.id}/vote`}
            rel="noreferrer"
            className={cn("w-full", buttonVariants({ variant: "secondary" }))}
          >
            Cast your vote
          </Link>
        </CardFooter>
      </Card>

      <CreatePollButton>Make your own poll</CreatePollButton>
    </section>
  )
}
