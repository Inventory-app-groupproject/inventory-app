const express = require("express");
const router = express.Router();

// different model routers

router.use('/items' , require('./ItemRouter'))

module.exports = router;
