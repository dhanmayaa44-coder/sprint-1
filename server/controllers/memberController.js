
const Member = require("../models/Member");

// GET all members
const getMembers = async (req, res) => {
  try {
    const members = await Member.find();

    res.status(200).json({
      message: "Members retrieved successfully",
      count: members.length,
      members,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET one member by ID
const getMemberById = async (req, res) => {
  try {
    if (!Member.db.base.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid member ID" });
    }

    const member = await Member.findById(req.params.id);

    if (!member) {
      return res.status(404).json({ message: "Member not found" });
    }

    res.status(200).json({
      message: "Member retrieved successfully",
      member,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST: Create a member
const createMember = async (req, res) => {
  try {
    const { name, email, phone, plan } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({
        message: "Please provide name, email, and phone",
      });
    }

    const newMember = await Member.create({
      name,
      email,
      phone,
      plan,
    });

    res.status(201).json({
      message: "Member created successfully",
      member: newMember,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ message: "Email already exists" });
    }

    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }

    res.status(500).json({ message: error.message });
  }
};

// PUT: Update a member
const updateMember = async (req, res) => {
  try {
    if (!Member.db.base.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid member ID" });
    }

    const updatedMember = await Member.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedMember) {
      return res.status(404).json({ message: "Member not found" });
    }

    res.status(200).json({
      message: "Member updated successfully",
      member: updatedMember,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }

    res.status(500).json({ message: error.message });
  }
};

// DELETE: Delete a member
const deleteMember = async (req, res) => {
  try {
    if (!Member.db.base.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid member ID" });
    }

    const deletedMember = await Member.findByIdAndDelete(req.params.id);

    if (!deletedMember) {
      return res.status(404).json({ message: "Member not found" });
    }

    res.status(200).json({
      message: "Member deleted successfully",
      member: deletedMember,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getMembers,
  getMemberById,
  createMember,
  updateMember,
  deleteMember,
};
