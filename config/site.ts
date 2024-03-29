import ogImage from "@/app/opengraph-image.png"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Poll creator",
  description: "Create, share, vote on, and track poll results with ease.",
  metadataBase: new URL("https://poll-creator-puce.vercel.app"),
  openGraph: {
    images: {
      url: ogImage.src,
      width: ogImage.width,
      height: ogImage.height,
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
