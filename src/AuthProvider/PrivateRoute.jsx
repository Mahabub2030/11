import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {

  const { user, loding } = useContext(AuthContext)

  const location = useLocation()

  if (loding) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="w-24 h-24 border-8 border-t-8 border-gray-300 border-solid rounded-full animate-spin border-t-blue-500"></div>
    </div>
  }

  if (user) {
    return children;
  }

  return (
    <Navigate to='/login' state={location.pathname} replace='true'></Navigate>
  );
};

export default PrivateRoute;