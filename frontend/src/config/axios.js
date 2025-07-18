// src/lib/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URI,
  withCredentials: true, // optional: only if you use cookies/sessions
});

export default api;
