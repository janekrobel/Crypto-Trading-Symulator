const middleware = require("../middleware/middleware.js");
const express = require("express");
const router = express.Router();
const controller = require("../apiControllers/coinController.js");

router.get("/coins",middleware.bodyverifyToken, controller.getAllCoins);

router.put("/",middleware.bodyverifyToken, controller.setCoin);

router.get("/",middleware.bodyverifyToken, controller.getCoinById);

router.delete("/",middleware.bodyverifyToken, controller.deleteCoin); 

module.exports = router;