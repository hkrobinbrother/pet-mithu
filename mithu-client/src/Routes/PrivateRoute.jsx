import { useContext } from "react";
import { Navigate, useLocation,  } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  

  // ⏳ loading state (important)
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner text-white"></span>
      </div>
    );
  }

  // ❌ if not logged in
  if (!user) {
    return <Navigate to="/login" state={location.pathname} replace />;
  }

  // ✅ if logged in
  return children;
};

export default PrivateRoute;
