"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="absolute top-0 left-0 w-full p-4 z-50">
      <div className="flex justify-around items-center">
        {/* Logo and Title */}
        <div>
          <Link href="/" className="flex items-center">
            <Image alt="smartmirror" width={70} height={70} src="/smart.png" className="w-auto h-auto" />
            <h1 className="text-xl sm:text-2xl font-bold text-white ml-2">ჭკვიანი სარკე</h1>
          </Link>
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-lg text-white hover:text-gray-300 transition-colors">
                მთავარი
              </Link>
            </li>
            <li>
              <Link href="/calculator" className="text-lg text-white hover:text-gray-300 transition-colors">
                ფასის კალკულატორი
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-lg text-white hover:text-gray-300 transition-colors">
                ჩვენ შესახებ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-lg text-white hover:text-gray-300 transition-colors">
                კონტაქტი
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button - Visible only on mobile */}
        <button
          className="md:hidden text-white p-2 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu - Slides in from the right */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white/10 backdrop-blur-md transform transition-transform duration-300 ease-in-out z-50 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button className="text-white focus:outline-none" onClick={toggleMobileMenu} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-6">
            <li>
              <Link
                href="/"
                className="text-xl text-white block py-2 hover:text-gray-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                მთავარი
              </Link>
            </li>
            <li>
              <Link
                href="/calculator"
                className="text-xl text-white block py-2 hover:text-gray-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                ფასის კალკულატორი
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-xl text-white block py-2 hover:text-gray-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                ჩვენ შესახებ
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-xl text-white block py-2 hover:text-gray-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                კონტაქტი
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay that appears when mobile menu is open */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={toggleMobileMenu} aria-hidden="true" />
      )}
    </header>
  )
}

export default Header
