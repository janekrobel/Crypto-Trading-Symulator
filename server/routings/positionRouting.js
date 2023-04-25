const middleware = require("../middleware/middleware.js");
const express = require("express");
const router = express.Router();
const controller = require("../apiControllers/positionController.js");

// router.get("/", middleware.bodyverifyToken, controller.getPositionsByUserEmail);

router.post("/",middleware.bodyverifyToken, controller.createPositions);

router.put("/",middleware.bodyverifyToken,controller.setPosition);

router.get("/", middleware.bodyverifyToken, controller.closePosition);

module.exports = router;