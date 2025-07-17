import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./api/config/db.js";
import userRoutes from "./api/routes/userRoutes.js";
import path from "path";
dotenv.config();
connectDB();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173", // must be exact origin
    credentials: true, // allow cookies/auth headers
  })
);

app.use(express.json());

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.use(express.static(path.join(__dirname, "/client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});
