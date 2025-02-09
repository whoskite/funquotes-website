import { motion } from "framer-motion"

export function AnnouncementBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center py-2"
    >
      <a
        href="/blog/launch"
        className="inline-flex items-center px-4 py-1 rounded-full text-sm bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 transition-colors"
      >
        🎉 Announcing FunQuotes Beta Launch
      </a>
    </motion.div>
  )
}

