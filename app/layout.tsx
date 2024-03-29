import "@/styles/globals.css"

import { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GeistSans } from "geist/font/sans"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import Providers from "@/components/providers/providers"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: siteConfig.metadataBase,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    images: {
      url: siteConfig.openGraph.images.url,
      width: siteConfig.openGraph.images.width,
      height: siteConfig.openGraph.images.height,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen overflow-x-hidden bg-background font-sans antialiased",
            GeistSans.variable
          )}
        >
          <Providers>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <div className="relative flex min-h-screen flex-col">
                <SiteHeader />
                <div className="flex-1">
                  {children}
                  <Analytics />
                  <SpeedInsights />
                </div>
              </div>
            </ThemeProvider>
          </Providers>
        </body>
      </html>
    </>
  )
}
