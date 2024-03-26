import { unstable_noStore as noStore } from "next/cache"
import { NextRequest, NextResponse } from "next/server"
import prisma from "@/prisma/client"

import { PollSchema } from "@/lib/definitions"

function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

export async function POST(request: NextRequest) {
  noStore()

  try {
    const body = await request.json()
    const { question, options } = PollSchema.parse(body)

    const result = await prisma.poll.create({
      data: {
        question,
        options: {
          create: options.map((option) => ({ option })),
        },
      },
    })

    await sleep(2000)

    return NextResponse.json(result)
  } catch (error) {
    return NextResponse.error()
  }
}
