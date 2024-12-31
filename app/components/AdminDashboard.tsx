'use client'

import { useState, useEffect } from 'react'
import { ref, onValue, push, update, remove } from 'firebase/database'
import { db } from '@/lib/firebase'
import { signOut } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import PackageForm from './PackageForm'

interface Package {
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

export default function AdminDashboard() {
  const [packages, setPackages] = useState<Package[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [editingPackage, setEditingPackage] = useState<Package | null>(null)

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
      }
      setIsLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const handleAddPackage = async (packageData: Omit<Package, 'id'>) => {
    try {
      const packagesRef = ref(db, 'packages')
      await push(packagesRef, packageData)
    } catch (error) {
      console.error('Error adding package:', error)
      alert('Failed to add package')
    }
  }

  const handleUpdatePackage = async (packageData: Package) => {
    try {
      const { id, ...data } = packageData
      const packageRef = ref(db, `packages/${id}`)
      await update(packageRef, data)
      setEditingPackage(null)
    } catch (error) {
      console.error('Error updating package:', error)
      alert('Failed to update package')
    }
  }

  const handleDeletePackage = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this package?')) {
      try {
        const packageRef = ref(db, `packages/${id}`)
        await remove(packageRef)
      } catch (error) {
        console.error('Error deleting package:', error)
        alert('Failed to delete package')
      }
    }
  }

  // Sign out handler
  const handleLogout = async () => {
    try {
      await signOut(auth) // Sign out the user from Firebase
      window.location.href = '/login' // Redirect to login page after logout (you can customize this)
    } catch (error) {
      console.error("Error signing out: ", error)
      alert('Failed to sign out')
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard 🙂</h2>

      {/* Sign Out Button */}
      <button 
        onClick={handleLogout} 
        className="bg-red-500 text-white px-4 py-2 rounded mb-4"
      >
        Log Out
      </button>

      <PackageForm onSubmit={editingPackage ? handleUpdatePackage : handleAddPackage} initialData={editingPackage} />
      
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Existing Packages</h3>
        {packages.map((pkg) => (
          <div key={pkg.id} className="border p-4 mb-4 rounded">
            <img src={pkg.image} alt={pkg.imageAlt || pkg.title} className="w-full h-auto" />
            <h4 className="text-lg font-bold">{pkg.title}</h4>
            <p>{pkg.description}</p>
            <p>Price: ${pkg.price}</p>
            <p>Duration: {pkg.duration}</p>
            <div className="mt-2">
              <button
                onClick={() => setEditingPackage(pkg)}
                className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeletePackage(pkg.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

