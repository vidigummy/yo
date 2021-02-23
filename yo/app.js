const { LOADIPHLPAPI } = require('dns');
var express = require('express');
var mysql = require('mysql');

var app = express();
var http = require('http').createServer(app);
var port = 3000;

app.use(express.static(__dirname + "/views"));

const routes = require("./routes/");
app.use(routes);


http.listen(port, function() {
    console.log('h');
});