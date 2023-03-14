const middleware = require("../middleware/middleware.js");
const express = require("express");
const router = express.Router();
const controller = require("../controllers/postController.js");

router.get("/coins", controller.getAllCoins());

router.put("/", controller.setCoin());

router.get("/", controller.getCoinById()); 

router.delete("/", controller.deleteCoin()); 
