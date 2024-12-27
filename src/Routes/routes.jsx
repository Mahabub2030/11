// import { createBrowserRouter } from "react-router-dom";
// import Mainlayout from "../laouts/Mainlayout";
// import Home from "../Pages/Home";
// import EorrPage from "../Pages/EorrPage";
// import Login from "../Pages/Login";
// import RegisterPage from "../Pages/RegisterPage";
// import AddBook from "../components/AddBook"
// import PrivateRoute from "../AuthProvider/PrivateRoute";
// import Profile from "../components/Profile";
// import AllBooks from "../components/AllBooks";
// import UpdateBookPage from "../components/UpdateBookPage"
// import BookDetailsPage from "../components/BookDetailsPage";
// import BorrowedBooks from "../components/BorrowedBooks";
// import BookCategoriesPage from "../components/BookCategoriesPage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Mainlayout></Mainlayout>,
//     errorElement: <EorrPage></EorrPage>,
//     children: [
//       {
//         path: "/",
//         element: <Home></Home>,
//       },
//       {
//         path: "/login",
//         element: <Login></Login>
//       },


//       {
//         path: "/settings",
//         element: <settings></settings>
//       },
//       {
//         path: "/registerPage",
//         element: <RegisterPage></RegisterPage>
//       },
//       {
//         path: "/updateBook/:id", // Changed route to be dynamic with `:id`
//         element: (
//           <PrivateRoute>
//             <UpdateBookPage />
//           </PrivateRoute>
//         ),
//       },
//       {
//         path: "/AllBooks",
//         element: <PrivateRoute>
//         <AllBooks></AllBooks>
//        </PrivateRoute>
//       },
//       {
//         path: "/AddBook",
//         element: <PrivateRoute>
//         <AddBook></AddBook>
//        </PrivateRoute>
//       },
//       {
//         path: "/BookDetailsPage/:id", 
//         loader: async ({ params }) => {
//           return fetch(`http://localhost:3000/books/:id`)
//         },
//         element: (
//           <PrivateRoute>
//             <BookDetailsPage />
//           </PrivateRoute>
//         ),
//       },

//       {
//         path: "/BorrowedBooks",
//         element:
//           <PrivateRoute>
//            <BorrowedBooks></BorrowedBooks>
//           </PrivateRoute>
//       },
//       {
//         path: "/Profile",
//         element:
//           <PrivateRoute>
//             <Profile></Profile>
//           </PrivateRoute>
//       },
//       {
//                 path: "/BookCategoriesPage",
//                 element: <BookCategoriesPage />,
//                 loader: async () => {
//                   const response = await fetch(`${import.meta.env.VITE_API_URL}/books`);
//                   if (!response.ok) {
//                     throw new Error("Failed to load books");
//                   }
//                   return response.json();
//                 },
//       },
//     ]
//   },

// ]);

// export default router;
// // import { createBrowserRouter } from "react-router-dom";

// // import Home from "../Pages/Home";
// // import ErrorPage from "../Pages/ErrorPage";
// // import Mainlayout from "../Pages/Mainlayout";
// // import Login from "../Pages/Login";
// // import RegisterPage from "../Pages/RegisterPage";
// // import AddBook from "../components/AddBook";
// // import PrivateRoute from "../AuthProvider/PrivateRoute";
// // import Profile from "../components/Profile";
// // import AllBooks from "../components/AllBooks";
// // import UpdateBookPage from "../components/UpdateBookPage";
// // import BookDetailsPage from "../components/BookDetailsPage";
// // import BorrowedBooks from "../components/BorrowedBooks";
// // import BookCategoriesPage from "../components/BookCategoriesPage";

// // const router = createBrowserRouter([
// //   {
// //     path: "/",
// //     element: <Mainlayout></Mainlayout>,
// //     errorElement: <ErrorPage />,
// //     children: [
// //       { path: "/", element: <Home /> },
// //       { path: "/login", element: <Login /> },
// //       { path: "/registerPage", element: <RegisterPage /> },
// //       {
// //         path: "/updateBook/:id",
// //         element: (
// //           <PrivateRoute>
// //             <UpdateBookPage />
// //           </PrivateRoute>
// //         ),
// //       },
// //       {
// //         path: "/AllBooks",
// //         element: (
// //           <PrivateRoute>
// //             <AllBooks />
// //           </PrivateRoute>
// //         ),
// //       },
// //       {
// //         path: "/AddBook",
// //         element: (
// //           <PrivateRoute>
// //             <AddBook />
// //           </PrivateRoute>
// //         ),
// //       },
// //       {
// //         path: "/BookDetailsPage/:id",
// //         element: (
// //           <PrivateRoute>
// //             <BookDetailsPage />
// //           </PrivateRoute>
// //         ),
// //       },
// //       {
// //         path: "/BorrowedBooks",
// //         element: (
// //           <PrivateRoute>
// //             <BorrowedBooks />
// //           </PrivateRoute>
// //         ),
// //       },
// //       {
// //         path: "/Profile",
// //         element: (
// //           <PrivateRoute>
// //             <Profile />
// //           </PrivateRoute>
// //         ),
// //       },
// //       {
// //         path: "/BookCategoriesPage",
// //         element: <BookCategoriesPage />,
// //         loader: async () => {
// //           const response = await fetch(`${import.meta.env.VITE_API_URL}/books`);
// //           if (!response.ok) {
// //             throw new Error("Failed to load books");
// //           }
// //           return response.json();
// //         },
// //       },
// //     ],
// //   },
// // ]);

// // export default router;



// import { createBrowserRouter } from "react-router-dom";
// import Mainlayout from "../layouts/Mainlayout";
// import Home from "../Pages/Home";
// import ErrorPage from "../Pages/ErrorPage";
// import Login from "../Pages/Login";
// import RegisterPage from "../Pages/RegisterPage";
// import AddBook from "../components/AddBook";
// import PrivateRoute from "../AuthProvider/PrivateRoute";
// import Profile from "../components/Profile";
// import AllBooks from "../components/AllBooks";
// import UpdateBookPage from "../components/UpdateBookPage";
// import BookDetailsPage from "../components/BookDetailsPage";
// import BorrowedBooks from "../components/BorrowedBooks";
// import BookCategoriesPage from "../components/BookCategoriesPage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Mainlayout></Mainlayout>,
//     errorElement: <ErrorPage></ErrorPage>,
//     children: [
//       { path: "/", element: <Home></Home> },
//       { path: "/login", element: <Login></Login> },
//       { path: "/registerPage", element: <RegisterPage></RegisterPage> },
//       {
//         path: "/updateBook/:id",
//         element: (
//           <PrivateRoute>
//             <UpdateBookPage />
//           </PrivateRoute>
//         ),
//       },
//       {
//         path: "/AllBooks",
//         element: (
//           <PrivateRoute>
//             <AllBooks></AllBooks>
//           </PrivateRoute>
//         ),
//       },
//       {
//         path: "/AddBook",
//         element: (
//           <PrivateRoute>
//             <AddBook></AddBook>
//           </PrivateRoute>
//         ),
//       },
//       {
//         path: "/BookDetailsPage/:id",
//         loader: async ({ params }) => {
//           const response = await fetch(`http://localhost:3000/books/${params.id}`);
//           if (!response.ok) {
//             throw new Error("Failed to load book details");
//           }
//           return response.json();
//         },
//         element: (
//           <PrivateRoute>
//             <BookDetailsPage />
//           </PrivateRoute>
//         ),
//       },
//       {
//         path: "/BorrowedBooks",
//         element: (
//           <PrivateRoute>
//             <BorrowedBooks></BorrowedBooks>
//           </PrivateRoute>
//         ),
//       },
//       {
//         path: "/Profile",
//         element: (
//           <PrivateRoute>
//             <Profile></Profile>
//           </PrivateRoute>
//         ),
//       },
//       {
//         path: "/BookCategoriesPage",
//         element: <BookCategoriesPage />,
//         loader: async () => {
//           const response = await fetch(`${import.meta.env.VITE_API_URL}/books`);
//           if (!response.ok) {
//             throw new Error("Failed to load books");
//           }
//           return response.json();
//         },
//       },
//     ],
//   },
// ]);

// export default router;


// import { createBrowserRouter } from "react-router-dom";
// import Mainlayout from "../laouts/Mainlayout"
// import Home from "../Pages/Home";

// import Login from "../Pages/Login";
// import RegisterPage from "../Pages/RegisterPage";
// import AddBook from "../components/AddBook";
// import PrivateRoute from "../AuthProvider/PrivateRoute";
// import Profile from "../components/Profile";
// import AllBooks from "../components/AllBooks";
// import UpdateBookPage from "../components/UpdateBookPage";
// import BookDetailsPage from "../components/BookDetailsPage";
// import BorrowedBooks from "../components/BorrowedBooks";
// import BookCategoriesPage from "../components/BookCategoriesPage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Mainlayout></Mainlayout>,
//     // errorElement: <EorrPage></EorrPage>,
//     children: [
//       { path: "/", element: <Home></Home> },
//       { path: "/login", element: <Login></Login> },
//       { path: "/registerPage", element: <RegisterPage></RegisterPage> },
//       {
//         path: "/updateBook/:id",
//         element: (
//           <PrivateRoute>
//             <UpdateBookPage />
//           </PrivateRoute>
//         ),
//       },
//       {
//         path: "/AllBooks",
//         element: (
//           <PrivateRoute>
//             <AllBooks></AllBooks>
//           </PrivateRoute>
//         ),
//       },
//       {
//         path: "/AddBook",
//         element: (
//           <PrivateRoute>
//             <AddBook></AddBook>
//           </PrivateRoute>
//         ),
//       },
//       {
//         path: "/category/:id",
//         element: <BookCategoriesPage />,
//         loader: async ({ params }) => {
//           const response = await fetch(`${import.meta.env.VITE_API_URL}/books${params.id}`);
//           if (!response.ok) {
//             throw new Error("Failed to load books by category");
//           }
//           return response.json();
//         },
//       },
//       {
//         path: "/Book/:id",
//         element: <BookDetailsPage />,
//         loader: async ({ params }) => {
//           const response = await fetch(`${import.meta.env.VITE_API_URL}/books${params.id}`);
//           if (!response.ok) {
//             throw new Error("Failed to load books by category");
//           }
//           return response.json();
//         },
//         element: (
//           <PrivateRoute>
//             <BookDetailsPage />
//           </PrivateRoute>
//         ),
//       },
//       {
//         path: "/BorrowedBooks",
//         element: (
//           <PrivateRoute>
//             <BorrowedBooks></BorrowedBooks>
//           </PrivateRoute>
//         ),
//       },
//       {
//         path: "/Profile",
//         element: (
//           <PrivateRoute>
//             <Profile></Profile>
//           </PrivateRoute>
//         ),
//       },
//     ],
//   },
// ]);

// export default router;




import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../laouts/Mainlayout"
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import RegisterPage from "../Pages/RegisterPage";
import AddBook from "../components/AddBook";
import PrivateRoute from "../AuthProvider/PrivateRoute";
import Profile from "../components/Profile";
import AllBooks from "../components/AllBooks";
import BookDetailsPage from "../components/BookDetailsPage";
import BorrowedBooks from "../components/BorrowedBooks";
import BookCategoriesPage from "../components/BookCategoriesPage";
import EorrPage from "../Pages/EorrPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    errorElement: <EorrPage/>, // Corrected spelling and usage
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/registerPage", element: <RegisterPage /> },
      {
        path: "/AllBooks",
        element: (
          <PrivateRoute>
            <AllBooks />
          </PrivateRoute>
        ),
      },
      {
        path: "/AddBook",
        element: (
          <PrivateRoute>
            <AddBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/BookCategoriesPage/:id",
        element: <BookCategoriesPage />,
        loader: async ({ params }) => {
          try {
            const response = await fetch(
              `${import.meta.env.VITE_API_URL}/books/${params.id}`
            );
            if (!response.ok) {
              throw new Error("Failed to load books by category");
            }
            return await response.json();
          } catch (error) {
            return { error: error.message };
          }
        },
      },
      {
        path: "/BookDetailsPage/:id",
        element: (
          <PrivateRoute>
            <BookDetailsPage />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          try {
            const response = await fetch(
              `${import.meta.env.VITE_API_URL}/books/${params.id}`
            );
            if (!response.ok) {
              throw new Error("Failed to load book details");
            }
            return await response.json();
          } catch (error) {
            return { error: error.message };
          }
        },
      },
      {
        path: "/BorrowedBooks",
        element: (
          <PrivateRoute>
            <BorrowedBooks />
          </PrivateRoute>
        ),
      },
      {
        path: "/Profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;






















// import { createBrowserRouter } from "react-router-dom";
// import Mainlayout from "../laouts/Mainlayout";
// import Home from "../Pages/Home";
// import Login from "../Pages/Login";
// import RegisterPage from "../Pages/RegisterPage";
// import AddBook from "../components/AddBook";
// import PrivateRoute from "../AuthProvider/PrivateRoute";
// import Profile from "../components/Profile";
// import AllBooks from "../components/AllBooks";
// // import UpdateBookPage from "../components/UpdateBookPage";
// import BookDetailsPage from "../components/BookDetailsPage";
// import BorrowedBooks from "../components/BorrowedBooks"
// import BookCategoriesPage from "../components/BookCategoriesPage";
// import EorrPage from "../Pages/EorrPage"

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Mainlayout />,
//     errorElement: <EorrPage></EorrPage>, // Handles errors globally
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "/login", element: <Login /> },
//       { path: "/registerPage", element: <RegisterPage /> },
//       // {
//       //   path: "/updateBook/:id",
//       //   element: (
//       //     <PrivateRoute>
//       //       <UpdateBookPage />
//       //     </PrivateRoute>
//       //   ),
//       // },
//       {
//         path: "/AllBooks",
//         element: (
//           <PrivateRoute>
//             <AllBooks />
//           </PrivateRoute>
//         ),
//       },
//       {
//         path: "/AddBook",
//         element: (
//           <PrivateRoute>
//             <AddBook />
//           </PrivateRoute>
//         ),
//       },
//       // BookCategoriesPage Route
//       {
//         path: "/BookCategoriesPage/:id",
//         element: <BookCategoriesPage />,
//         loader: async ({ params }) => {
//           try {
//             console.log("Loader params (Category):", params);
//             const response = await fetch(
//               `${import.meta.env.VITE_API_URL}/books/${params.id}`
//             );
//             if (!response.ok) throw new Error("Failed to load books by category");
//             return await response.json();
//           } catch (error) {
//             console.error("Loader Error:", error.message);
//             throw error;
//           }
//         },
//       },
    
//       {
//         path: "/BookCategoriesPage/",
//         element: <BookCategoriesPage />,
//         loader: async ({ params }) => {
//           try {
//             console.log("Loader params (Category):", params);
//             const response = await fetch(
//               `http://localhost:3000/books/categories/${params.id}`
//             );
//             if (!response.ok) throw new Error("Failed to load books by category");
//             return await response.json();
//           } catch (error) {
//             console.error("Loader Error:", error.message);
//             throw error;
//           }
//         },
//       },
//       {
//         path: "/BookDetailsPage/:id",
//         element: (
//           <PrivateRoute>
//             <BookDetailsPage />
//           </PrivateRoute>
//         ),
//         loader: async ({ params }) => {
//           try {
//             console.log("Loader params (Details):", params);
//             const response = await fetch(
//               `${import.meta.env.VITE_API_URL}/books/${params.id}`
//             );
//             if (!response.ok) throw new Error("Failed to load book details");
//             return await response.json();
//           } catch (error) {
//             console.error("Loader Error:", error.message);
//             throw error;
//           }
//         },
//       },

//       {
//         path: "/BorrowedBooks",
//         element: (
//           <PrivateRoute>
//             <BorrowedBooks></BorrowedBooks>
//           </PrivateRoute>
//         ),
//       },
//       {
//         path: "/Profile",
//         element: (
//           <PrivateRoute>
//             <Profile />
//           </PrivateRoute>
//         ),
//       },
//     ],
//   },
// ]);

// export default router;


