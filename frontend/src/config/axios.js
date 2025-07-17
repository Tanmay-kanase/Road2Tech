// src/lib/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true, // optional: only if you use cookies/sessions
});

export default api;
