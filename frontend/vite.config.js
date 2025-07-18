import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    host: true, // allows binding to 0.0.0.0 (important for Render)
    port: parseInt(process.env.PORT) || 5173, // use Render's PORT or default
    proxy: {
      "/api": {
        target: "https://road2tech-backend.onrender.com",
        secure: false,
      },
    },
  },
  plugins: [react(), tailwindcss()],
});
