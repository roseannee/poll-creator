import { Suspense } from "react"

import { fetchPollsPages } from "@/lib/data"
import { CreatePollButton } from "@/components/create-poll-button"
import { Icons } from "@/components/icons"
import { PollsTable } from "@/components/search-table/polls-table"
import { Search } from "@/components/search-table/search"
import { TablePagination } from "@/components/search-table/table-pagination"
import { TableSkeleton } from "@/components/search-table/table-skeleton"

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
          Create poll {<Icons.add className="ml-2" />}
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
