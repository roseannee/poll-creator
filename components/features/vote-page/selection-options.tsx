"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { sendingVoteAtom } from "@/store"
import { Option } from "@prisma/client"
import { useAtom } from "jotai"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export function SelectionOptions({ options }: { options: Option[] }) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [optionId, setOptionId] = useState(0)
  const [option, setOption] = useState("")

  const [sendingVote] = useAtom(sendingVoteAtom)

  useEffect(() => {
    const params = new URLSearchParams(searchParams)

    if (optionId) {
      params.set("optionId", optionId.toString())
    } else {
      params.delete("optionId")
    }

    router.replace(`?${params.toString()}`)
  }, [searchParams, optionId, router])

  const handleValueChange = (newOption: string) => {
    const selectedOption = options.find((opt) => opt.option === newOption)
    if (selectedOption) {
      handleOptionSelect(selectedOption.id, selectedOption.option)
    }
  }

  const handleOptionSelect = (id: number, option: string) => {
    setOptionId(id)
    setOption(option)
  }

  return (
    <ToggleGroup
      type="single"
      size="lg"
      value={option}
      onValueChange={handleValueChange}
      disabled={sendingVote}
      className="flex flex-col"
    >
      {options.map(({ option, id }) => (
        <ToggleGroupItem key={id} value={option} className="size-full min-h-10">
          {option}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
