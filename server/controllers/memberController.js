const members = [
  {
    id: "1",
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    phone: "9876543210",
    plan: "Premium",
  },
];

// GET all members
const getMembers = (req, res) => {
  res.status(200).json({
    message: "Members retrieved successfully",
    count: members.length,
    members,
  });
};

// GET one member by ID
const getMemberById = (req, res) => {
  const member = members.find((item) => item.id === req.params.id);

  if (!member) {
    return res.status(404).json({ message: "Member not found" });
  }

  res.status(200).json({
    message: "Member retrieved successfully",
    member,
  });
};

// POST: Create a member
const createMember = (req, res) => {
  const { name, email, phone, plan } = req.body;

  if (!name || !email || !phone || !plan) {
    return res.status(400).json({
      message: "Please provide name, email, phone, and plan",
    });
  }

  const newMember = {
    id: String(Date.now()),
    name,
    email,
    phone,
    plan,
  };

  members.push(newMember);

  res.status(201).json({
    message: "Member created successfully",
    member: newMember,
  });
};

// PUT: Update a member
const updateMember = (req, res) => {
  const member = members.find((item) => item.id === req.params.id);

  if (!member) {
    return res.status(404).json({ message: "Member not found" });
  }

  const { name, email, phone, plan } = req.body;

  if (name !== undefined) member.name = name;
  if (email !== undefined) member.email = email;
  if (phone !== undefined) member.phone = phone;
  if (plan !== undefined) member.plan = plan;

  res.status(200).json({
    message: "Member updated successfully",
    member,
  });
};

// DELETE: Delete a member
const deleteMember = (req, res) => {
  const index = members.findIndex((item) => item.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: "Member not found" });
  }

  const deletedMember = members.splice(index, 1)[0];

  res.status(200).json({
    message: "Member deleted successfully",
    member: deletedMember,
  });
};

module.exports = {
  getMembers,
  getMemberById,
  createMember,
  updateMember,
  deleteMember,
};