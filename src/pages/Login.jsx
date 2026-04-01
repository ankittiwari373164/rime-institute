import { useState } from "react";
import API from "../services/api"; 
export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 👈 2. Ab url ki zaroorat nahi, endpoint decide karein
    const endpoint = isLogin ? "/auth/login" : "/auth/register";

    try {
      // 👈 3. fetch ki jagah API instance use karein
      const res = await API.post(endpoint, formData);
      
      const data = res.data; // Axios mein data 'res.data' mein hota hai

      alert(data.message || "Success");

      // redirect after login
      if (isLogin) {
        // Agar admin hai toh dashboard bhej sakte ho, warna home
        if (data.user?.role === "admin") {
           window.location.href = "/admin/dashboard";
        } else {
           window.location.href = "/";
        }
      } else {
        setIsLogin(true);
      }

    } catch (error) {
      // Axios errors handle karne ka tarika
      const errorMessage = error.response?.data?.message || "Server error";
      alert(errorMessage);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C9A961]"
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C9A961]"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C9A961]"
          />

          <button
            type="submit"
            className="w-full bg-[#C9A961] text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-[#C9A961] font-semibold cursor-pointer ml-1"
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}