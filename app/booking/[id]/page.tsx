'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { Star } from 'lucide-react'

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

export default function BookingPage() {
  const { id } = useParams()
  const [packageDetails, setPackageDetails] = useState<Package | null>(null)

  useEffect(() => {
    // In a real application, this would be an API call to get the package details
    // For now, we'll use dummy data
    const dummyPackages: Package[] = [
      {
        id: '1',
        title: 'Paradise on Earth - Srinagar Tour',
        description: 'Explore the serene Dal Lake, Mughal Gardens, and the charming houseboats of Srinagar.',
        price: 12999,
        duration: '3 Days',
        discount: 40,
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
      },
      {
        id: '2',
        title: 'Gulmarg Ski Adventure',
        description: 'Experience the thrill of skiing in the Himalayan slopes of Gulmarg.',
        price: 15999,
        duration: '4 Days',
        discount: 25,
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80'
      },
      {
        id: '3',
        title: 'Pahalgam Valley Retreat',
        description: 'Relax and rejuvenate in the picturesque Pahalgam Valley surrounded by pine forests.',
        price: 10999,
        duration: '3 Days',
        discount: 30,
        rating: 4.6,
        image: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
      }
    ]

    const selectedPackage = dummyPackages.find(pkg => pkg.id === id)
    setPackageDetails(selectedPackage || null)
  }, [id])

  if (!packageDetails) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <Image
              src={packageDetails.image}
              alt={packageDetails.title}
              width={600}
              height={400}
              className="h-48 w-full object-cover md:h-full md:w-48"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {packageDetails.duration}
            </div>
            <h1 className="mt-1 text-3xl font-bold text-gray-900">{packageDetails.title}</h1>
            <p className="mt-2 text-gray-600">{packageDetails.description}</p>
            <div className="mt-4">
              <span className="text-2xl font-bold text-gray-900">₹{packageDetails.price.toLocaleString()}</span>
              <span className="text-gray-600"> per person</span>
            </div>
            <div className="mt-4 flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(packageDetails.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">{packageDetails.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
        <div className="p-8 bg-gray-50">
          <h2 className="text-2xl font-bold mb-4">Book This Package</h2>
          {/* Add your booking form here */}
          <p className="text-gray-600">Booking form will be added here.</p>
        </div>
      </div>
    </div>
  )
}

