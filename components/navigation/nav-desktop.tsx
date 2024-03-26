import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { Icons } from "@/components/shared/icons"

import { NavList } from "./nav-list"

export interface NavProps {
  items?: NavItem[]
}

export function NavDesktop({ items }: NavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/create" className="flex items-center space-x-2">
        <Icons.logo />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>

      <NavList items={items} />
    </div>
  )
}
