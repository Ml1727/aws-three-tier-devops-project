const express = require("express");
const validateUser = require("../validators/userValidator");

const router = express.Router();

let users = [
  {
    id: 1,
    name: "Admin User",
    role: "DevOps Engineer"
  },
  {
    id: 2,
    name: "Cloud User",
    role: "AWS Engineer"
  }
];

router.get("/", (req, res) => {
  res.json({
    message: "Users fetched successfully",
    data: users
  });
});

router.post("/", validateUser, (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    role: req.body.role
  };

  users.push(newUser);

  res.status(201).json({
    message: "User created successfully",
    data: newUser
  });
});

router.put("/:id", validateUser, (req, res) => {
  const id = parseInt(req.params.id);

  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  user.name = req.body.name;
  user.role = req.body.role;

  res.json({
    message: "User updated successfully",
    data: user,
  });
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const userExists = users.some((u) => u.id === id);

  if (!userExists) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  users = users.filter((u) => u.id !== id);

  res.json({
    message: "User deleted successfully",
  });
});

module.exports = router;