export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Poll creator",
  description: "Create, share, vote on, and track poll results with ease.",
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
