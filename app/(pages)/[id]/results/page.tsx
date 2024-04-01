import { Metadata } from "next"
import Link from "next/link"

import { fetchPollByIdWithVotes, fetchPollQuestionById } from "@/lib/data"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { VoteResults } from "@/components/features/results-page/vote-results"
import { CreatePollButton } from "@/components/shared/create-poll-button"
import { RefreshButton } from "@/components/shared/refresh-button"

type Props = { params: { id: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const pollQuestion = await fetchPollQuestionById(params.id)

  return {
    title: pollQuestion?.question,
  }
}

export default async function ResultsPage({ params }: Props) {
  const poll = await fetchPollByIdWithVotes(params.id)

  return (
    <section className="container flex min-h-screen-with-header flex-col items-center justify-center space-y-8 py-4 md:py-10">
      <Card className="relative w-full max-w-md">
        <CardHeader>
          <CardTitle className="max-w-[calc(100%_-_40px)] text-balance">
            {poll.question}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <VoteResults options={poll.options} votes={poll!.votes} />
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

        <RefreshButton />
      </Card>

      <CreatePollButton>Create a new poll</CreatePollButton>
    </section>
  )
}
