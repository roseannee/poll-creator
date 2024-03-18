import { Badge } from "../ui/badge"

export function TableBadge({
  count,
  item,
}: {
  count: number
  item: "option" | "vote"
}) {
  return (
    <Badge variant="secondary">
      {count} {item}s
    </Badge>
  )
}
