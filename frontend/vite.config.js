import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    host: true,
    port: 5173,
    allowedHosts: ["road2tech.onrender.com"],
    proxy: {
      "/api": {
        target: "https://road2tech-backend.onrender.com",
        secure: false,
      },
    },
  },
  plugins: [react(), tailwindcss()],
});
