import axios from "axios";

const API = axios.create({
  // Vercel backend URL
  baseURL: "https://rime-project-jade.vercel.app/api",
  //  YE SABSE ZAROORI HAI:
  // Iske bina browser cookies ko backend tak nahi bhejega.
  withCredentials: true,
});

// 🔐 Interceptor (Optional now)
API.interceptors.request.use(
  (req) => {
    // Ab humein localStorage se token nikalne ki zaroorat nahi hai.
    // Kyunki browser 'token' cookie ko automatically headers mein bhej dega.

    return req;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 🛡️ Error Handling: Agar token expire ho jaye toh handle karein
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Agar backend 'Unauthorized' bole, toh samajho cookie expire ho gayi
      console.warn("Session expired. Redirecting to login...");
      // localStorage.removeItem("user"); // Agar user info store ki thi toh clean kar do
      // window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

export default API;
