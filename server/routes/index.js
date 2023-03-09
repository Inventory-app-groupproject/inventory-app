const express = require("express");
const app = require("../app");
const { itemRouter } = require("./itemRouter");
const router = express.Router();

// different model routers
<<<<<<< HEAD
router.use('/sauces', require('./sauces'));
router.use('/items' , require('./ItemRouter'))
=======
router.use("/sauces", require("./sauces"));
router.use("/items", itemRouter);
>>>>>>> 6fa2231b1475df6ec1c3f9862f8e27241fb8b9ea

module.exports = router;