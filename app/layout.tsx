import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Travel to Kashmir - Discover Paradise on Earth',
  description: 'Experience the beauty of Kashmir with our exclusive travel packages. Book your dream vacation to Dal Lake, Gulmarg, and Pahalgam today!',
  keywords: 'Kashmir, travel, vacation, Dal Lake, Gulmarg, Pahalgam, houseboat, skiing, trekking',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

