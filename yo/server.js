var http = require('http');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');
var mysql = require('mysql');


var app = express();
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'testuser',
    password: 'fbehddls1',
    database: 'test'
});

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }));
app.listen(3000, function() {
    console.log("server start");
});

app.get('/', function(req, res) {
    fs.readFile('index.html', function(error, data) {
        if (error) {
            console.log(error);
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});

app.get('/index.html', function(req, res) {
    fs.readFile('index.html', function(error, data) {
        if (error) {
            console.log(error);
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});

app.post('/login', function(req, res) {
    fs.readFile('a.html', function(error, data) {
        if (error) {
            console.log(error);
        } else {
            res.writeHead(200, { 'Content_Type': 'text/html' });
            res.end(data);
        }
    });
});

app.get('/a', function(req, res) {
    fs.readFile('a.html', function(error, data) {
        if (error) {
            console.log(error);
        } else {
            res.writeHead(200, { 'Content_Type': 'text/html' });
            res.end(data);
        }
    });
});