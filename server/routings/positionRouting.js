const middleware = require("../middleware/middleware.js");
const express = require("express");
const router = express.Router();
const controller = require("../apiControllers/positionController.js");

//router.get("/", middleware, controller.getPositionsByUserEmail);

router.post("/", controller.createPositions);

router.put("/" ,controller.setPosition);

router.get("/", controller.closePosition);

module.exports = router;