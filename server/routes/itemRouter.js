const { Router } = require("express");
const express = require("express");
const router = express.Router();
const { Item } = require("../models/Item");
const { sequelize } = require("../db");
const app = require("../app");
const { Sauce } = require("../models");

router.get("/", async (req, res) => {
  try {
    const item = await Item.findAll();
    res.json(item);
  } catch (err) {
    console.log(err);
    res.status(404).send("An unexpected error occured retrieving items");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id);
    res.json(item);
  } catch (err) {
    console.log(err);
  }
});

module.exports = { router };
