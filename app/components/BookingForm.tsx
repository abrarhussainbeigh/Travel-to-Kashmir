'use client'

import { useState } from 'react'

export default function BookingForm() {
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    persons: 1,
    includeNames: false,
    dates: '',
    contact: '',
    destination: 'Gulmarg',
    preferences: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Booking form submitted:', formData)
    // Here you would typically send the data to your server
    alert('Thank you for your booking! We will contact you soon.')
    setIsFormVisible(false)
  }

  const updatePrice = () => {
    const basePrice = 1000
    return basePrice * formData.persons
  }

  return (
    <>
      {isFormVisible && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 shadow-lg rounded-lg relative max-w-lg w-full">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setIsFormVisible(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="persons">
                  Number of persons
                </label>
                <div className="flex items-center">
                  <button
                    type="button"
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-l hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={() => setFormData(prev => ({ ...prev, persons: Math.max(1, prev.persons - 1) }))}
                  >
                    -
                  </button>
                  <input
                    className="w-full px-4 py-2 border-t border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
                    id="persons"
                    name="persons"
                    type="number"
                    value={formData.persons}
                    onChange={handleChange}
                    min="1"
                    required
                  />
                  <button
                    type="button"
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-r hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={() => setFormData(prev => ({ ...prev, persons: prev.persons + 1 }))}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="includeNames"
                    checked={formData.includeNames}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <span className="text-gray-700 font-bold">Include Names in the list</span>
                </label>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="dates">
                  Travel dates
                </label>
                <input
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="dates"
                  name="dates"
                  type="date"
                  value={formData.dates}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="contact">
                  Contact details (email, phone, etc.)
                </label>
                <input
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="contact"
                  name="contact"
                  type="text"
                  placeholder="Enter contact details"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="destination">
                  Select or customize the destination within Kashmir
                </label>
                <select
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                >
                  <option value="Gulmarg">Gulmarg</option>
                  <option value="Pahalgam">Pahalgam</option>
                  <option value="Srinagar">Srinagar</option>
                  <option value="Sonamarg">Sonamarg</option>
                  <option value="Yusmarg">Yusmarg</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="preferences">
                  Preferences (e.g., hotel type, activities)
                </label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="preferences"
                  name="preferences"
                  placeholder="Enter your preferences"
                  value={formData.preferences}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="mb-4 text-center text-xl font-bold text-blue-900">
                Total Price: ${updatePrice()}
              </div>
              <button
                className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 w-full"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

