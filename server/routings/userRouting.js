const middleware = require("../middleware/middleware.js");
const express = require("express");
const router = express.Router();
const controller = require("../apiControllers/userController.js");
const multer = require('multer')
const storage = multer.memoryStorage();
const upload = multer({ storage: storage })


router.get("/",middleware.bodyverifyToken, controller.getUserById);

router.get("/byEmail/",middleware.bodyverifyToken, controller.getUserByEmail);

router.post("/", controller.createUser);

router.post("/edit",middleware.bodyverifyToken, upload.single('avatar'), controller.setUser);

router.delete("/",middleware.bodyverifyToken, controller.deleteUser);

module.exports = router;