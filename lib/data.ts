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

export async function fetchPollByIdWithVotes(id: string) {
  noStore()

  try {
    const poll = await prisma.poll.findUnique({
      where: {
        id,
      },
      include: {
        options: true,
        votes: true,
      },
    })

    return poll
  } catch (error) {
    throw new Error(`Failed to fetch poll: ${error}`)
  }
}

const ITEMS_PER_PAGE = 5
export async function fetchFilteredPolls(query: string, currentPage: number) {
  noStore()

  const offset = (currentPage - 1) * ITEMS_PER_PAGE

  try {
    const polls = await prisma.poll.findMany({
      where: {
        question: {
          contains: query,
        },
      },
      orderBy: { createdAt: "desc" },
      include: {
        _count: {
          select: { options: true, votes: true },
        },
      },
      skip: offset,
      take: ITEMS_PER_PAGE,
    })

    return polls
  } catch (error) {
    throw new Error(`Failed to fetch polls: ${error}`)
  }
}

export async function fetchPollsPages(query: string) {
  noStore()

  try {
    const count = await prisma.poll.count({
      where: {
        question: {
          contains: query,
        },
      },
    })

    const totalPages = Math.ceil(count / ITEMS_PER_PAGE)
    return totalPages
  } catch (error) {
    throw new Error(`Failed to fetch polls: ${error}`)
  }
}
