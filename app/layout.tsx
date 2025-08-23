import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Demandseeker Solutions - AI Hunter | B2B Contact Discovery & Email Enrichment",
  description:
    "Transform your B2B sales with AI-powered contact discovery and email enrichment. Find verified decision-makers and close more deals with AI Hunter.",
  icons: {
    icon: "/favicon.png",
  },
  keywords:
    "AI-powered prospecting, contact discovery, lead intelligence, ai hunter, B2B sales tools, email verification, sales automation",
  openGraph: {
    title: "Demandseeker Solutions - AI Hunter",
    description: "AI-powered B2B contact discovery and email enrichment platform",
    url: "https://demandseeker.com",
    siteName: "Demandseeker Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Demandseeker Solutions - AI Hunter",
    description: "AI-powered B2B contact discovery and email enrichment platform",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Demandseeker Solutions",
              url: "https://demandseeker.com",
              logo: "https://demandseeker.com/logo.png",
              description: "AI-powered B2B contact discovery and email enrichment platform",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Miami",
                addressRegion: "FL",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-305-555-0123",
                contactType: "customer service",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
