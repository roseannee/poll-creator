import { Metadata } from "next"

import { fetchPollById } from "@/lib/data"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { SelectionOptions } from "@/components/features/vote-page/selection-options"
import { SendChoiceButton } from "@/components/features/vote-page/send-choice-button"

export const metadata: Metadata = {
  title: "Vote on poll",
}

export default async function VotePage({ params }: { params: { id: string } }) {
  const poll = await fetchPollById(params.id)

  return (
    <section className="container flex min-h-screen-with-header items-center justify-center py-4 md:py-10">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>{poll.question}</CardTitle>
        </CardHeader>
        <CardContent>
          <SelectionOptions options={poll.options} />
        </CardContent>
        <CardFooter>
          <SendChoiceButton pollId={params.id} />
        </CardFooter>
      </Card>
    </section>
  )
}
