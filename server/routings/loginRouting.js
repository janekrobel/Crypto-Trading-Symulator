const express = require("express");
const router = express.Router();
const controller = require("../apiControllers/loginController.js");
const coinModel = require("../models/coinModel.js");

router.get('/', async function(req, res) {
    let _coins = await coinModel.getAllCoins() 
    let slicedCoins = _coins.slice(0,4);
    res.render('login',{
        coins: slicedCoins
    });
});

router.post('/', controller.postLogin);

router.get('/link', controller.getLink);

module.exports = router;