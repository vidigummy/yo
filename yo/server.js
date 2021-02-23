var http = require('http');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');
var mysql = require('mysql');


var app = express();
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'testuser',
    password: 'fbehddls1',
    database: 'test'
});

try {
    connection.connect();
    console.log("뙜다");
} catch (error) {
    console.log("흠");
}

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(3000, function() {
    console.log("server start");
});


app.get('/', function(req, res) {
    res.json({ hi: 1, });
});



app.post('/:id', function(req, res) {
    res.json({ ryu: 2, });
});

















/*
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
    var sql = "INSERT INTO test_table (id, password, name, age) VALUES (?,?,?,?)";
    var par = [req.body.uid, req.body.upw, req.body.uname, Number(req.body.uage)];

    connection.query(sql, par, function(err, result) {
        if (err) {
            throw (err);
        } else {
            console.log("yes");
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
    connection.query(sql, function(err, result) {
        if (err) {
            throw (err);
        } else {
            console.log(result);
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
*/