import { Metadata } from "next"

import { fetchPollById, fetchPollQuestionById } from "@/lib/data"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { SelectionOptions } from "@/components/features/vote-page/selection-options"
import { SendChoiceButton } from "@/components/features/vote-page/send-choice-button"
import { Icons } from "@/components/shared/icons"

type Props = { params: { id: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const pollQuestion = await fetchPollQuestionById(params.id)

  return {
    title: pollQuestion?.question,
  }
}

export default async function VotePage({ params }: Props) {
  const poll = await fetchPollById(params.id)

  return (
    <section className="container flex min-h-screen-with-header items-center justify-center py-4 md:py-10">
      <Card className="relative w-full max-w-md">
        <CardHeader>
          <CardTitle className="max-w-[calc(100%_-_24px)] text-balance">
            {poll.question}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <SelectionOptions options={poll.options} />
        </CardContent>
        <CardFooter>
          <SendChoiceButton pollId={params.id} />
        </CardFooter>

        <Icons.vote className="absolute right-6 top-6" />
      </Card>
    </section>
  )
}
