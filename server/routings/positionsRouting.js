const middleware = require("../middleware/middleware.js");
const express = require("express");
const router = express.Router();
const controller = require("../controllers/postController.js");

router.get("/:id", controller.getPositionsByUserId());

router.post("/", middleware, controller.createPositions());

router.delete("/", middleware, controller.closePosition());
