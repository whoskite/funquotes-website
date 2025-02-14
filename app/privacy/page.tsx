"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, Lock, Eye, FileText, ArrowRight } from "lucide-react"

export default function PrivacyPage() {
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
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">Privacy Policy</h1>
            <p className="mt-6 text-xl text-gray-500 dark:text-gray-400 max-w-3xl">
              At FunQuotes, we value your privacy and are committed to protecting your personal information.
            </p>
          </motion.div>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">Our Commitment to Privacy</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              FunQuotes is dedicated to maintaining the trust and confidence of our users. We want you to understand how
              we collect, use, and protect your personal information. This privacy policy outlines our practices
              concerning the data we collect from you when you use our website and services.
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
                icon: Shield,
                title: "Data Protection",
                description:
                  "We employ industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.",
              },
              {
                icon: Lock,
                title: "Information Collection",
                description:
                  "We collect only the necessary information required to provide you with our services and improve your experience on our platform.",
              },
              {
                icon: Eye,
                title: "Transparency",
                description:
                  "We are committed to being transparent about the data we collect and how we use it. You can always request information about your data.",
              },
              {
                icon: FileText,
                title: "Cookie Policy",
                description:
                  "We use cookies to enhance your browsing experience. You can manage your cookie preferences through your browser settings.",
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
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">As a user of FunQuotes, you have the right to:</p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of any inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to the processing of your personal information</li>
              <li>Request the transfer of your personal information</li>
              <li>Withdraw consent at any time where we are relying on consent to process your personal information</li>
            </ul>
          </motion.div>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              If you have any questions about our privacy practices or would like to exercise any of your rights, please
              don't hesitate to contact us.
            </p>
            <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full">
              <Link href="/contact">
                Contact Us <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This privacy policy was last updated on Februaru 1, 2025. We may update this policy from time to time, so
              please review it periodically.
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

