'use client'

import { useState, useEffect } from 'react'
import { ref, onValue } from 'firebase/database'
import { db } from '@/lib/firebase'
import PackageCard from './PackageCard'

interface Package {
  id: string
  title: string
  description: string
  price: number
  duration: string
  discount: number
  rating: number
  image: string
}

export default function Packages() {
  const [packages, setPackages] = useState<Package[]>([])
  const [visiblePackages, setVisiblePackages] = useState<Package[]>([]) // Track visible packages
  const [isLoading, setIsLoading] = useState(true)
  const [isAllLoaded, setIsAllLoaded] = useState(false) // To track if all packages are loaded

  useEffect(() => {
    const packagesRef = ref(db, 'packages')
    const unsubscribe = onValue(packagesRef, (snapshot) => {
      const data = snapshot.val()
      if (data) {
        const packageList = Object.entries(data).map(([id, values]) => ({
          id,
          ...(values as Omit<Package, 'id'>),
        }))
        setPackages(packageList)
        setVisiblePackages(packageList.slice(0, 5)) // Initially show 5 packages
        setIsAllLoaded(packageList.length <= 5) // Check if we have more packages
      }
      setIsLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const handleLoadMore = () => {
    const nextVisiblePackages = packages.slice(0, visiblePackages.length + 5)
    setVisiblePackages(nextVisiblePackages)
    setIsAllLoaded(nextVisiblePackages.length >= packages.length) // Disable button if all packages are loaded
  }

  if (isLoading) {
    return <div className="text-center py-12">Loading packages...</div>
  }

  return (
    <section className="py-12 bg-gray-100" id="packages">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Best Selling Travel Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visiblePackages.map((pkg) => (
            <PackageCard key={pkg.id} {...pkg} />
          ))}
        </div>

        {!isAllLoaded && (
          <div className="text-center mt-8">
            <button 
              onClick={handleLoadMore}
              className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
            >
              View All Packages
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

