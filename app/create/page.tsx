import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CreateForm } from "@/components/poll-forms/create-form"

export default function CreatePage() {
  return (
    <section className="container pb-8 pt-6 md:py-10">
      <Card className="mx-auto max-w-md">
        <CardHeader>
          <CardTitle>Poll creator</CardTitle>
          <CardDescription>
            Create a new survey in a few seconds.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CreateForm />
        </CardContent>
      </Card>
    </section>
  )
}
