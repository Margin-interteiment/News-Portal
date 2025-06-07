import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuth = localStorage.getItem("jwt-token") === "true";
  const location = useLocation();

  if (!isAuth) {
    return (
      <Navigate
        to="/login"
        state={{ from: location, error: "Need a log in" }}
        replace
      />
    );
  }

  return children;
};

export default ProtectedRoute;
