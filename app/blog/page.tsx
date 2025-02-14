"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "The Power of Daily Inspiration",
    excerpt:
      "Discover how incorporating inspirational quotes into your daily routine can transform your mindset and boost productivity.",
    author: "Jane Doe",
    date: "May 15, 2023",
    imageUrl: "/placeholder.svg?height=400&width=600",
    slug: "power-of-daily-inspiration",
  },
  {
    id: 2,
    title: "Famous Quotes That Changed the World",
    excerpt: "Explore the profound impact of iconic quotes throughout history and how they've shaped our society.",
    author: "John Smith",
    date: "May 10, 2023",
    imageUrl: "/placeholder.svg?height=400&width=600",
    slug: "famous-quotes-changed-world",
  },
  {
    id: 3,
    title: "The Art of Crafting Memorable Quotes",
    excerpt: "Learn the techniques behind creating impactful and memorable quotes that resonate with people.",
    author: "Emily Johnson",
    date: "May 5, 2023",
    imageUrl: "/placeholder.svg?height=400&width=600",
    slug: "art-of-crafting-memorable-quotes",
  },
  {
    id: 4,
    title: "Quotes in Literature: A Deep Dive",
    excerpt: "Analyze the use of quotes in classic and contemporary literature and their significance in storytelling.",
    author: "Michael Brown",
    date: "April 30, 2023",
    imageUrl: "/placeholder.svg?height=400&width=600",
    slug: "quotes-in-literature",
  },
]

export default function BlogPage() {
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
        <div className="relative max-w-6xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-4">FunQuotes Blog</h1>
            <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mb-12">
              Explore our latest articles on inspiration, motivation, and the power of words.
            </p>
          </motion.div>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image
                  src={post.imageUrl || "/placeholder.svg"}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/blog/${post.slug}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full">
              <Link href="/blog/archive">
                View All Posts <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

