import "./globals.css"
import { Inter } from "next/font/google"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/lib/theme-context"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "FunQuotes - Daily Inspiration and Humor",
  description: "Discover, share, and be inspired by a world of witty words and profound thoughts.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white dark:bg-[#0A0118] text-gray-900 dark:text-white flex flex-col min-h-screen transition-colors duration-300`}
      >
        <ThemeProvider>
          <NavBar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

