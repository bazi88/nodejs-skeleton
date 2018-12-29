var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db/db');
var index = require('./routes/index');

var app = express();
app.use('/', index);

module.exports = app;