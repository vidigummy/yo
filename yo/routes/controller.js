var fs = require("fs");
var mysql = require("mysql");
var testsql = require("../models/test.js");


let connection = mysql.createConnection({
    host: 'localhost',
    user: 'testuser',
    password: 'fbehddls1',
    database: 'test'
});

exports.mainView = function(req, res) {
    fs.readFile("./views/index.html", "utf-8", function(err, buf) {
        res.end(buf);
    });
}