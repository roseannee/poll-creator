import { Suspense } from "react"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fetchPollsPages } from "@/lib/data"
import { PollsTable } from "@/components/features/search-page/polls-table"
import { Search } from "@/components/features/search-page/search"
import { TablePagination } from "@/components/features/search-page/table-pagination"
import { TableSkeleton } from "@/components/features/search-page/table-skeleton"
import { CreatePollButton } from "@/components/shared/create-poll-button"
import { Icons } from "@/components/shared/icons"

export const metadata: Metadata = {
  title: siteConfig.pages.search.name,
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: {
    query?: string
    page?: string
  }
}) {
  const query = searchParams?.query || ""
  const currentPage = Number(searchParams?.page) || 1

  const totalPages = await fetchPollsPages(query)

  return (
    <section className="container flex min-h-screen-with-header flex-col justify-between py-4 md:py-10">
      <div className="flex space-x-2">
        <Search />

        <CreatePollButton replaceMobileWithIcon variant="default">
          New poll {<Icons.add className="ml-2" />}
        </CreatePollButton>
      </div>

      <Suspense key={query + currentPage} fallback={<TableSkeleton />}>
        <PollsTable query={query} currentPage={currentPage} />
      </Suspense>

      <div className="mx-auto">
        <TablePagination totalPages={totalPages} />
      </div>
    </section>
  )
}
