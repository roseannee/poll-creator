import { fetchPollById } from "@/lib/data"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { SelectionOptions } from "@/components/selection-options"
import { SendChoiceButton } from "@/components/send-choice-button"

export default async function VotePage({ params }: { params: { id: string } }) {
  const poll = await fetchPollById(params.id)

  return (
    <section className="container flex min-h-[calc(100vh-65px)] items-center justify-center pb-8 pt-6 md:py-10">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardDescription>The question of this poll is:</CardDescription>
          <CardTitle>{poll!.question}</CardTitle>
        </CardHeader>
        <CardContent>
          <SelectionOptions options={poll!.options} />
        </CardContent>
        <CardFooter>
          <SendChoiceButton pollId={params.id} />
        </CardFooter>
      </Card>
    </section>
  )
}