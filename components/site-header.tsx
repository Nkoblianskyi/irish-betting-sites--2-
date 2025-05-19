"use client"

import Link from "next/link"
import { Dices, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Add scroll event listener to detect when page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-indigo-900/95 to-purple-900/95 backdrop-blur-sm shadow-lg"
          : "bg-gradient-to-r from-indigo-900 to-purple-900"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative h-10 w-10 bg-white rounded-lg shadow-md overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-90"></div>
            <Dices className="h-6 w-6 text-white relative z-10 transition-transform duration-300 group-hover:rotate-12" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-purple-300 leading-none">
              BestBettingIrishSite
            </span>
          </div>
        </Link>

        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-purple-300 transition-colors"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-sm font-medium text-white hover:text-purple-300 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className="text-sm font-medium text-white hover:text-purple-300 transition-colors duration-300"
          >
            About Us
          </Link>
          <Link
            href="/terms-and-conditions"
            className="text-sm font-medium text-white hover:text-purple-300 transition-colors duration-300"
          >
            Terms
          </Link>
          <Link
            href="/privacy-policy"
            className="text-sm font-medium text-white hover:text-purple-300 transition-colors duration-300"
          >
            Privacy
          </Link>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-indigo-800 animate-fade-in">
          <div className="container mx-auto px-4 py-3 space-y-2">
            <Link
              href="/"
              className="block text-white hover:text-purple-300 transition-colors duration-300 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="block text-white hover:text-purple-300 transition-colors duration-300 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/terms-and-conditions"
              className="block text-white hover:text-purple-300 transition-colors duration-300 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy-policy"
              className="block text-white hover:text-purple-300 transition-colors duration-300 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
