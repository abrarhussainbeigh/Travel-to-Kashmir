'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link href="/" className="flex items-center py-4 px-2">
                <Image
                  src="https://storage.googleapis.com/a1aa/image/YPrkVN3MeFVxOaeOT5IQqVSinClulEKdLXzLe2W2r8PCv98nA.jpg"
                  alt="Logo of the travel company with a scenic view of Kashmir"
                  width={32}
                  height={32}
                  className="mr-2"
                />
                <span className="font-semibold text-gray-500 text-lg">
                  Travel to Kashmir
                </span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/" className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold">
                Home
              </Link>
              <Link href="#packages" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">
                Packages
              </Link>
              <Link href="#about" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">
                About
              </Link>
              <Link href="#contact" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">
                Contact
              </Link>
              <Link href="/admin" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">
                Admin
              </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="w-6 h-6 text-gray-500 hover:text-green-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="mobile-menu md:hidden">
          <ul>
            <li><Link href="/" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</Link></li>
            <li><a href="#packages" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Packages</a></li>
            <li><a href="#about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
            <li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact</a></li>
            <li><Link href="/admin" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Admin</Link></li>
          </ul>
        </div>
      )}
    </nav>
  )
}

