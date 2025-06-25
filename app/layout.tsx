import type React from "react"
import type { Metadata } from "next"
import { Inter, Cairo } from "next/font/google"
import { LanguageProvider } from "@/contexts/LanguageContext"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const cairo = Cairo({ subsets: ["arabic"], variable: "--font-cairo" })

export const metadata: Metadata = {
  title: "InvestWadi - ربط رواد الأعمال العالميين بالمستثمرين المحليين",
  description: "منصة استثمارية شاملة تربط رواد الأعمال العالميين بالمستثمرين المحليين",
  generator: 'vivasoft',
  applicationName: "InvestWadi",
  keywords: [
    "investwadi",
    "استثمار"],
  authors: [{ name: "vivasoft" }],
  creator: "vivasoft",
  publisher: "vivasoft",
  openGraph: { 
    title: "InvestWadi - ربط رواد الأعمال العالميين بالمستثمرين المحليين",
    description: "منصة استثمارية شاملة تربط رواد الأعمال العالميين بالمستثمرين المحليين",
    url: "https://investwadi.com",
    siteName: "InvestWadi",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "InvestWadi Open Graph Image",
      },
    ],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${inter.variable} ${cairo.variable} font-cairo`}>
        {children}
      </body>
    </html>
  )
}
