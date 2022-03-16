const express = require("express");
const routes = require("./routes");

// App
const app = express();
app.use(express.static(__dirname + '/assets'));

app.use('/', routes);

module.exports = app;