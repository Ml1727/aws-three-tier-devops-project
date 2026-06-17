const express = require("express");
const validateUser = require("../validators/userValidator");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/", userController.getUsers);

router.post("/", validateUser, userController.createUser);

router.put("/:id", validateUser, userController.updateUser);

router.delete("/:id", userController.deleteUser);

module.exports = router;