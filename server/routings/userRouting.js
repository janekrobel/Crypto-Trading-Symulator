const middleware = require("../middleware/middleware.js");
const express = require("express");
const router = express.Router();
const controller = require("../controllers/postController.js");

router.get("/:id", controller.getUserById());

router.get("/byEmail/:email", controller.getUserByEmail());

router.post("/", controller.createUser());

router.post("/balance",middleware, controller.getUserBalance());

router.put("/balance",middleware, controller.setUserBalance());