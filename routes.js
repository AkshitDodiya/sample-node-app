const express = require('express');
const req = require('express/lib/request');
// const { path } = require('./app');
const todos = require("./todos");
const path = require('path')

const router = express.Router();
// app.use(express.static(__dirname + '/assets'));



router.get("/", function(req, res) {
  // res.sendFile('index.html');
  res.sendFile(path.join(__dirname +'/index.html'));
});

router.get("/todos", function(req, res) {
  res.json(todos);
});


module.exports = router;
