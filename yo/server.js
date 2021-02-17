var http = require('http');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');
var mysql = require('mysql');


var app = express();
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'fbehddls147!',
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
    var sql = "INSERT INTO test_table (id, password, name, age) VALUES(?, ?, ?, ?)";
    var params = ["rjinsa98", "fbehddls1", "Ryu", 26];
    connection.query(sql, params, function(err, rows, fields) {
        if (err) {
            console.log("fucked...");
        } else {
            console.log("됐다 시팔");
        }
    });
    fs.readFile('a.html', function(error, data) {
        if (error) {
            console.log(error);
        } else {
            res.writeHead(200, { 'Content_Type': 'text/html' });
            res.end(data);
        }
    });
});

app.get('/a.html', function(req, res) {
    var sql = "SELECT * FROM test_table";
    connection.query(sql, function(err, rows, fields) {
        if (err) {
            console.log("fucked...");
        } else {
            console.log("됐다 시팔");
        }
    });

    fs.readFile('a.html', function(error, data) {
        if (error) {
            console.log(error);
        } else {
            res.writeHead(200, { 'Content_Type': 'text/html' });
            res.end(data);
        }
    });
});