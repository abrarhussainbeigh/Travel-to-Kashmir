import Image from 'next/image'

const destinations = [
  { name: 'Dal Lake', image: '/placeholder.svg?height=400&width=600' },
  { name: 'Gulmarg', image: '/placeholder.svg?height=400&width=600' },
  { name: 'Pahalgam', image: '/placeholder.svg?height=400&width=600' },
  { name: 'Sonamarg', image: '/placeholder.svg?height=400&width=600' },
]

export default function FeaturedDestinations() {
  return (
    <section id="destinations" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest) => (
            <div key={dest.name} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src={dest.image} alt={dest.name} width={600} height={400} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{dest.name}</h3>
                <a href="#" className="text-blue-600 hover:underline">Learn more</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

