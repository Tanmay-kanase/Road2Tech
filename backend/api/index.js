import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import path from "path";
import { fileURLToPath } from "url"; // ✅ NEW
import { dirname } from "path"; // ✅ NEW

const __filename = fileURLToPath(import.meta.url); // ✅ NEW
const __dirname = dirname(__filename); // ✅ NEW

dotenv.config();
connectDB();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Update for production URL if needed
    credentials: true,
  })
);

app.use(express.json());
app.use("/api/users", userRoutes);

// ✅ Serve frontend
app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
