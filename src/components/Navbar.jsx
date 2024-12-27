import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { SiBookstack } from "react-icons/si";
import { MdLibraryBooks, MdOutlineMapsHomeWork } from "react-icons/md";
import logo from '../assets/logo.png'

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("Sign-out successful");
      })
      .catch((error) => console.log("Error: ", error.message));
  };

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `btn mr-5 border-y-rose-500 ${isActive ? "bg-green-500 text-white" : ""}`
        }
      >
        <MdOutlineMapsHomeWork className="text-lg mr-2" /> Home
      </NavLink>

      <NavLink
        to="/AllBooks"
        className={({ isActive }) =>
          `btn mr-5 border-y-rose-500 ${isActive ? "bg-green-500 text-white" : ""}`
        }
      >
        <SiBookstack className="text-lg mr-2" /> All Books
      </NavLink>

      <NavLink
        to="/AddBook"
        className={({ isActive }) =>
          `btn mr-5 border-y-rose-500 ${isActive ? "bg-green-500 text-white" : ""}`
        }
      >
        <SiBookstack className="text-lg mr-2" /> Add Book
      </NavLink>

      <NavLink
        to="/BorrowedBooks"
        className={({ isActive }) =>
          `btn border-y-rose-500 ${isActive ? "bg-green-500 text-white" : ""}`
        }
      >
        <MdLibraryBooks className="text-lg mr-2" /> Borrowed Books
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden z-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <h2 className="text-3xl">
          </h2>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <h2 className="btn">
          Library Management System
        </h2>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex gap-4">
        {user ? (
          <>
            <div className="flex items-center gap-2">
              {user.photoURL && (
                <div className="avatar">

                </div>
              )}
              <span className="text-lg font-bold">{user.displayName || user.user}</span>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="User Avatar"
                    src={user?.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <span className="text-sm font-bold">{user.displayName || user.user}</span>
                </li>
                <li>
                  <button onClick={handleSignOut}>Logout</button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <Link to="/Login" className="btn">
              <AiOutlineLogin className="text-lg mr-2" /> Login
            </Link>
            <Link to="/RegisterPage" className="btn">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
