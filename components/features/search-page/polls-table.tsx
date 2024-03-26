import { fetchFilteredPolls } from "@/lib/data"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"

import { TableActions } from "./table-actions"
import { TableBadge } from "./table-badge"
import { MyTableHeader } from "./table-header"

// TODO add not found message
export async function PollsTable({
  query,
  currentPage,
}: {
  query: string
  currentPage: number
}) {
  const polls = await fetchFilteredPolls(query, currentPage)

  return (
    <Table className="min-h-96">
      <MyTableHeader />

      <TableBody>
        {polls.map(({ id, question, _count }) => (
          <TableRow key={id}>
            <TableCell className="max-w-10 truncate font-medium">
              {question}
            </TableCell>
            <TableCell>
              <TableBadge count={_count.options} item="option" />
            </TableCell>
            <TableCell>
              <TableBadge count={_count.votes} item="vote" />
            </TableCell>
            <TableCell className="text-right">
              <TableActions pollId={id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}