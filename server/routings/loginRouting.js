const express = require("express");
const router = express.Router();
const controller = require("../apiControllers/loginController.js");

router.get('/', function(req, res) {
    res.render('login');
});

router.post('/', controller.postLogin);

router.get('/link', controller.getLink);

module.exports = router;