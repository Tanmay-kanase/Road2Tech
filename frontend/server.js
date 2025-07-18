// server.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000; // Use Render's PORT or a default for local dev

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, "./dist")));

// Handle client-side routing by serving index.html for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./dist", "index.html"));
});

app.listen(port, "0.0.0.0", () => {
  // Crucially, bind to '0.0.0.0'
  console.log(`Server listening on port ${port}`);
});
