'use client'

import { useState } from 'react'
import Image from 'next/image'

const locations = [
  { id: 1, name: 'Srinagar', x: 50, y: 50 },
  { id: 2, name: 'Gulmarg', x: 30, y: 30 },
  { id: 3, name: 'Pahalgam', x: 70, y: 70 },
  { id: 4, name: 'Sonamarg', x: 80, y: 40 },
]

export default function InteractiveMap() {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null)

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Explore Kashmir</h2>
        <div className="relative w-full h-[600px]">
          <Image
            src="/placeholder.svg?height=600&width=800"
            alt="Map of Kashmir"
            layout="fill"
            objectFit="contain"
          />
          {locations.map((location) => (
            <button
              key={location.id}
              className={`absolute w-4 h-4 rounded-full ${
                selectedLocation === location.id ? 'bg-red-500' : 'bg-blue-500'
              }`}
              style={{ left: `${location.x}%`, top: `${location.y}%` }}
              onClick={() => setSelectedLocation(location.id)}
            />
          ))}
        </div>
        <div className="mt-4 text-center">
          {selectedLocation ? (
            <p className="text-lg">
              You selected: {locations.find(l => l.id === selectedLocation)?.name}
            </p>
          ) : (
            <p className="text-lg">Click on a location to learn more</p>
          )}
        </div>
      </div>
    </section>
  )
}

