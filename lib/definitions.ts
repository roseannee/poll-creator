import { z } from "zod"

export const PollSchema = z.object({
  question: z.string().min(1, {
    message: "Question is required.",
  }),
  options: z.array(
    z.string().min(1, {
      message: "Option is required.",
    })
  ),
})

export const VoteSchema = z.object({
  pollId: z.string(),
  optionId: z.number(),
})
