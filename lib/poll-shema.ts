import { z } from "zod"

export const PollSchema = z.object({
  question: z.string().min(1, { message: "Question is required." }),
  options: z.array(z.string().min(1, { message: "Option is required." })),
})
