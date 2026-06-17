const express = require("express");
const validateUser = require("../validators/userValidator");
const userService = require("../services/userService");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Users fetched successfully",
    data: userService.getAllUsers()
  });
});

router.post("/", validateUser, (req, res) => {
  const newUser = userService.createUser(req.body);

  res.status(201).json({
    message: "User created successfully",
    data: newUser
  });
});

router.put("/:id", validateUser, (req, res) => {
  const id = parseInt(req.params.id);

  const updatedUser = userService.updateUser(id, req.body);

  if (!updatedUser) {
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }

  res.json({
    message: "User updated successfully",
    data: updatedUser
  });
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const deleted = userService.deleteUser(id);

  if (!deleted) {
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }

  res.json({
    message: "User deleted successfully"
  });
});

module.exports = router;