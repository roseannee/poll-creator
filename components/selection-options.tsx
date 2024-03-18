"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { sendingVoteAtom } from "@/store"
import { Option } from "@prisma/client"
import { useAtom } from "jotai"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

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
      params.delete("id")
    }

    router.replace(`?${params.toString()}`)
  }, [searchParams, optionId, router])

  const handleValueChange = (newOption: string) => {
    if (!sendingVote) {
      const selectedOption = options.find((opt) => opt.option === newOption)
      if (selectedOption) {
        handleOptionSelect(selectedOption.id, selectedOption.option)
      }
    }
  }

  const handleOptionSelect = (id: number, option: string) => {
    setOptionId(id)
    setOption(option)
  }

  return (
    <TooltipProvider>
      <ToggleGroup
        type="single"
        size="lg"
        value={option}
        onValueChange={handleValueChange}
        className="flex flex-col"
      >
        {options.map(({ option, id }) => (
          <Tooltip key={id}>
            <TooltipTrigger asChild>
              <ToggleGroupItem value={option} className="w-full truncate">
                {option}
              </ToggleGroupItem>
            </TooltipTrigger>
            <TooltipContent className="w-full max-w-lg">
              {option}
            </TooltipContent>
          </Tooltip>
        ))}
      </ToggleGroup>
    </TooltipProvider>
  )
}
