"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Quote, Heart, Sparkles, Share2 } from "lucide-react"

export default function AboutPage() {
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
        <div className="relative max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              About <span className="text-emerald-500">FunQuotes</span>
            </h1>
            <p className="mt-6 text-xl text-gray-500 dark:text-gray-400 max-w-3xl">
              Discover the story behind FunQuotes, your daily source of inspiration and humor.
            </p>
          </motion.div>

          <motion.div
            className="mt-12 grid gap-8 sm:grid-cols-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-300">
                At FunQuotes, we believe in the power of words to inspire, motivate, and bring joy to people's lives.
                Our mission is to curate and deliver the best quotes from around the world, making them easily
                accessible to everyone, anytime, anywhere.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
              <p className="text-gray-600 dark:text-gray-300">
                FunQuotes is more than just a quote repository. We offer a unique blend of inspirational, humorous, and
                thought-provoking quotes, coupled with AI-powered personalization to ensure you always find the perfect
                words for any moment.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-8">Key Features</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Quote, title: "Curated Collection", description: "Hand-picked quotes from various sources" },
                {
                  icon: Sparkles,
                  title: "AI-Powered",
                  description: "Personalized recommendations based on your preferences",
                },
                { icon: Heart, title: "Save Favorites", description: "Create your own collection of beloved quotes" },
                {
                  icon: Share2,
                  title: "Easy Sharing",
                  description: "Share quotes on social media with a single click",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <feature.icon className="w-10 h-10 text-emerald-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Become a part of the FunQuotes family and start your journey towards daily inspiration and joy.
            </p>
            <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full">
              <Link href="https://app.funquotes.xyz">
                Get Started <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

