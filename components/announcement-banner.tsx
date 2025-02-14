"use client"

import { useCallback } from "react"
import { motion } from "framer-motion"
import confetti from "canvas-confetti"

export function AnnouncementBanner() {
  const handleConfetti = useCallback(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    })
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center py-2"
    >
      <button
        onClick={handleConfetti}
        className="inline-flex items-center px-4 py-1 rounded-full text-sm bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 transition-colors cursor-pointer"
      >
        🎉 Announcing FunQuotes Beta Launch
      </button>
    </motion.div>
  )
}

