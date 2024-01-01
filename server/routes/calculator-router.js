const express = require('express');
let INVENTORY = require('../data/inventory-data');

const router = express.Router();

router.get('/', (req, res) => {
    res.send(INVENTORY);
});

// router.post('/', (req, res) => {
//     const newItem = req.body;
  
//     // create new ID
//     const lastId = INVENTORY[INVENTORY.length - 1].id;
//     // add new ID to the movie data
//     newItem.id = lastId + 1;
  
//     INVENTORY.push(newItem);
//     res.sendStatus(200);
//   });

module.exports = router;