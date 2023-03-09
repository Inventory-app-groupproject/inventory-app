const express = require("express");
const app = require("../app");
const { itemRouter } = require("./itemRouter");
const router = express.Router();

// different model routers
router.use('/sauces', require('./sauces'));
router.use('/items' , require('./ItemRouter'))
router.use("/sauces", require("./sauces"));

module.exports = router;