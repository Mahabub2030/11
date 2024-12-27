import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Rating from "react-rating-stars-component";

const CategoryBooksPage = () => {
  const { categoryName } = useParams(); // Extract category name from the URL
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchAllBooks();
  }, [categoryName]); // Trigger effect when categoryName changes

  const fetchAllBooks = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/:${id}`); // Fetch all books
      const filteredBooks = data.filter((book) => book.category === categoryName);
      setBooks(filteredBooks);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
    console.log(id)
  };

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-2xl font-bold text-center mb-6">{categoryName} Books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div key={book.id} className="bg-gray-800 text-white p-4 rounded shadow">
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-64 object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-semibold">{book.title}</h3>
            <p className="text-sm">by {book.author}</p>
            <Rating value={book.rating} edit={false} size={20} />
            <p className="text-sm">Quantity: {book.quantity}</p>
            <Link to={`/BookDetailsPage/${id}`}>Details</Link>

          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBooksPage;
