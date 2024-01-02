const express = require('express');
let calculations = require('../data/calculations-data');

const router = express.Router();

router.get('/', (req, res) => {
    res.send(calculations);
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