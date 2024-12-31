'use client';

import { useState, useEffect } from 'react';

interface Package {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  discount: string;
  imageAlt: string;
  rating: number;
  image: string;
}

interface PackageFormProps {
  onSubmit: (packageData: Omit<Package, 'id'> | Package) => void;
  initialData?: Package | null;
}

export default function PackageForm({ onSubmit, initialData }: PackageFormProps) {
  const [formData, setFormData] = useState<Omit<Package, 'id'>>({
    title: '',
    description: '',
    price: 0,
    duration: '',
    discount: '0 %off',
    rating: 0,
    image: '',
    imageAlt: '',
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || '',
        description: initialData.description || '',
        price: initialData.price || 0,
        duration: initialData.duration || '',
        discount: initialData.discount || '0 %off',
        rating: initialData.rating || 0,
        image: initialData.image || '',
        imageAlt: initialData.imageAlt || '',
      });
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'price' || name === 'rating' ? parseFloat(value) : value,
    }));
  };

 /* const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(initialData ? { ...formData, id: initialData.id } : formData);
    if (!initialData) {
      setFormData({
        title: '',
        description: '',
        price: 0,
        duration: '',
        discount: '0 %off',
        rating: 0,
        image: '',
        imageAlt: '',
      });
    }
  };
  */
  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  onSubmit(initialData ? { ...formData, id: initialData.id } : formData);
  
  // Reset form to default values after add or update
  setFormData({
    title: '',
    description: '',
    price: 0,
    duration: '',
    discount: '0 %off',
    rating: 0,
    image: '',
    imageAlt: '',
  });
};

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block mb-1">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="description" className="block mb-1">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        ></textarea>
      </div>
      <div>
        <label htmlFor="price" className="block mb-1">
          Price
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="duration" className="block mb-1">
          Duration
        </label>
        <input
          type="text"
          id="duration"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="discount" className="block mb-1">
          Discount
        </label>
        <input
          type="text"
          id="discount"
          name="discount"
          value={formData.discount}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="rating" className="block mb-1">
          Rating
        </label>
        <input
          type="number"
          id="rating"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          required
          step="0.1"
          min="0"
          max="5"
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="image" className="block mb-1">
          Image URL
        </label>
        <input
          type="url"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="imageAlt" className="block mb-1">
          Image Alt
        </label>
        <input
          type="text"
          id="imageAlt"
          name="imageAlt"
          value={formData.imageAlt}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        {initialData ? 'Update Package' : 'Add Package'}
      </button>
    </form>
  );
}

