import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BorrowedBooks = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock logged-in user's email
  const userEmail = "user@example.com";

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Redirect to login if not logged in
    if (!userEmail) {
      toast.error("You must be logged in to view this page.");
      navigate("/login");
    }
  }, [userEmail, navigate]);

  useEffect(() => {
    // Set dynamic page title
    document.title = "Borrowed Books | Library System";
  }, [location]);

  useEffect(() => {
    // Fake data for borrowed books
    const mockBorrowedBooks = [
      {
        _id: "1",
        title: "The Great Gatsby",
        category: "Fiction",
        image:
          "https://via.placeholder.com/150/0000FF/808080?Text=The+Great+Gatsby",
        borrowedDate: "2024-12-01T00:00:00Z",
        returnDate: "2024-12-15T00:00:00Z",
      },
      {
        _id: "2",
        title: "To Kill a Mockingbird",
        category: "Classic",
        image:
          "https://via.placeholder.com/150/FF0000/FFFFFF?Text=To+Kill+a+Mockingbird",
        borrowedDate: "2024-11-20T00:00:00Z",
        returnDate: "2024-12-05T00:00:00Z",
      },
      {
        _id: "3",
        title: "1984",
        category: "Dystopian",
        image:
          "https://via.placeholder.com/150/00FF00/000000?Text=1984",
        borrowedDate: "2024-11-25T00:00:00Z",
        returnDate: "2024-12-10T00:00:00Z",
      },
    ];

    // Simulate a delay for fetching
    setLoading(true);
    setTimeout(() => {
      setBorrowedBooks(mockBorrowedBooks);
      setLoading(false);
    }, 1000);
  }, []);

  const handleReturnBook = (bookId) => {
    // Simulate book return logic
    setBorrowedBooks(borrowedBooks.filter((book) => book._id !== bookId));
    toast.success("Book returned successfully!");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner-border animate-spin w-8 h-8 border-4 rounded-full"></div>
      </div>
    );
  }

  if (borrowedBooks.length === 0) {
    return (
      <div className="text-center text-lg font-semibold text-gray-600">
        You have no borrowed books.
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ToastContainer />
      <h2 className="text-3xl font-bold mb-6 text-center">Borrowed Books</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {borrowedBooks.map((book) => (
          <div
            key={book._id}
            className="bg-white shadow-lg p-4 rounded-lg border hover:shadow-xl"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Category:</strong> {book.category}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Borrowed:</strong>{" "}
              {new Date(book.borrowedDate).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-600 mb-3">
              <strong>Return:</strong>{" "}
              {new Date(book.returnDate).toLocaleDateString()}
            </p>
            <button
              onClick={() => handleReturnBook(book._id)}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 w-full"
            >
              Return Book
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BorrowedBooks;
