const userService = require("../services/userService");

function getUsers(req, res) {
  res.json({
    message: "Users fetched successfully",
    data: userService.getAllUsers()
  });
}

function createUser(req, res) {
  const newUser = userService.createUser(req.body);

  res.status(201).json({
    message: "User created successfully",
    data: newUser
  });
}

function updateUser(req, res) {
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
}

function deleteUser(req, res) {
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
}

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser
};