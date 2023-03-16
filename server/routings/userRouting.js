//const middleware = require("../middleware/middleware.js");
const express = require("express");
const router = express.Router();
const controller = require("../apiControllers/userController.js");

router.get("/", controller.getUserById);

router.get("/byEmail/", controller.getUserByEmail);

router.post("/", controller.createUser);

router.put("/", controller.setUser);

router.delete("/", controller.deleteUser);

module.exports = router;