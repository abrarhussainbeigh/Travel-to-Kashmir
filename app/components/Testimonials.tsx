import Image from 'next/image'

const testimonials = [
  { id: 1, name: 'John Doe', comment: 'An unforgettable experience! Kashmir is truly a paradise on Earth.', avatar: '/placeholder.svg?height=100&width=100' },
  { id: 2, name: 'Jane Smith', comment: 'The hospitality and natural beauty of Kashmir exceeded all my expectations.', avatar: '/placeholder.svg?height=100&width=100' },
  { id: 3, name: 'Mike Johnson', comment: 'I\'ll definitely be coming back. Kashmir has stolen my heart!', avatar: '/placeholder.svg?height=100&width=100' },
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Travelers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              </div>
              <p className="text-gray-700">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

