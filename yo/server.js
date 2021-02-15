var http = require('http');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }));


function send404Message(response) {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.write("404 ERROR...");
    response.end();
}

app.get("/", function(req, res) {
    console.log(2);
    res.writeHead("200", { "Content-Type": "text/html;charset=utf8" });
    fs.createReadStream('./index.html');
    res.sendfile(path.join(__dirname, 'index.html'));
});

app.post("/login", function(req, res) {
    console.log("user!");
    var uld = req.param("uid");
    console.log(uld);
});

http.createServer(app).listen(3000, function() {
    console.log("start");
});