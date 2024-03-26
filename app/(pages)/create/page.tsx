import { Metadata } from "next"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CreatePollForm } from "@/components/features/create-page/create-poll-form"

export const metadata: Metadata = {
  title: "Create poll",
}

export default function CreatePage() {
  return (
    // TODO maybe 'flex min-h-screen-with-header items-center'
    <section className="container py-4 md:py-10">
      <Card className="mx-auto w-full max-w-md">
        <CardHeader>
          <CardTitle>Create a poll</CardTitle>
          <CardDescription>
            Effortlessly craft your own poll just in seconds.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CreatePollForm />
        </CardContent>
      </Card>
    </section>
  )
}
