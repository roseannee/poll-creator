import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CreatePollForm } from "@/components/features/create-page/create-poll-form"

export default function CreatePage() {
  return (
    <section className="container py-4 md:py-10">
      <Card className="mx-auto w-full max-w-md">
        <CardHeader>
          <CardTitle>Poll creator</CardTitle>
          <CardDescription>
            Create a new survey in a few seconds.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CreatePollForm />
        </CardContent>
      </Card>
    </section>
  )
}
