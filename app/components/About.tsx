import Image from 'next/image'

export default function About() {
  return (
    <section className="py-20 bg-gray-200" id="about">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          About Us
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <Image
              src="https://storage.googleapis.com/a1aa/image/ZiSTedm58WSsdKO3XDTSoVvllSrmPtzfGuSZUXvJXI0k3e8nA.jpg"
              alt="A beautiful scenic view of Kashmir with mountains and lakes"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:ml-8 mt-8 md:mt-0">
            <p className="text-gray-700 text-lg">
              We are a travel company dedicated to providing the best travel experiences in Kashmir. Our packages are designed to offer you the most memorable and enjoyable trips, with a focus on quality and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

