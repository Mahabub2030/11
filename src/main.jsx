import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './Routes/routes.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import { ToastContainer } from 'react-bootstrap';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <ToastContainer/>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
