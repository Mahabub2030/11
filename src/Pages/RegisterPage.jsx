import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { createUser, signInWithGoogle } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        toast.success("Logged in with Google successfully!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`);
      });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      return toast.error(
        "Password must include at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
      );
    }

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match!");
    }

    // Create user
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // Update user profile with additional details
        user.updateProfile({ displayName: name, photoURL: photoURL });

        form.reset();
        Swal.fire({
          icon: "success",
          title: "Account Created Successfully!",
          text: "Welcome to our platform.",
          confirmButtonText: "OK",
        });
        navigate("/");
      })
      .catch((error) => {
        toast.error(`Registration failed: ${error.message}`);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-blue-800 flex items-center justify-center">
      <div className="flex w-4/5 max-w-6xl shadow-lg rounded-lg overflow-hidden bg-white">
        {/* Left Section - Form */}
        <div className="sm:w-full lg:w-1/2 mx-auto p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Create Account</h1>
          <form onSubmit={handleRegister} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="input input-bordered w-full"
              required
            />
            <input
              type="url"
              name="photoURL"
              placeholder="Photo URL"
              className="input input-bordered w-full"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered w-full"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="input input-bordered w-full"
              required
            />
            <button className="btn btn-primary w-full">Create</button>
          </form>
          <div className="divider my-4">Or</div>
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline btn-primary w-full flex items-center justify-center"
          >
            <FaGoogle className="mr-2" /> Sign up with Google
          </button>
          <p className="text-center text-sm text-gray-600 mt-4">
            Already a member?{" "}
            <Link to="/login" className="text-blue-500 underline">
              Login
            </Link>
          </p>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default RegisterPage;
