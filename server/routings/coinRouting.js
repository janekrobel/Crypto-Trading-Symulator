//const middleware = require("../middleware/middleware.js");
const express = require("express");
const router = express.Router();
const controller = require("../apiControllers/coinController.js");

router.get("/coins", controller.getAllCoins);

router.put("/", controller.setCoin);

router.get("/", controller.getCoinById); 

router.delete("/", controller.deleteCoin); 

module.exports = router;