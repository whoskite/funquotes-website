"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Separator } from "@/components/ui/separator"
import { Menu, X } from "lucide-react"

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [showLogoAndBrand, setShowLogoAndBrand] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
      setShowLogoAndBrand(window.scrollY <= 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = ["Home", "About", "Community"]

  return (
    <AnimatePresence>
      <motion.nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen ? "bg-white/[0.02] backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FunQuotes_Logo-ZloJPDxRH1nR4x1LCB1TmlApXE5FI5.png"
                  alt="FunQuotes Logo"
                  className="h-10 w-10"
                />
                <motion.span
                  className={`text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-500 block md:block ${
                    !showLogoAndBrand ? 'md:opacity-0' : ''
                  }`}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  FunQuotes
                </motion.span>
              </Link>
            </div>

            {/* Center Navigation - Hidden on Mobile */}
            <div className="hidden md:flex items-center justify-center flex-1 px-8">
              <motion.div
                className="flex items-center space-x-1 border border-white/20 rounded-full px-2 py-1 relative"
                initial={false}
                animate={{
                  width: !showLogoAndBrand ? "auto" : "fit-content",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {navItems.map((item) => (
                  <Link
                    key={item}
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="relative px-4 py-2 text-sm font-medium text-white hover:text-gray-200 transition-colors rounded-full z-10"
                    onMouseEnter={() => setHoveredLink(item)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {item}
                    {hoveredLink === item && (
                      <motion.div
                        className="absolute inset-0 bg-white/10 rounded-full"
                        layoutId="navBackground"
                        initial={false}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                ))}
                <AnimatePresence>
                  {!showLogoAndBrand && (
                    <>
                      <Separator orientation="vertical" className="h-6 bg-white/20" />
                      <motion.div
                        initial={{ opacity: 0, width: 0, overflow: "hidden" }}
                        animate={{ opacity: 1, width: "auto", overflow: "visible" }}
                        exit={{ opacity: 0, width: 0, overflow: "hidden" }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          initial={{ x: 20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: 20, opacity: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <Link
                            href="https://app.funquotes.xyz"
                            className="relative px-4 py-2 text-sm font-medium text-white hover:text-gray-200 transition-colors rounded-full z-10 whitespace-nowrap"
                          >
                            Open App
                          </Link>
                        </motion.div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-white hover:text-gray-200"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>

              {/* Desktop Open App Button */}
              <motion.div
                className="hidden md:block"
                initial={{ opacity: 1 }}
                animate={{ opacity: showLogoAndBrand ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div className="relative">
                  <Button
                    asChild
                    variant="outline"
                    className="border-emerald-500/20 text-emerald-600 hover:bg-emerald-500/10 transition-colors relative z-10 rounded-lg"
                  >
                    <Link href="https://app.funquotes.xyz">Open App</Link>
                  </Button>
                  <motion.div
                    className="absolute inset-0"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <svg
                      className="w-full h-full"
                      style={{
                        position: "absolute",
                        top: "-1px",
                        left: "-1px",
                        width: "calc(100% + 2px)",
                        height: "calc(100% + 2px)",
                      }}
                    >
                      <rect
                        width="100%"
                        height="100%"
                        rx="8"
                        ry="8"
                        fill="none"
                        stroke="currentColor"
                        className="text-emerald-500"
                        strokeWidth="1"
                      />
                    </svg>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-lg border-t border-white/10"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="block px-4 py-2 text-lg font-medium text-white hover:text-emerald-400 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                  className="px-4 pt-4 border-t border-white/10"
                >
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white"
                  >
                    <Link href="https://app.funquotes.xyz" onClick={() => setIsMobileMenuOpen(false)}>
                      Open App
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </AnimatePresence>
  )
}

