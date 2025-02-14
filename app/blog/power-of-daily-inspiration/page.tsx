"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, User, Clock } from "lucide-react"

export default function BlogPost() {
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
            <Link href="/blog" className="inline-flex items-center text-emerald-500 hover:text-emerald-600 mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-4">
              The Power of Daily Inspiration
            </h1>
            <div className="flex items-center text-gray-500 dark:text-gray-400 mb-8">
              <User className="mr-2 h-4 w-4" />
              <span className="mr-4">Jane Doe</span>
              <Calendar className="mr-2 h-4 w-4" />
              <span className="mr-4">May 15, 2023</span>
              <Clock className="mr-2 h-4 w-4" />
              <span>5 min read</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/placeholder.svg?height=300&width=600"
              alt="Daily Inspiration"
              width={600}
              height={300}
              className="w-full rounded-lg mb-8"
            />

            <div className="prose dark:prose-invert max-w-none">
              <p>
                In today's fast-paced world, finding motivation and maintaining a positive mindset can be challenging.
                However, incorporating daily inspiration into your routine can have a profound impact on your life,
                boosting productivity and overall well-being. This article explores the transformative power of daily
                inspiration and provides practical tips for integrating it into your life.
              </p>

              <h2>The Science Behind Inspiration</h2>
              <p>
                Research has shown that exposure to inspirational content can stimulate the release of dopamine, a
                neurotransmitter associated with motivation and pleasure. This neurochemical response can lead to
                increased focus, creativity, and a more positive outlook on life.
              </p>

              <h2>Benefits of Daily Inspiration</h2>
              <ul>
                <li>Improved mood and mental health</li>
                <li>Increased motivation and productivity</li>
                <li>Enhanced creativity and problem-solving skills</li>
                <li>Greater resilience in the face of challenges</li>
                <li>Stronger sense of purpose and direction</li>
              </ul>

              <h2>Practical Ways to Incorporate Daily Inspiration</h2>
              <ol>
                <li>
                  <strong>Start your day with a motivational quote:</strong> Begin each morning by reading or listening
                  to an inspiring quote. This sets a positive tone for the day ahead.
                </li>
                <li>
                  <strong>Create an inspiration board:</strong> Compile images, quotes, and personal goals on a physical
                  or digital board. Place it where you'll see it frequently throughout the day.
                </li>
                <li>
                  <strong>Listen to motivational podcasts:</strong> Use your commute or downtime to listen to podcasts
                  featuring inspiring stories and advice from successful individuals.
                </li>
                <li>
                  <strong>Practice gratitude:</strong> Take a few minutes each day to reflect on what you're grateful
                  for. This simple practice can shift your focus to the positive aspects of your life.
                </li>
                <li>
                  <strong>Surround yourself with positive people:</strong> Engage with individuals who uplift and
                  inspire you. Their energy and outlook can be contagious.
                </li>
              </ol>

              <h2>Overcoming Inspiration Fatigue</h2>
              <p>
                While daily inspiration can be powerful, it's important to avoid becoming desensitized to motivational
                content. Here are some tips to keep your inspiration fresh and effective:
              </p>
              <ul>
                <li>Vary your sources of inspiration</li>
                <li>Take action on the inspiration you receive</li>
                <li>Reflect on how inspiration has impacted your life</li>
                <li>Share inspiring content with others</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Incorporating daily inspiration into your life is a simple yet powerful way to transform your mindset
                and boost your productivity. By consistently exposing yourself to motivational content and implementing
                the strategies outlined in this article, you can harness the power of inspiration to achieve your goals
                and lead a more fulfilling life.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4">Share this article</h2>
            <div className="flex space-x-4">
              <Button variant="outline">Twitter</Button>
              <Button variant="outline">Facebook</Button>
              <Button variant="outline">LinkedIn</Button>
            </div>
          </motion.div>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-4">Read more</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Link
                href="/blog/famous-quotes-changed-world"
                className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">Famous Quotes That Changed the World</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Explore the profound impact of iconic quotes throughout history and how they've shaped our society.
                </p>
              </Link>
              <Link
                href="/blog/art-of-crafting-memorable-quotes"
                className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">The Art of Crafting Memorable Quotes</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Learn the techniques behind creating impactful and memorable quotes that resonate with people.
                </p>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

