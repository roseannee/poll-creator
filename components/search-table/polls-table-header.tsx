import { TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function PollsTableHeader() {
  return (
    <TableHeader>
      <TableRow>
        <TableHead className="w-[500px]">Question</TableHead>
        <TableHead>Options amount</TableHead>
        <TableHead>Votes amount</TableHead>
        <TableHead className="text-right">Actions</TableHead>
      </TableRow>
    </TableHeader>
  )
}
