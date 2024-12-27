import React, { useContext } from "react";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const { signInUser, signInWithGoogle, signInwithGithube } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGithubSignIn = () => {
    signInwithGithube()
      .then((result) => {
        toast.success("GitHub login successful!");
        navigate(from, { replace: true });
        console.log("User:", result.user);
      })
      .catch((error) => {
        console.error("GitHub Login Error:", error.message);
        toast.error("GitHub login failed!");
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        toast.success("Google login successful!");
        navigate(from, { replace: true });
        console.log("User:", result.user);
      })
      .catch((error) => {
        console.error("Google Login Error:", error.message);
        toast.error("Google login failed!");
      });
  };

  const handleEmailLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        toast.success("Login successful!");
        navigate(from, { replace: true });
        console.log("User:", result.user);
        e.target.reset();
      })
      .catch((error) => {
        console.error("Email Login Error:", error.message);
        toast.error("Login failed! Please check your credentials.");
      });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-indigo-800">
      <ToastContainer />
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 space-y-5">
        <h1 className="text-2xl font-bold text-center text-gray-700">Login</h1>
        <form onSubmit={handleEmailLogin} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full mb-4"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered w-full mb-4"
            required
          />
          <button type="submit" className="btn btn-primary w-full">
            Sign in
          </button>
        </form>
        <div className="text-center my-4">
          <a href="#" className="text-sm text-blue-500 hover:underline">
            Forgot Password?
          </a>
        </div>
        <div className="divider">or continue with</div>
        <div className="flex justify-center gap-4">
          <button className="btn btn-outline btn-circle" onClick={handleGoogleLogin}>
            <FaGoogle />
          </button>
          <button className="btn btn-outline btn-circle">
            <FaFacebook />
          </button>
          <button onClick={handleGithubSignIn} className="btn btn-outline btn-circle">
            <FaGithub />
          </button>
        </div>
        <p className="text-center mt-4 text-sm">
          Don’t have an account?{" "}
          <Link to="/registerPage" className="text-blue-500 hover:underline">
            Register for free
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
