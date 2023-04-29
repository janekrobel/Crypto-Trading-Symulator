const middleware = require("../middleware/middleware.js");
const express = require("express");
const router = express.Router();
const controller = require("../apiControllers/userController.js");

router.get("/",middleware.bodyverifyToken, controller.getUserById);

router.get("/byEmail/",middleware.bodyverifyToken, controller.getUserByEmail);

router.post("/", controller.createUser);

router.post("/edit",middleware.bodyverifyToken, controller.setUser);

router.delete("/",middleware.bodyverifyToken, controller.deleteUser);

module.exports = router;