export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Poll creator",
  description: "Effortlessly create, share, vote, and track poll results.",
  mainNav: [
    {
      title: "Create poll",
      href: "/create",
    },
    {
      title: "Search for polls",
      href: "/search",
    },
  ],
}
