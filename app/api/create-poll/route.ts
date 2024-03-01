import { NextRequest, NextResponse } from "next/server"
import prisma from "@/prisma/client"

import { PollSchema } from "@/lib/poll-shema"

function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { question, options } = PollSchema.parse(body)

    const result = await prisma.poll.create({
      data: {
        question,
        options,
      },
    })

    await sleep(2000)

    return NextResponse.json(result)
  } catch (error) {
    return NextResponse.error()
  }
}
