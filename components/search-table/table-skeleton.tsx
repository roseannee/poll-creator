import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"

import { Skeleton } from "../ui/skeleton"
import { PollsTableHeader } from "./polls-table-header"

export function TableSkeleton() {
  return (
    <Table className="min-h-96">
      <PollsTableHeader />

      <TableBody>
        {Array.from({ length: 5 }, (_, i) => i + 1).map((i) => (
          <TableRow key={i}>
            <TableCell>
              <Skeleton className="h-5 w-full" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-5 w-20" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-5 w-20" />
            </TableCell>
            <TableCell className="flex justify-end">
              <Skeleton className="size-10" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
