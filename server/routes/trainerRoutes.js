
const express = require("express");
const router = express.Router();

const {
  createTrainer,
  getTrainers,
  getTrainerById,
  updateTrainer,
  deleteTrainer,
} = require("../controllers/trainerController");

// Create Trainer
router.post("/", createTrainer);

// Get All Trainers
router.get("/", getTrainers);

// Get Trainer By ID
router.get("/:id", getTrainerById);

// Update Trainer
router.put("/:id", updateTrainer);

// Delete Trainer
router.delete("/:id", deleteTrainer);

module.exports = router;
