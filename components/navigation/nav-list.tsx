import Link from "next/link"

import { cn } from "@/lib/utils"

import Typography from "../typography"
import { NavProps } from "./nav-desktop"

interface NavListProps extends NavProps {
  isMobile?: boolean
  onLinkClick?: () => void
}

export function NavList({
  items,
  isMobile = false,
  onLinkClick,
}: NavListProps) {
  return items?.length ? (
    <nav
      className={cn(
        isMobile ? "flex flex-col gap-4 py-4" : "hidden gap-6 md:flex"
      )}
    >
      {items?.map(
        (item, index) =>
          item.href && (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "flex items-center text-sm font-medium text-muted-foreground",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
              onClick={isMobile ? onLinkClick : undefined}
            >
              {item.title}
            </Link>
          )
      )}
    </nav>
  ) : isMobile ? (
    <Typography affects={"muted"}>Nothing to show...</Typography>
  ) : null
}
