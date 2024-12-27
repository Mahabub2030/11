

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BookCategoriesPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories (assuming you have categories in the backend or API)
    const fetchCategories = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/books`);
      const data = await response.json();
      setCategories(data);
      console.log(data)
      console.log('added book here',books)
    };

    fetchCategories();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Book Categories </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((category) => (
          <Link
            to={`/category/${category.id}`}
            key={category.id}
            className="card bg-white rounded-lg shadow-lg hover:shadow-xl transition-all border p-4"
          >
            <div className="relative">
              <img
                src={category.image} // Assuming category has an imageUrl
                alt={category.quantity
                }
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-xl font-semibold">{category.name}</h2>
              <p className="mt-2 text-gray-600">{category.description}</p>
              <div className="mt-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-600 transition-all">
                  Enquire Now
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BookCategoriesPage;



