


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import { Modal } from 'react-bootstrap'; // Ensure Bootstrap is installed and CSS is imported

const BookDetailsPage = () => {
  const { id } = useParams(); // Get the book ID from the route parameters
  const [book, setBook] = useState(null); // State to hold the book details
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal open state
  const [returnDate, setReturnDate] = useState(''); // State for return date input
  const [user, setUser] = useState({
    name: 'John Doe', // Replace with actual user data from authentication
    email: 'john.doe@example.com', // Replace with actual user email from authentication
  });

  useEffect(() => {
    // Fetch book details by ID
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/books/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch book details');
        }
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, [id]);

  const handleBorrow = (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page
    if (book.quantity > 0) {
      const updatedBook = { ...book, quantity: book.quantity - 1 };
      setBook(updatedBook);
      setIsModalOpen(false); // Close the modal after successful borrowing
      console.log('Book borrowed:', { bookId: book._id, user, returnDate });
      // Add API call or logic to save the borrowed book
    } else {
      console.warn('No more books available for borrowing');
    }
  };

  if (!book) {
    return <div className="text-center text-lg mt-8">Loading book details...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">{book.name}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="text-center">
          <img
            src={book.image}
            alt={book.name}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
        <div className="text-left">
          <h3 className="text-xl font-semibold">Author: {book.author}</h3>
          <p className="mt-2">Category: {book.category}</p>
          <p className="mt-2">Quantity: {book.quantity}</p>
          <p className="mt-2">Rating:</p>
          <div className="mt-2">
            <ReactStars count={5} value={book.rating} size={24} isHalf={true} edit={false} />
          </div>
          <button
            className={`bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 transition-all ${
              book.quantity === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={() => setIsModalOpen(true)}
            disabled={book.quantity === 0}
          >
            Borrow
          </button>
        </div>
      </div>

      <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Borrow Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleBorrow}>
            <div className="mb-4">
              <label className="block text-gray-700">Return Date</label>
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="border border-gray-300 rounded-lg p-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Your Name</label>
              <input
                type="text"
                value={user.name}
                readOnly
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Your Email</label>
              <input
                type="email"
                value={user.email}
                readOnly
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-600 transition-all"
            >
              Submit
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default BookDetailsPage;











