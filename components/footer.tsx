import Link from "next/link"

export function Footer() {
  return (
    <footer className="mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full fade-line" />
          </div>
          <div className="relative flex justify-center">
            <div className="bg-white dark:bg-[#0A0118] px-8">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FunQuotes_Logo-ZloJPDxRH1nR4x1LCB1TmlApXE5FI5.png"
                alt="FunQuotes Logo"
                className="h-8 w-8"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center space-x-6">
          <Link href="/about" className="text-gray-400 hover:text-gray-300">
            About
          </Link>
          <Link href="/privacy" className="text-gray-400 hover:text-gray-300">
            Privacy
          </Link>
          <Link href="/terms" className="text-gray-400 hover:text-gray-300">
            Terms
          </Link>
        </div>
        <p className="mt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} FunQuotes. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

