import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const applicationName = "Next Template"
const title = "Next Template"
const description = "Next.js Template"
const url = "https://example.com"

const socialImages = [
  {
    url: `${url}/social.png`,
    width: 1200,
    height: 630,
    alt: title,
  },
]

export const metadata: Metadata = {
  title,
  description,
  keywords: "",
  robots: "index, follow",
  authors: [{ name: "Alex" }],
  applicationName,
  alternates: {
    canonical: url,
  },
  metadataBase: new URL(url),
  openGraph: {
    title,
    description,
    url,
    siteName: applicationName,
    images: socialImages,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    // To Do: Change this to your Twitter handle
    site: "@app",
    title,
    description,
    images: socialImages,
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}
      >
        <ClerkProvider
          appearance={{
            variables: { colorPrimary: "#000000" },
          }}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}
