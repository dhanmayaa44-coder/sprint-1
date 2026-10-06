const express = require("express");

const app = express();

// Middleware
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "Gym Management System Backend is running successfully!"
  });
});

module.exports = app;