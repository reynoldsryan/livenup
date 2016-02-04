'use strict';

const express = require('express');
const auth = require('./../auth');
const space = require('../../database/spaces');
const plant = require('../../database/plants');
const jwt = require('jwt-simple');

const router = express.Router();

router.route('/')
  .get(auth.checkUser, (req, res) => {
    let _token = req.headers.token;
    let _decoded = jwt.decode(_token, secret.salt);
    let _user = _decoded.email;
    
    space.find(_user, function(data){
      res.send(data);
    });
  })
  .post(auth.checkUser, (req, res) => {
    let _token = req.headers.token;
    let _decoded = jwt.decode(_token, secret.salt);

    let _space_name = req.body.space._space_name;
    let _space_useremail = _decoded.email;
    let _space_image = req.body.space.space_image;
    let _category = req.body.space.category;
    let _light = req.body.space.light;
    let _humidity = req.body.space.humidity;
    let _temperature = req.body.space.temperature;
    let _plants = req.body.space.plants;

    space.add([_space_name, _space_useremail, _space_image, _category, _light, _humidity, _temperature, _plants], function(data){
      res.send(data);
    });
  })
  .put(auth.checkUser, (req, res) => {
    let _token = req.headers.token;
    let _decoded = jwt.decode(_token, secret.salt);

    let _id = req.body.space.id;
    let _space_name = req.body.space._space_name;
    let _space_useremail = _decoded.email;
    let _space_image = req.body.space.space_image;
    let _category = req.body.space.category;
    let _light = req.body.space.light;
    let _humidity = req.body.space.humidity;
    let _temperature = req.body.space.temperature;
    let _plants = req.body.space.plants;

    space.update(_id, [_space_name, _space_useremail, _space_image, _category, _light, _humidity, _temperature, _plants], function(data) {
      res.send(data);
    });
  })
  .delete(auth.checkUser, (req, res) => {
    console.log('ln 39: in route/spaces DELETE');
    let _id = req.query.id;

    space.remove(_id, function(data) {
      res.send(data);
    });
  });



module.exports = router;
