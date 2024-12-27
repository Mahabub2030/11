import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleBookAdded = async (e) => {
    e.preventDefault();
    const image = e.target.image.value;
    const name = e.target.name.value;
    const quantity = e.target.quantity.value;
    const author = e.target.author.value;
    const category = e.target.category.value;
    const description = e.target.description.value;
    const rating = e.target.rating.value;

    const newBook = {
      image,
      name,
      quantity,
      author,
      category,
      description,
      rating,
    };

    try {
      // Await the axios post call
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/add-book`,
        newBook
      );
      console.log("Response Data:", data);

      // Show a success toast message
      toast.success("Book added successfully!");

      // Navigate to another page if needed
      // navigate("/");
    } catch (error) {
      console.error("Error adding book:", error);
      toast.error("Failed to add the book. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg shadow-lg max-w-4xl">
      <ToastContainer />
      <form onSubmit={handleBookAdded} className="text-white">
        <h2 className="text-3xl font-semibold mb-6 text-center">Add a New Book</h2>

        <div className="form-control mb-4">
          <label className="label text-lg">
            <span className="label-text">Image URL</span>
          </label>
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            className="input input-bordered w-full text-lg py-3 rounded-lg"
            required
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-6 mb-4">
          <div className="form-control flex-1">
            <label className="label text-lg">
              <span className="label-text">Book Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter book name"
              className="input input-bordered w-full text-lg py-3 rounded-lg"
              required
            />
          </div>
          <div className="form-control flex-1">
            <label className="label text-lg">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="number"
              name="quantity"
              placeholder="Enter quantity"
              className="input input-bordered w-full text-lg py-3 rounded-lg"
              required
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 mb-4">
          <div className="form-control flex-1">
            <label className="label text-lg">
              <span className="label-text">Author Name</span>
            </label>
            <input
              type="text"
              name="author"
              placeholder="Enter author name"
              className="input input-bordered w-full text-lg py-3 rounded-lg"
              required
            />
          </div>
          <div className="form-control flex-1">
            <label className="label text-lg">
              <span className="label-text">Category</span>
            </label>
            <select
              name="category"
              className="select select-bordered w-full text-lg py-3 rounded-lg"
              required
            >
              <option value="">Select a category</option>
              <option value="Novel">Novel</option>
              <option value="Thriller">Thriller</option>
              <option value="History">History</option>
              <option value="Drama">Drama</option>
              <option value="Sci-Fi">Sci-Fi</option>
            </select>
          </div>
        </div>

        <div className="form-control mb-4">
          <label className="label text-lg">
            <span className="label-text">Short Description</span>
          </label>
          <textarea
            name="description"
            placeholder="Write a brief description"
            rows="4"
            className="textarea textarea-bordered w-full text-lg py-3 rounded-lg"
            required
          ></textarea>
        </div>

        <div className="form-control mb-4">
          <label className="label text-lg">
            <span className="label-text">Rating (1-5)</span>
          </label>
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            step="0.1"
            placeholder="Enter rating"
            className="input input-bordered w-full text-lg py-3 rounded-lg"
            required
          />
        </div>

        <div className="form-control mt-6 mb-6">
          <button
            type="submit"
            className="btn btn-primary w-full py-3 text-lg rounded-lg"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
