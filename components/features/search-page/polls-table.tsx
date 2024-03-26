import { fetchFilteredPolls } from "@/lib/data"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { Icons } from "@/components/shared/icons"
import Typography from "@/components/typography"

import { TableActions } from "./table-actions"
import { TableBadge } from "./table-badge"
import { MyTableHeader } from "./table-header"

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
        {polls.length === 0 ? (
          <TableRow>
            <TableCell colSpan={4}>
              <div className="flex flex-col items-center justify-center space-y-2">
                <Icons.frown />
                <Typography
                  affects="removePMargin"
                  className="italic text-muted-foreground"
                >
                  No polls found...
                </Typography>
              </div>
            </TableCell>
          </TableRow>
        ) : (
          polls.map(({ id, question, _count }) => (
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
          ))
        )}
      </TableBody>
    </Table>
  )
}
