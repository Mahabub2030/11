
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllBooksPage = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    rating: "",
    email: "",
    user: "",
  });
  const [viewMode, setViewMode] = useState("card"); // "card" or "table"
  const [searchAuthor, setSearchAuthor] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortedByRating, setSortedByRating] = useState(false);

  // Simulate logged-in user details
  const loggedInUser = {
    email: "user@example.com",
    username: "exampleUser",
  };

  useEffect(() => {
    fetchAllBooks();
  }, []);

  useEffect(() => {
    filterBooks();
  }, [searchAuthor, selectedCategory, sortedByRating, books]);

  const fetchAllBooks = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/books`);
      setBooks(data);
      setFilteredBooks(data);
    } catch (error) {
      toast.error("Error fetching books. Please try again.");
      console.error("Error fetching books:", error);
    }
  };
  

  const filterBooks = () => {
    let filtered = [...books];

    // Filter by author name
    if (searchAuthor) {
      filtered = filtered.filter((book) =>
        book.author.toLowerCase().includes(searchAuthor.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter((book) =>
        book.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Sort by rating if needed
    if (sortedByRating) {
      filtered = filtered.sort((a, b) => b.rating - a.rating);
    }

    setFilteredBooks(filtered);
  };

  const openUpdateModal = (book) => {
    setSelectedBook(book);
    setFormData({
      title: book.title,
      author: book.author,
      category: book.category,
      rating: book.rating,
      email: loggedInUser.email, // Automatically set from logged-in user
      user: loggedInUser.username, // Automatically set from logged-in user
    });
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdateBook = async () => {
    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/books/${selectedBook._id}`,
        formData
      );
      toast.success("Book updated successfully!");
      fetchAllBooks();
      setShowModal(false);
    } catch (error) {
      toast.error("Error updating book. Please check the inputs.");
      console.error("Error updating book:", error);
    }
  };

  const handleToggleView = () => {
    setViewMode((prev) => (prev === "card" ? "table" : "card"));
  };

  const handleSortByRating = () => {
    setSortedByRating((prev) => !prev);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSearchAuthor = (e) => {
    setSearchAuthor(e.target.value);
  };

  return (
    <div className="container mx-auto my-10 space-y-5">
      <ToastContainer />
      <h2 className="text-2xl font-bold text-center mb-6">All Books</h2>

      {/* Toggle View Button */}
      <div className="flex justify-end mb-4 space-x-4">
        <button
          onClick={handleToggleView}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Switch to {viewMode === "card" ? "Table" : "Card"} View
        </button>

        {/* Sort by Rating Button */}
        <button
          onClick={handleSortByRating}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Sort by Rating
        </button>
      </div>

      {/* Filter by Category */}
      <div className="mb-4">
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="bg-gray-200 px-4 py-2 rounded"
        >
          <option value="">Select Category</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Science">Science</option>
          <option value="Biography">Biography</option>
        </select>
      </div>

      {/* Search by Author Name */}
      <div className="mb-4">
        <input
          type="text"
          value={searchAuthor}
          onChange={handleSearchAuthor}
          placeholder="Search by Author"
          className="bg-gray-200 px-4 py-2 rounded w-full"
        />
      </div>

      {/* Books Grid or Table */}
      {viewMode === "card" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book) => (
            <div
              key={book._id}
              className="p-6 bg-gray-800 text-white rounded shadow hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
              <p className="mb-1">
                <strong>Author:</strong> {book.author}
              </p>
              <p className="mb-1">
                <strong>Category:</strong> {book.category}
              </p>
              <p className="mb-4">
                <strong>Rating:</strong> {book.rating} / 5
              </p>
              <button
                onClick={() => openUpdateModal(book)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Update
              </button>
            </div>
          ))}
        </div>
      ) : (
        <table className="min-w-full table-auto border-collapse border border-gray-800">
          <thead>
            <tr className="bg-gray-700 text-white">
              <th className="px-4 py-2 border border-gray-800">Title</th>
              <th className="px-4 py-2 border border-gray-800">Author</th>
              <th className="px-4 py-2 border border-gray-800">Category</th>
              <th className="px-4 py-2 border border-gray-800">Rating</th>
              <th className="px-4 py-2 border border-gray-800">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map((book) => (
              <tr key={book._id} className="hover:bg-gray-800 text-white">
                <td className="px-4 py-2 border border-gray-800">{book.title}</td>
                <td className="px-4 py-2 border border-gray-800">{book.author}</td>
                <td className="px-4 py-2 border border-gray-800">{book.category}</td>
                <td className="px-4 py-2 border border-gray-800">{book.rating}</td>
                <td className="px-4 py-2 border border-gray-800">
                  <button
                    onClick={() => openUpdateModal(book)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Update Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Update Book</h3>
            <div className="space-y-4">
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Title"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleInputChange}
                placeholder="Author"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                placeholder="Category"
                className="input input-bordered w-full"
              />
              <input
                type="number"
                name="rating"
                value={formData.rating}
                onChange={handleInputChange}
                placeholder="Rating"
                className="input input-bordered w-full"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                readOnly
                className="input input-bordered w-full bg-gray-200"
              />
              <input
                type="text"
                name="user"
                value={formData.user}
                readOnly
                className="input input-bordered w-full bg-gray-200"
              />
            </div>
            <div className="flex justify-end mt-6 space-x-4">
              <button
                onClick={() => setShowModal(false)}
                className="btn btn-secondary"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateBook}
                className="btn btn-primary"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllBooksPage;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const AllBooks = () => {
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get("http://localhost:3000/books")
//       .then((response) => {
//         setBooks(response.data);
//         setLoading(false);
//       })
//       .catch((error) => console.error(error));
//   }, []);

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">All Books</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {books.map((book) => (
//           <div key={book._id} className="card bg-base-100 shadow-xl">
//             <img src={book.image} alt={book.name} />
//             <div className="card-body">
//               <h2 className="card-title">{book.name}</h2>
//               <p>{book.authorName}</p>
//               <p>Rating: {book.rating}</p>
//               <div className="card-actions justify-end">
//                 <Link to={`/books/${book._id}`} className="btn btn-primary">Details</Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllBooks;






















// import axios from "axios";
// import { useEffect, useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const AllBooksPage = () => {
//   const [books, setBooks] = useState([]);
//   const [filteredBooks, setFilteredBooks] = useState([]);
//   const [selectedBook, setSelectedBook] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [formData, setFormData] = useState({
//     title: "",
//     author: "",
//     category: "",
//     rating: "",
//     email: "",
//     user: "",
//   });
//   const [viewMode, setViewMode] = useState("card"); // "card" or "table"
//   const [searchAuthor, setSearchAuthor] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [sortedByRating, setSortedByRating] = useState(false);

//   // Simulate logged-in user details
//   const loggedInUser = {
//     email: "user@example.com",
//     username: "exampleUser",
//   };

//   useEffect(() => {
//     fetchAllBooks();
//   }, []);

//   useEffect(() => {
//     filterBooks();
//   }, [searchAuthor, selectedCategory, sortedByRating]);

//   const fetchAllBooks = async () => {
//     try {
//       const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/books`);
//       setBooks(data);
//       setFilteredBooks(data);
//     } catch (error) {
//       toast.error("Error fetching books. Please try again.");
//       console.error("Error fetching books:", error);
//     }
//   };

//   const filterBooks = () => {
//     let filtered = books;

//     // Filter by author name
//     if (searchAuthor) {
//       filtered = filtered.filter((book) =>
//         book.author.toLowerCase().includes(searchAuthor.toLowerCase())
//       );
//     }

//     // Filter by category
//     if (selectedCategory) {
//       filtered = filtered.filter((book) =>
//         book.category.toLowerCase() === selectedCategory.toLowerCase()
//       );
//     }

//     // Sort by rating if needed
//     if (sortedByRating) {
//       filtered = filtered.sort((a, b) => b.rating - a.rating);
//     }

//     setFilteredBooks(filtered);
//   };

//   const openUpdateModal = (book) => {
//     setSelectedBook(book);
//     setFormData({
//       title: book.title,
//       author: book.author,
//       category: book.category,
//       rating: book.rating,
//       email: loggedInUser.email, // Automatically set from logged-in user
//       user: loggedInUser.username, // Automatically set from logged-in user
//     });
//     setShowModal(true);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleUpdateBook = async () => {
//     try {
//       await axios.put(
//         `${import.meta.env.VITE_API_URL}/books/${selectedBook._id}`,
//         formData
//       );
//       toast.success("Book updated successfully!");
//       fetchAllBooks();
//       setShowModal(false);
//     } catch (error) {
//       toast.error("Error updating book. Please check the inputs.");
//       console.error("Error updating book:", error);
//     }
//   };

//   const handleToggleView = () => {
//     setViewMode((prev) => (prev === "card" ? "table" : "card"));
//   };

//   const handleSortByRating = () => {
//     setSortedByRating((prev) => !prev);
//   };

//   const handleCategoryChange = (e) => {
//     setSelectedCategory(e.target.value);
//   };

//   const handleSearchAuthor = (e) => {
//     setSearchAuthor(e.target.value);
//   };

//   return (
//     <div className="container mx-auto my-10 space-y-5">
//       <ToastContainer />
//       <h2 className="text-2xl font-bold text-center mb-6">All Books</h2>

//       {/* Toggle View Button */}
//       <div className="flex justify-end mb-4 space-x-4">
//         <button
//           onClick={handleToggleView}
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Switch to {viewMode === "card" ? "Table" : "Card"} View
//         </button>

//         {/* Sort by Rating Button */}
//         <button
//           onClick={handleSortByRating}
//           className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//         >
//           Sort by Rating
//         </button>
//       </div>

//       {/* Filter by Category */}
//       <div className="mb-4">
//         <select
//           value={selectedCategory}
//           onChange={handleCategoryChange}
//           className="bg-gray-200 px-4 py-2 rounded"
//         >
//           <option value="">Select Category</option>
//           <option value="Fiction">Fiction</option>
//           <option value="Non-Fiction">Non-Fiction</option>
//           <option value="Science">Science</option>
//           <option value="Biography">Biography</option>
//         </select>
//       </div>

//       {/* Search by Author Name */}
//       <div className="mb-4">
//         <input
//           type="text"
//           value={searchAuthor}
//           onChange={handleSearchAuthor}
//           placeholder="Search by Author"
//           className="bg-gray-200 px-4 py-2 rounded w-full"
//         />
//       </div>

//       {/* Books Grid or Table */}
//       {viewMode === "card" ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredBooks.map((book) => (
//             <div
//               key={book._id}
//               className="p-6 bg-gray-800 text-white rounded shadow hover:shadow-lg transition-shadow duration-300"
//             >
//               <img
//                 src={book.image}
//                 alt={book.title}
//                 className="w-full h-48 object-cover rounded mb-4"
//               />
//               <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
//               <p className="mb-1">
//                 <strong>Author:</strong> {book.author}
//               </p>
//               <p className="mb-1">
//                 <strong>Category:</strong> {book.category}
//               </p>
//               <p className="mb-4">
//                 <strong>Rating:</strong> {book.rating} / 5
//               </p>
//               <button
//                 onClick={() => openUpdateModal(book)}
//                 className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//               >
//                 Update
//               </button>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <table className="min-w-full table-auto border-collapse border border-gray-800">
//           <thead>
//             <tr className="bg-gray-700 text-white">
//               <th className="px-4 py-2 border border-gray-800">Title</th>
//               <th className="px-4 py-2 border border-gray-800">Author</th>
//               <th className="px-4 py-2 border border-gray-800">Category</th>
//               <th className="px-4 py-2 border border-gray-800">Rating</th>
//               <th className="px-4 py-2 border border-gray-800">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredBooks.map((book) => (
//               <tr key={book._id} className="hover:bg-gray-800 text-white">
//                 <td className="px-4 py-2 border border-gray-800">{book.title}</td>
//                 <td className="px-4 py-2 border border-gray-800">{book.author}</td>
//                 <td className="px-4 py-2 border border-gray-800">{book.category}</td>
//                 <td className="px-4 py-2 border border-gray-800">{book.rating}</td>
//                 <td className="px-4 py-2 border border-gray-800">
//                   <button
//                     onClick={() => openUpdateModal(book)}
//                     className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//                   >
//                     Update
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       {/* Update Modal */}
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
//             <h3 className="text-xl font-bold mb-4">Update Book</h3>
//             <div className="space-y-4">
//               <input
//                 type="text"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleInputChange}
//                 placeholder="Title"
//                 className="input input-bordered w-full"
//               />
//               <input
//                 type="text"
//                 name="author"
//                 value={formData.author}
//                 onChange={handleInputChange}
//                 placeholder="Author"
//                 className="input input-bordered w-full"
//               />
//               <input
//                 type="text"
//                 name="category"
//                 value={formData.category}
//                 onChange={handleInputChange}
//                 placeholder="Category"
//                 className="input input-bordered w-full"
//               />
//               <input
//                 type="number"
//                 name="rating"
//                 value={formData.rating}
//                 onChange={handleInputChange}
//                 placeholder="Rating"
//                 className="input input-bordered w-full"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 readOnly
//                 className="input input-bordered w-full bg-gray-200"
//               />
//               <input
//                 type="text"
//                 name="user"
//                 value={formData.user}
//                 readOnly
//                 className="input input-bordered w-full bg-gray-200"
//               />
//             </div>
//             <div className="flex justify-end mt-6 space-x-4">
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="btn btn-secondary"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleUpdateBook}
//                 className="btn btn-primary text-white"
//               >
//                 Update
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AllBooksPage;
