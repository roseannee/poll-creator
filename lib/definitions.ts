import { z } from "zod"

// TODO uniqunes + validation
export const PollSchema = z.object({
  question: z.string().min(1, {
    message: "Question is required.",
  }),
  options: z
    .array(
      z.string().min(1, {
        message: "Option is required.",
      })
    )
    .refine((items) => new Set(items).size === items.length, {
      message: "Must be an array of unique strings",
    }),
})

export const VoteSchema = z.object({
  pollId: z.string(),
  optionId: z.number(),
})
