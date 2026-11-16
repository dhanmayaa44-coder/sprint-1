
const Trainer = require("../models/Trainer");

// Create Trainer
exports.createTrainer = async (req, res) => {
  try {
    const trainer = await Trainer.create(req.body);
    res.status(201).json(trainer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get All Trainers
exports.getTrainers = async (req, res) => {
  try {
    const trainers = await Trainer.find();
    res.status(200).json(trainers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Trainer By ID
exports.getTrainerById = async (req, res) => {
  try {
    const trainer = await Trainer.findById(req.params.id);

    if (!trainer) {
      return res.status(404).json({ message: "Trainer not found" });
    }

    res.status(200).json(trainer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update Trainer
exports.updateTrainer = async (req, res) => {
  try {
    const trainer = await Trainer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!trainer) {
      return res.status(404).json({ message: "Trainer not found" });
    }

    res.status(200).json(trainer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete Trainer
exports.deleteTrainer = async (req, res) => {
  try {
    const trainer = await Trainer.findByIdAndDelete(req.params.id);

    if (!trainer) {
      return res.status(404).json({ message: "Trainer not found" });
    }

    res.status(200).json({ message: "Trainer deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
