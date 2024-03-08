import { unstable_noStore as noStore } from "next/cache"
import prisma from "@/prisma/client"

export async function fetchPollById(id: string) {
  noStore()

  try {
    const poll = await prisma.poll.findUnique({
      where: {
        id,
      },
      include: {
        options: true,
      },
    })

    return poll
  } catch (error) {
    throw new Error(`Failed to fetch poll: ${error}`)
  }
}
