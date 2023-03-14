const middleware = require("../middleware/middleware.js");
const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController.js");

router.get("/", controller.getUserById());

router.get("/byEmail/", controller.getUserByEmail());

router.post("/", controller.createUser());

router.put("/",middleware, controller.setUser());

router.delete("/", middleware, controller.deleteUser());