"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, MessageSquare, Award, Zap, ArrowRight } from "lucide-react"

export default function CommunityPage() {
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
              Join the <span className="text-emerald-500">FunQuotes</span> Community
            </h1>
            <p className="mt-6 text-xl text-gray-500 dark:text-gray-400 max-w-3xl">
              Connect with fellow quote enthusiasts, share your favorite quotes, and engage in meaningful discussions.
            </p>
          </motion.div>

          <motion.div
            className="mt-12 grid gap-8 sm:grid-cols-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div>
              <h2 className="text-2xl font-bold mb-4">Why Join Our Community?</h2>
              <p className="text-gray-600 dark:text-gray-300">
                As a member of the FunQuotes community, you'll have the opportunity to connect with like-minded
                individuals who share your passion for inspirational and thought-provoking quotes. Engage in
                discussions, share your insights, and discover new perspectives.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Community Guidelines</h2>
              <p className="text-gray-600 dark:text-gray-300">
                We believe in fostering a positive and inclusive environment. Our community guidelines ensure respectful
                interactions, encourage diverse viewpoints, and promote the sharing of uplifting content. Together, we
                create a space where everyone feels welcome and inspired.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-8">Community Features</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  icon: Users,
                  title: "Member Profiles",
                  description: "Create your unique profile and connect with others",
                },
                {
                  icon: MessageSquare,
                  title: "Discussion Forums",
                  description: "Engage in themed discussions and share your thoughts",
                },
                {
                  icon: Award,
                  title: "Quote Challenges",
                  description: "Participate in weekly quote-sharing challenges",
                },
                {
                  icon: Zap,
                  title: "Live Events",
                  description: "Join live Q&A sessions with quote experts and authors",
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
            className="mt-16 bg-emerald-50 dark:bg-emerald-900/20 p-8 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Featured Community Member</h2>
            <div className="flex items-center space-x-4">
              <img src="/placeholder.svg?height=80&width=80" alt="Featured Member" className="w-20 h-20 rounded-full" />
              <div>
                <h3 className="text-xl font-semibold">Jane Doe</h3>
                <p className="text-gray-600 dark:text-gray-300">Quote Enthusiast</p>
                <p className="mt-2 italic">
                  "Joining the FunQuotes community has been an incredible journey of inspiration and growth. I've met
                  amazing people and discovered quotes that have truly changed my perspective on life."
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Become a part of our vibrant community and start your journey of inspiration and connection today.
            </p>
            <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full">
              <Link href="https://warpcast.com/~/channel/funquotes">
                Join the Community <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

