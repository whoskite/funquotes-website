"use client"

import { useTheme } from "@/lib/theme-context"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} className="w-9 h-9 p-0 relative">
      <motion.div
        initial={{ scale: 0.5, opacity: 0, rotate: -180 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        exit={{ scale: 0.5, opacity: 0, rotate: 180 }}
        transition={{ duration: 0.3 }}
        key={theme}
        className="absolute inset-0 flex items-center justify-center"
      >
        {theme === "dark" ? <Sun className="h-5 w-5 text-yellow-300" /> : <Moon className="h-5 w-5 text-gray-700" />}
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

