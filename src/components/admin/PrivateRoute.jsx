// components/admin/PrivateRoute.jsx
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../../services/api";

const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await API.get("/auth/me"); // Humne ye route backend mein banaya tha
        console.log("Auth Response:", res.data);
        if (res.data.success) {
          setIsAuthenticated(true);
          setIsAdmin(res.data.user.role === "admin");
        }
      } catch (err) {
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

  if (isAuthenticated === null) return null; // Loader dikha sakte ho yahan

  // Agar login nahi hai toh login page par bhejo
  if (!isAuthenticated) return <Navigate to="/login" />;

  // Agar login hai par admin nahi hai, toh home ya 403 par bhejo
  if (!isAdmin) return <Navigate to="/" />;

  return children;
};

export default PrivateRoute;