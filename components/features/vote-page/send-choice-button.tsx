"use client"

import React, { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { sendingVoteAtom } from "@/store"
import { useAtom } from "jotai"

import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"
import { LoadingButton } from "@/components/shared/loading-button"

export function SendChoiceButton({ pollId }: { pollId: string }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const optionId = parseInt(searchParams.get("optionId") ?? "-1")

  const [isLoading, setIsLoading] = useState(false)
  const { toast: errorToast } = useToast()

  const [, setSendingVote] = useAtom(sendingVoteAtom)

  const onSubmit = async (event: React.PointerEvent) => {
    event.preventDefault()

    setIsLoading(true)
    setSendingVote(true)

    const values = { pollId, optionId }

    try {
      await fetch("/api/send-choice", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      router.push(`/${pollId}/results`)
    } catch (error) {
      errorToast({
        title: "Uh oh! Something went wrong.",
        description: `There was a problem with your request: ${error}`,
      })
    } finally {
      setIsLoading(false)
      setSendingVote(false)
    }
  }

  return (
    <>
      <LoadingButton
        onPointerUp={onSubmit}
        disabled={isLoading || optionId === -1}
        isLoading={isLoading}
      >
        Submit your vote
      </LoadingButton>

      <Toaster />
    </>
  )
}
