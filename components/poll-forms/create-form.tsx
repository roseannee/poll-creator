"use client"

import React from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { PollSchema } from "@/lib/poll-shema"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useToast } from "@/components/ui/use-toast"

import { Icons } from "../icons"
import Typography from "../typography"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Toaster } from "../ui/toaster"

export function CreateForm() {
  const router = useRouter()
  const [isSubmitButtonLoading, setIsSubmitButtonLoading] =
    React.useState(false)
  const { toast: errorToast } = useToast()

  const form = useForm<z.infer<typeof PollSchema>>({
    resolver: zodResolver(PollSchema),
    defaultValues: {
      question: "",
      options: ["", "", ""],
    },
  })

  async function onSubmit(values: z.infer<typeof PollSchema>) {
    setIsSubmitButtonLoading(true)

    try {
      const response = await fetch("/api/create-poll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      const data = await response.json()
      router.push(`/${data.id}/share`)
    } catch (error) {
      console.error(error)
      errorToast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      })
    } finally {
      // form.reset()
      setIsSubmitButtonLoading(false)
    }
  }

  const { watch, setValue } = form
  const options = watch("options")

  const addOption = () => {
    if (options.length < 5) {
      setValue("options", [...options, ""])
    }
  }

  const removeOption = (indexToRemove: number) => {
    if (options.length > 2) {
      setValue(
        "options",
        options.filter((_, index) => index !== indexToRemove)
      )
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="question"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter the poll question to discuss:</FormLabel>
                <FormControl>
                  <Input placeholder="ex. What color is the sky?" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div role="group" className="flex flex-col space-y-2">
            <FormLabel>Enter poll options to choose:</FormLabel>

            {options.map((_, index) => (
              <FormField
                key={index}
                control={form.control}
                name={`options.${index}`}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div role="group" className="flex space-x-2">
                        <Input placeholder={`option ${index + 1}`} {...field} />
                        <Button
                          variant={"outline"}
                          size={"icon"}
                          onClick={() => removeOption(index)}
                          disabled={options.length <= 2}
                        >
                          <Icons.delete className="size-5" />
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>

          <Button
            variant={"outline"}
            className="!mt-4"
            onClick={() => addOption()}
            disabled={options.length >= 5}
          >
            <Icons.add className="mr-2 size-5" />
            Add new option
          </Button>

          <Typography affects={"lead"} className="text-center">
            {`There have been `}
            <span className="font-bold text-primary">
              {options.length} options
            </span>
            {` added`}
          </Typography>

          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitButtonLoading}
          >
            {isSubmitButtonLoading ? (
              <>
                <Icons.loader className="mr-2 size-4 animate-spin" />
                Please wait
              </>
            ) : (
              "Save poll"
            )}
          </Button>
        </form>
      </Form>

      <Toaster />
    </>
  )
}
