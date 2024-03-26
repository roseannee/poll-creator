"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Icons } from "@/components/shared/icons"

import { NavProps } from "./nav-desktop"
import { NavList } from "./nav-list"

export function NavMobile({ items }: NavProps) {
  const [sheetOpen, setSheetOpen] = useState(false)

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <Icons.menu />
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <NavList
          isMobile
          items={items}
          onLinkClick={() => setSheetOpen(false)}
        />
      </SheetContent>
    </Sheet>
  )
}
