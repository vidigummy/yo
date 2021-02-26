var fs = require("fs");
var test_sql = require("../models/test");
var test2 = require("../models/test2");

exports.mainView = function(req, res) {
    var tess = new test_sql();
    fs.readFile("./views/index.html", "utf-8", function(err, buf) {
        res.end(buf);
    });
}

exports.movieView = function(req, res) {
    fs.readFile("./views/movies.html", "utf-8", function(err, buf) {
        res.end(buf);
    });
}

exports.movieMake = function(req, res) {
    var tes = new test2(req);
    fs.readFile("./views/index.html", "utf-8", function(err, buf) {
        res.end(buf);
    });
}