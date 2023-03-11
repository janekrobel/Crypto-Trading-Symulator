const middleware = require("../middleware/middleware.js");
const express = require("express");
const router = express.Router();
const controller = require("../controllers/postController.js");

router.get("/", controller.getAllCoins());

router.put("/price", controller.setPrice()); //check if it is server

router.put("/volume", controller.setVolume()); //check if it is server
 
router.put("/marketcap", controller.setMarketCap()); //check if it is server

router.put("/change", controller.setMarketCap()); //check if server

router.get("/:id", controller.getCoinById()); 
