import ogImage from "@/app/opengraph-image.png"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Poll creator",
  description: "Create, share, vote on, and track poll results with ease.",
  keywords: [
    "polls",
    "voting",
    "create poll",
    "share poll",
    "vote tracking",
    "online voting",
    "questionnaire",
    "feedback",
  ],
  metadataBase: new URL("https://poll-creator-puce.vercel.app"),
  openGraph: {
    images: {
      url: ogImage.src,
      width: ogImage.width,
      height: ogImage.height,
    },
  },
  pages: {
    create: {
      name: "Create new poll",
    },
    search: {
      name: "Find your poll",
    },
    share: {
      name: "Share this poll",
    },
  },
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
