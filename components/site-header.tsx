import { siteConfig } from "@/config/site"
import { NavDesktop } from "@/components/navigation/nav-desktop"
import { ThemeToggle } from "@/components/theme-toggle"

import { NavMobile } from "./navigation/nav-mobile"
import { CreatePollButton } from "./shared/create-poll-button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <NavDesktop items={siteConfig.mainNav} />

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <CreatePollButton replaceMobileWithIcon variant="ghost">
              Create your own poll
            </CreatePollButton>

            <ThemeToggle />

            <NavMobile items={siteConfig.mainNav} />
          </nav>
        </div>
      </div>
    </header>
  )
}
