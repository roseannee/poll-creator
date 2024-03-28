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
    <section className="container py-4 md:py-10 ">
      <Card className="mx-auto w-full max-w-md">
        <CardHeader>
          <CardTitle>Create a poll</CardTitle>
          <CardDescription>
            Easily create your poll in just a few seconds.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CreatePollForm />
        </CardContent>
      </Card>
    </section>
  )
}
