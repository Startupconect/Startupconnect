const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db"); // Import your connectDB function
const authRoutes = require("./routes/auth");

dotenv.config(); // Load environment variables from .env file

const app = express();
app.use(cors());
app.use(express.json()); // Parse incoming JSON requests

// MongoDB Connection
connectDB(); // Call the connectDB function

// Routes
app.use("/api/auth", authRoutes); // Handle routes under /api/auth

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
