"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { AnimatePresence, m } from "framer-motion"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { PollSchema } from "@/lib/definitions"
import { item } from "@/lib/framer-variants"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useToast } from "@/components/ui/use-toast"

import { Icons } from "./icons"
import { LoadingButton } from "./loading-button"
import Typography from "./typography"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Toaster } from "./ui/toaster"

const MFormItem = m(FormItem)

const MIN_OPTIONS = 2
const MAX_OPTIONS = 5

type FormValues = z.infer<typeof PollSchema>

export function CreatePollForm() {
  const router = useRouter()

  const { toast: errorToast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(PollSchema),
    defaultValues: {
      question: "",
      options: Array(MIN_OPTIONS).fill(""),
    },
  })

  const { watch, setValue, handleSubmit, control, reset } = form
  const watchedOptions = watch("options")

  const handleAddOption = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()

    if (watchedOptions.length < MAX_OPTIONS) {
      setValue("options", [...watchedOptions, ""])
    }
  }

  const handleRemoveOption = (
    indexToRemove: number,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()

    if (watchedOptions.length > MIN_OPTIONS) {
      setValue(
        "options",
        watchedOptions.filter((_, index) => index !== indexToRemove)
      )
    }
  }

  const onSubmit = async (values: FormValues) => {
    setIsLoading(true)

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
      errorToast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: `There was a problem with your request: ${error}`,
      })
    } finally {
      reset()
      setIsLoading(false)
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={control}
            name="question"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter the question to discuss:</FormLabel>
                <FormControl>
                  <Input placeholder="ex. What color is the sky?" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col space-y-2">
            <FormLabel>Enter options to choose:</FormLabel>

            <AnimatePresence initial={false}>
              {watchedOptions.map((_, index) => (
                <FormField
                  key={index}
                  control={control}
                  name={`options.${index}`}
                  render={({ field }) => (
                    <MFormItem
                      initial={"hidden"}
                      animate={"visible"}
                      exit={"exit"}
                      variants={item}
                    >
                      <FormControl>
                        <div className="flex space-x-1 md:space-x-2">
                          <Input
                            placeholder={`option ${index + 1}`}
                            {...field}
                          />
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={(event) =>
                              handleRemoveOption(index, event)
                            }
                            disabled={watchedOptions.length <= 2}
                          >
                            <Icons.delete />
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </MFormItem>
                  )}
                />
              ))}
            </AnimatePresence>
          </div>

          <Button
            variant="outline"
            className="!mt-4"
            onClick={(event) => handleAddOption(event)}
            disabled={watchedOptions.length >= 5}
          >
            <Icons.add className="mr-2" />
            Add new option
          </Button>

          <Typography affects="lead" className="text-balance text-center">
            {`There have been `}
            <span className="font-bold text-primary">
              {watchedOptions.length} options
            </span>
            {` added`}
          </Typography>

          <LoadingButton
            type="submit"
            disabled={isLoading}
            isLoading={isLoading}
          >
            Save the poll
          </LoadingButton>
        </form>
      </Form>

      <Toaster />
    </>
  )
}
