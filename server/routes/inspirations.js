'use strict';

const express = require('express');
const inspire = require('../../database/inspirations');
const router = express.Router();

router.route('/')
  .get((req, res) => {
    inspire.getRooms(function(data){
      res.send(data);
    })
  })
  .post((req, res) => {
    let _category = req.body.inspirations.category;
    //console.log(`value of body in inspirations.js => `, req.body);
    inspire.getImages(_category, function(data){
      res.send(data);
    });
  })

module.exports = router;
