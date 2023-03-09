const express = require('express')
const {Item} = require('../models/Item')
const router = express.Router()
router.use(express.json())

router.get("/", async (req, res, next) => {
    try {
      const item = await Item.findAll();
      res.send(item);
    } catch (error) {
      next(error);
    }
  });

  router.get("/:id", async (req, res, next) => {
    try {
      const item = await Item.findByPk(req.params.id);
      if (!item) {
        res.status(404).send("item not found")
      } else {
        res.status(200).json(item);
      }
    } catch (error) {
      next(error); 
    }
  });
  
  router.post('/', async (req, res) => {
    try {
      let newItem = await Item.create(req.body)
      res.send(newItem)
    } catch (error) {
      res.send(error)
    }
  });

  router.put('/:id', async (req, res) => {
    try {
      const updatedItem = await Item.findByPk(req.params.id)
      if (!updatedItem) {
        return res.status(404).send("item not found")
      }
      await updatedItem.update(req.body) 
      res.send(updatedItem)
    } catch (error) {
      res.send(error)
    }
  })

  router.delete('/:id', async (req, res) => {
    try {
      const deletedItem = await Item.findByPk(req.params.id)
      if (!deletedItem) {
        return res.status(404).send("item not found")
      }
      await deletedItem.destroy()
      res.send("item deleted successfully")
    } catch (error) {
      res.send(error)
    }
  })

module.exports = router;