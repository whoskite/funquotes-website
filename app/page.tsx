"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AnnouncementBanner } from "@/components/announcement-banner"
import {
  Sparkles,
  History,
  Heart,
  RefreshCw,
  Share2,
  Download,
  Twitter,
  Facebook,
  LinkedinIcon as LinkedIn,
} from "lucide-react"
import html2canvas from "html2canvas"
import { useTheme } from "@/lib/theme-context"

// Expanded list of quotes
const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
  { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
  { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { text: "The mind is everything. What you think you become.", author: "Buddha" },
  { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
]

export default function Home() {
  const [currentQuote, setCurrentQuote] = useState(quotes[0])
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false)
  const [previewImageUrl, setPreviewImageUrl] = useState<string | null>(null)
  const quoteRef = useRef(null)
  const { theme } = useTheme()

  const generateNewQuote = () => {
    const newQuote = quotes[Math.floor(Math.random() * quotes.length)]
    setCurrentQuote(newQuote)
  }

  const handleShare = async (platform: string) => {
    let shareUrl = ""
    const text = `"${currentQuote.text}" - ${currentQuote.author}`
    const encodedText = encodeURIComponent(text)

    if (platform === "twitter" && quoteRef.current) {
      try {
        const canvas = document.createElement("canvas")
        const ctx = canvas.getContext("2d")
        
        if (!ctx) {
          throw new Error("Could not get canvas context")
        }
        
        canvas.width = 1200
        canvas.height = 630

        // Create gradient background
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
        if (theme === "dark") {
          gradient.addColorStop(0, "#0A0118")
          gradient.addColorStop(1, "#1a1a2e")
        } else {
          gradient.addColorStop(0, "#ffffff")
          gradient.addColorStop(1, "#f0f0f0")
        }
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Add text
        ctx.fillStyle = theme === "dark" ? "#ffffff" : "#000000"
        ctx.textAlign = "center"
        ctx.font = "bold 48px Inter, sans-serif"
        const words = currentQuote.text.split(" ")
        let line = ""
        const lines = []
        words.forEach((word) => {
          const testLine = line + word + " "
          const metrics = ctx.measureText(testLine)
          if (metrics.width > canvas.width - 100) {
            lines.push(line)
            line = word + " "
          } else {
            line = testLine
          }
        })
        lines.push(line)

        // Draw text lines
        lines.forEach((line, index) => {
          ctx.fillText(
            line,
            canvas.width / 2,
            canvas.height / 2 - (lines.length - 1) * 30 + index * 60
          )
        })

        // Add author
        ctx.font = "italic 32px Inter, sans-serif"
        ctx.fillText(
          `- ${currentQuote.author}`,
          canvas.width / 2,
          canvas.height / 2 + lines.length * 30 + 40
        )

        const imageDataUrl = canvas.toDataURL("image/png")
        setPreviewImageUrl(imageDataUrl)

        const blob = await (await fetch(imageDataUrl)).blob()
        const file = new File([blob], "quote.png", { type: "image/png" })

        const formData = new FormData()
        formData.append("text", text)
        formData.append("media", file)

        const response = await fetch("/api/twitter-share", {
          method: "POST",
          body: formData,
        })

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        if (data.url) {
          window.open(data.url, "_blank")
        } else {
          throw new Error("No URL returned from the API")
        }
      } catch (error) {
        console.error("Error sharing to Twitter:", error)
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred"
        alert(`Error sharing to Twitter: ${errorMessage}`)
      }
    } else {
      switch (platform) {
        case "facebook":
          shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodedText}`
          break
        case "linkedin":
          shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodedText}`
          break
      }
      window.open(shareUrl, "_blank")
    }
    setIsShareMenuOpen(false)
  }

  useEffect(() => {
    if (isShareMenuOpen) {
      handleShare("twitter")
    } else {
      setPreviewImageUrl(null)
    }
  }, [isShareMenuOpen]) // Removed handleShare from dependency array

  const handleDownload = async () => {
    if (quoteRef.current) {
      const canvas = await html2canvas(quoteRef.current)
      const dataUrl = canvas.toDataURL("image/png")
      const link = document.createElement("a")
      link.href = dataUrl
      link.download = "funquotes_share.png"
      link.click()
    }
  }

  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0118] text-gray-900 dark:text-white overflow-hidden">
      <div className="relative">
        {/* Background gradient effects */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1 }}
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[128px]" />

        {/* Content */}
        <motion.div
          className="relative max-w-7xl mx-auto px-4 pt-32 pb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <AnnouncementBanner />

          <div className="mt-16 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            >
              FunQuotes is the new
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                home of inspiration
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            >
              Discover, share, and be inspired by a curated collection of quotes.
              <br />
              Daily updates, personalized recommendations, and more.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 h-12 rounded-full"
              >
                <Link href="https://app.funquotes.xyz">Start Exploring</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 px-8 h-12 rounded-full"
              >
                <Link href="/about">Learn more</Link>
              </Button>
            </motion.div>
          </div>

          {/* Quote of the Day section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0A0118] to-transparent pointer-events-none" />
            <div className="relative z-10 bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-xl border border-gray-200 dark:border-gray-700/50 p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Quote of the Day</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                    onClick={() => setIsShareMenuOpen(!isShareMenuOpen)}
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                    onClick={generateNewQuote}
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    New Quote
                  </Button>
                </div>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuote.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  ref={quoteRef}
                  className="p-6 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-lg"
                >
                  <blockquote className="text-xl text-gray-800 dark:text-gray-200 italic">
                    "{currentQuote.text}"
                  </blockquote>
                  <p className="mt-2 text-right text-gray-600 dark:text-gray-400">- {currentQuote.author}</p>
                </motion.div>
              </AnimatePresence>
              <AnimatePresence>
                {isShareMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    {previewImageUrl && (
                      <div className="mb-4">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Preview:</p>
                        <img
                          src={previewImageUrl || "/placeholder.svg"}
                          alt="Quote preview"
                          className="w-full rounded-lg"
                        />
                      </div>
                    )}
                    <div className="flex justify-center space-x-4">
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400 hover:bg-blue-600/10 dark:hover:bg-blue-400/10"
                        onClick={() => handleShare("twitter")}
                      >
                        <Twitter className="w-4 h-4 mr-2" />
                        Twitter
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-blue-700 dark:text-blue-600 border-blue-700 dark:border-blue-600 hover:bg-blue-700/10 dark:hover:bg-blue-600/10"
                        onClick={() => handleShare("facebook")}
                      >
                        <Facebook className="w-4 h-4 mr-2" />
                        Facebook
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-blue-800 dark:text-blue-700 border-blue-800 dark:border-blue-700 hover:bg-blue-800/10 dark:hover:bg-blue-700/10"
                        onClick={() => handleShare("linkedin")}
                      >
                        <LinkedIn className="w-4 h-4 mr-2" />
                        LinkedIn
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-emerald-600 dark:text-emerald-400 border-emerald-600 dark:border-emerald-400 hover:bg-emerald-600/10 dark:hover:bg-emerald-400/10"
                        onClick={handleDownload}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Save Image
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* New Mobile App Section */}
      <motion.section
        className="relative pt-16 pb-32"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Background effects */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1 }}
        />

        <motion.div
          className="max-w-7xl mx-auto px-4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your Daily Dose of
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  {" "}
                  Inspiration{" "}
                </span>
                Anywhere
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: Sparkles,
                    title: "AI-Powered Generation",
                    description: "Get personalized quotes based on your interests and mood",
                  },
                  {
                    icon: Heart,
                    title: "Save Favorites",
                    description: "Build your personal collection of meaningful quotes",
                  },
                  {
                    icon: History,
                    title: "History Tracking",
                    description: "Review and revisit your quote generation history",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="mt-1 bg-emerald-500/10 p-2 rounded-lg">
                      <feature.icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 h-12 rounded-full"
                >
                  <Link href="https://app.funquotes.xyz">Try it now</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right side - Mobile preview */}
            <motion.div
              initial={{ opacity: 0, x: 20, rotateY: -20 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-3xl blur-3xl opacity-20" />

              {/* Phone frame */}
              <div className="relative mx-auto max-w-[300px]">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-[32px] blur" />
                <div className="relative bg-gray-900 rounded-[32px] p-3 shadow-2xl border border-white/10 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 rounded-[32px]"
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                      backgroundSize: "200% 100%",
                    }}
                    animate={{
                      backgroundPosition: ["200% 0", "-200% 0"],
                    }}
                    transition={{
                      duration: 8,
                      ease: "linear",
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FunQuotes_Welcome-H0pWfRrrRA3qqzgsdwhFqXifFYO4mF.png"
                    alt="FunQuotes mobile app interface showing the welcome screen with a search bar and navigation"
                    className="rounded-[24px] w-full relative z-10"
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-emerald-500/30 rounded-full blur-2xl" />
                <div className="absolute -left-6 -bottom-6 w-24 h-24 bg-teal-500/30 rounded-full blur-2xl" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>
    </main>
  )
}

