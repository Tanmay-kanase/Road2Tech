import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
connectDB();

const app = express();
app.use(
  cors({
    origin: `${process.env.VITE_FRONTEND_URL}`, // exact origin of Vite dev server
    credentials: true, // allow credentials
  })
);
app.use(express.json());

app.use("/api/users", userRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
