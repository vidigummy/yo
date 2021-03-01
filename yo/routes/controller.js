var fs = require("fs");
var test_sql = require("../models/test");
var test2 = require("../models/test2");


exports.mainView = function(req, res) {
    var tess = new test_sql();
    console.log(tess.showAll());
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
    var a = new test2(req);
    var url = "localhost:3000/main";
    request({ url: url, followRedirect: false }, function(err, res, body) {
        console.log(res.headers.location);
    });


}

exports.deleteMovie = function(req, res) {
    fs.readFile("./views/delete.html", "utf-8", function(err, buf) {
        res.end(buf);
    });
}

exports.deleteWhat = function(req, res) {
    console.log(req);
}