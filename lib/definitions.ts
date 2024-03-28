import { z } from "zod"

export const PollSchema = z.object({
  question: z
    .string()
    .min(1, { message: "Question is required." })
    .refine((value) => value.trim().length > 0, {
      message: "Question cannot be an empty field.",
    }),
  options: z
    .array(
      z
        .string()
        .min(1, { message: "Option is required." })
        .refine((value) => value.trim().length > 0, {
          message: "Option cannot be an empty field.",
        })
    )
    // TODO show an error
    .refine(
      (items) =>
        new Set(items.map((item) => item.trim())).size === items.length,
      {
        message: "Must be an array of unique strings",
      }
    ),
})

export const VoteSchema = z.object({
  pollId: z.string(),
  optionId: z.number(),
})
