import Image from 'next/image'
import Link from 'next/link'
import { Star } from 'lucide-react'

interface PackageCardProps {
  id: string
  title: string
  description: string
  price: number
  duration: string
  discount: number
  rating: number
  image: string
  imageAlt: string 
}

export default function PackageCard({
  id,
  title,
  description,
  price,
  duration,
  discount,
  rating,
  image,
  imageAlt
}: PackageCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="relative">
        <Image
          src={image}
          alt={imageAlt}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
        {discount !== "0" && discount !== "0 %off" && (
          <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-bold">
            {discount}
          </span>
        )}
        
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-bold text-blue-600">₹{price.toLocaleString()} per person</span>
          <span className="text-sm text-gray-500">{duration}</span>
        </div>
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">{rating.toFixed(1)}</span>
        </div>
        <Link href={`/booking/${id}`} className="block w-full">
          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  )
}

