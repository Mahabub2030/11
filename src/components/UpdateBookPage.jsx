// // import axios from "axios";
// // import React, { useState } from "react";
// // import { useLocation, useNavigate } from "react-router-dom";

// // const UpdateBookPage = () => {
// //   const location = useLocation();
// //   const navigate = useNavigate();

// //   // Load book data from navigation state
// //   const [bookData, setBookData] = useState({
// //     image: "",
// //     title: "",
// //     author: "",
// //     category: "",
// //     rating: "",
// //     email: "", // Ensure email field is initialized
// //     ...location.state?.book, // Load initial book data from location state
// //   });

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setBookData((prevData) => ({ ...prevData, [name]: value }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (!bookData._id) {
// //       alert("Book ID is missing. Unable to update.");
// //       return;
// //     }

// //     try {
// //       const formData = new FormData();

// //       // Append only non-empty fields to FormData
// //       Object.keys(bookData).forEach((key) => {
// //         if (bookData[key] !== "") {
// //           formData.append(key, bookData[key]);
// //         }
// //       });

// //       const response = await axios.put(
// //         `${import.meta.env.VITE_API_URL}/books/${bookData._id}`,
// //         formData,
// //         {
// //           headers: { "Content-Type": "multipart/form-data" },
// //         }
// //       );

// //       if (response.status === 200) {
// //         alert("Book updated successfully!");
// //         navigate("/all-books"); // Redirect to All Books Page
// //       }
// //     } catch (error) {
// //       console.error("Error updating book:", error);
// //       alert(
// //         "Failed to update the book. Please ensure the server is running and the API endpoint exists."
// //       );
// //     }
// //   };

// //   return (
// //     <div className="container mx-auto my-10">
// //       <h2 className="text-2xl font-bold text-center mb-6">Update Book</h2>
// //       <form
// //         onSubmit={handleSubmit}
// //         className="max-w-lg mx-auto bg-gray-800 p-6 rounded shadow text-white"
// //       >
// //         <div className="mb-4">
// //           <label className="block mb-2">Image</label>
// //           <input
// //             type="text"
// //             name="image"
// //             value={bookData.image}
// //             onChange={handleInputChange}
// //             className="w-full bg-gray-700 text-white rounded px-3 py-2"
// //             required
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block mb-2">Title</label>
// //           <input
// //             type="text"
// //             name="title"
// //             value={bookData.title}
// //             onChange={handleInputChange}
// //             className="w-full bg-gray-700 text-white rounded px-3 py-2"
// //             required
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block mb-2">Author Name</label>
// //           <input
// //             type="text"
// //             name="author"
// //             value={bookData.author}
// //             onChange={handleInputChange}
// //             className="w-full bg-gray-700 text-white rounded px-3 py-2"
// //             required
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block mb-2">Email</label>
// //           <input
// //             type="email"
// //             name="email"
// //             value={bookData.email}
// //             onChange={handleInputChange}
// //             className="w-full bg-gray-700 text-white rounded px-3 py-2"
// //             required
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block mb-2">Category</label>
// //           <select
// //             name="category"
// //             value={bookData.category}
// //             onChange={handleInputChange}
// //             className="w-full bg-gray-700 text-white rounded px-3 py-2"
// //             required
// //           >
// //             <option value="">Select a Category</option>
// //             <option value="Fiction">Fiction</option>
// //             <option value="Classic">Classic</option>
// //             <option value="Dystopian">Dystopian</option>
// //           </select>
// //         </div>
// //         <div className="mb-4">
// //           <label className="block mb-2">Rating</label>
// //           <input
// //             type="number"
// //             name="rating"
// //             value={bookData.rating}
// //             onChange={handleInputChange}
// //             min="1"
// //             max="5"
// //             className="w-full bg-gray-700 text-white rounded px-3 py-2"
// //             required
// //           />
// //         </div>
// //         <button
// //           type="submit"
// //           className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
// //         >
// //           Update Book
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default UpdateBookPage;

// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const UpdateBookPage = () => {
//   const { bookId } = useParams();
//   const [bookDetails, setBookDetails] = useState(null);
//   const [categories, setCategories] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchBookDetails();
//     fetchCategories();
//   }, []);

//   const fetchBookDetails = async () => {
//     try {
//       const { data } = await axios.get(
//         `${import.meta.env.VITE_API_URL}/books/${bookId}`
//       );
//       setBookDetails(data);
//     } catch (error) {
//       toast.error("Error fetching book details.");
//       console.error("Error fetching book details:", error);
//     }
//   };

//   const fetchCategories = async () => {
//     try {
//       const { data } = await axios.get(
//         `${import.meta.env.VITE_API_URL}/categories`
//       );
//       setCategories(data);
//     } catch (error) {
//       console.error("Error fetching categories:", error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setBookDetails((prevDetails) => ({
//       ...prevDetails,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e) => {
//     setBookDetails((prevDetails) => ({
//       ...prevDetails,
//       coverImage: e.target.files[0],
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("title", bookDetails.title);
//     formData.append("author", bookDetails.author);
//     formData.append("category", bookDetails.category);
//     formData.append("rating", bookDetails.rating);
//     if (bookDetails.coverImage instanceof File) {
//       formData.append("coverImage", bookDetails.coverImage);
//     }

//     try {
//       await axios.put(
//         `${import.meta.env.VITE_API_URL}/books/${bookId}`,
//         formData
//       );
//       toast.success("Book updated successfully!");
//       navigate("/all-books");
//     } catch (error) {
//       toast.error("Error updating book. Please try again.");
//       console.error("Error updating book:", error);
//     }
//   };

//   if (!bookDetails) {
//     return <p>Loading book details...</p>;
//   }

//   return (
//     <div className="container mx-auto my-10">
//       <ToastContainer />
//       <h2 className="text-2xl font-bold text-center mb-6">Update Book</h2>

//       <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
//         <div>
//           <label className="block mb-2">Image</label>
//           <input
//             type="file"
//             onChange={handleFileChange}
//             className="file-input file-input-bordered w-full"
//           />
//         </div>
//         <div>
//           <label className="block mb-2">Title</label>
//           <input
//             type="text"
//             name="title"
//             value={bookDetails.title}
//             onChange={handleInputChange}
//             className="input input-bordered w-full"
//           />
//         </div>
//         <div>
//           <label className="block mb-2">Author Name</label>
//           <input
//             type="text"
//             name="author"
//             value={bookDetails.author}
//             onChange={handleInputChange}
//             className="input input-bordered w-full"
//           />
//         </div>
//         <div>
//           <label className="block mb-2">Category</label>
//           <select
//             name="category"
//             value={bookDetails.category}
//             onChange={handleInputChange}
//             className="select select-bordered w-full"
//           >
//             {categories.map((category) => (
//               <option key={category} value={category}>
//                 {category}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label className="block mb-2">Rating (1-5)</label>
//           <input
//             type="number"
//             name="rating"
//             value={bookDetails.rating}
//             onChange={handleInputChange}
//             min="1"
//             max="5"
//             className="input input-bordered w-full"
//           />
//         </div>
//         <button type="submit" className="btn btn-primary w-full">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UpdateBookPage;

