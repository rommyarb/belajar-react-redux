var express = require('express');
var router = express.Router();

router.post('/fetchItem', (req, res) => {
  var ItemBelanja = require('../models/itemBelanja_model');
  ItemBelanja.find((err, items) => {
    if (!err) {
      res.status(200).json(items);
    } else {
      res.status(500).send(err);
    }
  })
})

router.post('/addItem', async (req, res) => {
  try {
    var ItemBelanja = require('../models/itemBelanja_model');
    var data = new ItemBelanja({ title: req.body.item });
    var add = await data.save();
    if (add) {
      res.status(200).json({
        message: `${req.body.item} added to collection.`
      });
    } else {
      res.status(500).json({ data: add });
    }
  } catch (e) {
    res.status(500).json({
      message: e
    });
  }
})

module.exports = router;