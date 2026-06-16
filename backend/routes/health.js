const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "Backend health check successful"
  });
});

module.exports = router;