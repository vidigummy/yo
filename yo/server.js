var http = require('http');
var fs = require('fs');
var express = require('express');

var app = express();
app.use(express.static(path.join(__dirname, 'index')))

function send404Message(response) {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.write("404 ERROR...");
    response.end();
}