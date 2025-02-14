"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Scroll, Shield, Users, AlertTriangle } from "lucide-react"

export default function TermsOfUsePage() {
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
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">Terms of Use</h1>
            <p className="mt-6 text-xl text-gray-500 dark:text-gray-400 max-w-3xl">
              Please read these terms carefully before using FunQuotes.
            </p>
          </motion.div>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              By accessing or using FunQuotes, you agree to be bound by these Terms of Use and all applicable laws and
              regulations. If you do not agree with any part of these terms, you may not use our service.
            </p>
          </motion.div>

          <motion.div
            className="mt-12 grid gap-8 sm:grid-cols-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {[
              {
                icon: Scroll,
                title: "2. Use License",
                description:
                  "We grant you a limited, non-exclusive, non-transferable, and revocable license to use FunQuotes for personal, non-commercial purposes.",
              },
              {
                icon: Shield,
                title: "3. Intellectual Property",
                description:
                  "All content on FunQuotes, including text, graphics, logos, and software, is the property of FunQuotes and protected by intellectual property laws.",
              },
              {
                icon: Users,
                title: "4. User Conduct",
                description:
                  "You agree not to use FunQuotes for any unlawful purpose or in any way that could damage, disable, or impair our service.",
              },
              {
                icon: AlertTriangle,
                title: "5. Disclaimer",
                description:
                  "FunQuotes is provided 'as is' without any warranties, expressed or implied. We do not guarantee the accuracy or reliability of any content.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <item.icon className="w-10 h-10 text-emerald-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              FunQuotes and its affiliates shall not be liable for any indirect, incidental, special, consequential or
              punitive damages resulting from your use of or inability to use the service.
            </p>
          </motion.div>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-4">7. Changes to Terms</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We reserve the right to modify or replace these Terms at any time. Your continued use of FunQuotes after
              any changes constitute acceptance of those changes.
            </p>
          </motion.div>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <h2 className="text-2xl font-bold mb-4">8. Governing Law</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without
              regard to its conflict of law provisions.
            </p>
          </motion.div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              By using FunQuotes, you acknowledge that you have read and understood these Terms of Use and agree to be
              bound by them.
            </p>
            <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full">
              <Link href="/contact">Contact Us for Questions</Link>
            </Button>
          </motion.div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">Last updated: February 1, 2025</p>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

