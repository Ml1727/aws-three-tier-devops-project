const express = require("express");

const router = express.Router();

const users = [
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

module.exports = router;