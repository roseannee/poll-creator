"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useDebouncedCallback } from "use-debounce"

import { Icons } from "../icons"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

export function Search() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams)

    params.set("page", "1")
    if (term) {
      params.set("query", term)
    } else {
      params.delete("query")
    }

    replace(`${pathname}?${params.toString()}`)
  }, 300)

  return (
    <div className="relative flex flex-1 shrink-0">
      <Label htmlFor="search" className="sr-only">
        Search
      </Label>

      <Input
        placeholder="Search for polls..."
        className="pl-10"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />

      <Icons.search className="absolute left-3 top-1/2 size-[18px] -translate-y-1/2" />
    </div>
  )
}