const express = require("express");
const cors = require("cors");

const requestLogger = require("./middleware/requestLogger");
const memberRoutes = require("./routes/memberRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(requestLogger);

// Home test route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Gym Management System Backend is running!",
  });
});

// Member API routes
app.use("/api/members", memberRoutes);

// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({
    message: "API route not found",
  });
});

module.exports = app;