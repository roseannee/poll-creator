"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/shared/icons"

export function TableActions({ pollId }: { pollId: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Icons.ellipsis />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href={`/${pollId}/share`} className="cursor-pointer">
              Share
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link href={`/${pollId}/vote`} className="cursor-pointer">
              Vote
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link href={`/${pollId}/result`} className="cursor-pointer">
              Show results
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
