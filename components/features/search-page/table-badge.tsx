import { Badge } from "@/components/ui/badge"

export function TableBadge({
  count,
  item,
}: {
  count: number
  item: "option" | "vote"
}) {
  return (
    <Badge variant="secondary">
      {count} <span className="ml-1 hidden md:inline"> {item}s</span>
    </Badge>
  )
}
