"use client"

import { Option, Vote } from "@prisma/client"
import { Progress } from "@/components/ui/progress"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/shared/icons"
import Typography from "@/components/typography"

interface VoteResultsProps {
  options: Option[]
  votes: Vote[]
}

export function VoteResults({ options, votes }: VoteResultsProps) {
  const totalVotesCount = votes.length

  const optionVoteCounts: Record<number, number> = {}
  votes.forEach((vote) => {
    optionVoteCounts[vote.optionId] = (optionVoteCounts[vote.optionId] || 0) + 1
  })

  const maxVoteCount = Math.max(...Object.values(optionVoteCounts))

  const mostVotedOptionIds = Object.keys(optionVoteCounts).filter(
    (optionId) => optionVoteCounts[Number(optionId)] === maxVoteCount
  )

  return (
    <div className="flex flex-col space-y-4">
      {options.map((option) => {
        const voteCount = optionVoteCounts[option.id] || 0
        const votePercentage =
          totalVotesCount > 0 ? (voteCount / totalVotesCount) * 100 : 0
        const isMostVoted =
          mostVotedOptionIds.includes(String(option.id)) && voteCount > 0

        return (
          <div key={option.id} className="flex flex-col space-y-1">
            <div className="flex flex-1 items-center justify-between">
              <Typography className="text-balance">{option.option}</Typography>

              <VotePercentage
                isMostVoted={isMostVoted}
                mostVotedOptionIds={mostVotedOptionIds}
                totalVotesCount={totalVotesCount}
                votePercentage={votePercentage}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Progress value={votePercentage} />

              <VotePercentage
                isMostVoted={isMostVoted}
                mostVotedOptionIds={mostVotedOptionIds}
                totalVotesCount={totalVotesCount}
                votePercentage={votePercentage}
                isMobile
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

function VotePercentage({
  isMostVoted,
  mostVotedOptionIds,
  totalVotesCount,
  votePercentage,
  isMobile = false,
}: {
  isMostVoted: boolean
  mostVotedOptionIds: string[]
  totalVotesCount: number
  votePercentage: number
  isMobile?: boolean
}) {
  return (
    <Typography
      affects={"removePMargin"}
      className={cn(
        "items-center font-semibold",
        isMobile ? "flex md:hidden" : "hidden md:flex"
      )}
    >
      {isMostVoted && mostVotedOptionIds.length === 1 && (
        <Icons.party className="mr-2 text-amber-500" />
      )}

      {totalVotesCount > 0 ? `${votePercentage.toFixed(0)}%` : `0%`}
    </Typography>
  )
}
