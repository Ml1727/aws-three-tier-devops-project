const express = require("express");

const router = express.Router();

const products = [
  {
    id: 1,
    name: "Cloud Deployment Package",
    price: 499
  },
  {
    id: 2,
    name: "DevOps Monitoring Setup",
    price: 299
  }
];

router.get("/", (req, res) => {
  res.json({
    message: "Products fetched successfully",
    data: products
  });
});

module.exports = router;