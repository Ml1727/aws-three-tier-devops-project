const express = require("express");

const router = express.Router();

const orders = [
  {
    id: 1,
    user: "Admin User",
    product: "Cloud Deployment Package",
    status: "Completed"
  },
  {
    id: 2,
    user: "Cloud User",
    product: "DevOps Monitoring Setup",
    status: "Pending"
  }
];

router.get("/", (req, res) => {
  res.json({
    message: "Orders fetched successfully",
    data: orders
  });
});

module.exports = router;