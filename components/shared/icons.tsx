import {
  Copy,
  Ellipsis,
  Frown,
  ListTodo,
  Loader2,
  LucideProps,
  Menu,
  Moon,
  PartyPopper,
  Plus,
  RefreshCw,
  Search,
  ServerCrash,
  SquareMousePointer,
  SunMedium,
  Trash2,
  Unplug,
  type LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  delete: (props: LucideProps) => <Trash2 size={20} {...props} />,
  add: (props: LucideProps) => <Plus size={20} {...props} />,
  loader: (props: LucideProps) => <Loader2 size={20} {...props} />,
  copy: (props: LucideProps) => <Copy size={20} {...props} />,
  party: (props: LucideProps) => <PartyPopper size={20} {...props} />,
  vote: (props: LucideProps) => <SquareMousePointer {...props} />,
  search: (props: LucideProps) => <Search size={20} {...props} />,
  ellipsis: (props: LucideProps) => <Ellipsis size={20} {...props} />,
  menu: (props: LucideProps) => <Menu size={20} {...props} />,
  error: (props: LucideProps) => (
    <ServerCrash size={80} className="text-destructive" {...props} />
  ),
  notFound: (props: LucideProps) => (
    <Unplug size={80} className="text-primary" {...props} />
  ),
  refresh: (props: LucideProps) => (
    <RefreshCw size={20} className="text-muted-foreground" {...props} />
  ),
  frown: (props: LucideProps) => (
    <Frown size={40} className="text-muted-foreground" {...props} />
  ),
  sun: (props: LucideProps) => <SunMedium size={20} {...props} />,
  moon: (props: LucideProps) => <Moon size={20} {...props} />,
  logo: (props: LucideProps) => (
    <ListTodo size={24} className="text-primary" {...props} />
  ),
}
