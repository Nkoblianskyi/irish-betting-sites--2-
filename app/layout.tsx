import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CookieConsentProvider } from "@/context/cookie-consent-context"
import { CookieBanner } from "@/components/cookie-banner"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BestBettingIrishSite.com | Premier Betting Platforms in Ireland",
  description:
    "Discover Ireland's top-rated betting platforms with exclusive bonuses and promotions. Expert reviews and comparisons for Irish bettors.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
          forcedTheme="light"
        >
          <CookieConsentProvider>
            {children}
            <CookieBanner />
          </CookieConsentProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
