import { z } from "zod"

export const PollSchema = z.object({
  question: z.string().refine((value) => value.trim().length > 0, {
    message: "Question is required.",
  }),
  options: z
  .array(
    z.string().refine((value) => value.trim().length > 0, {
      message: "Option is required.",
    })
    )
    // TODO show an error
    .refine((items) => new Set(items.map((item) => item.trim())).size === items.length, {
      message: "Must be an array of unique strings",
    }),
})

export const VoteSchema = z.object({
  pollId: z.string(),
  optionId: z.number(),
})
