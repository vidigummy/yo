var fs = require("fs");
var test_sql = require("../models/test");


exports.mainView = function(req, res) {
    var tess = new test_sql();
    var a = tess.showAll();
    console.log(typeof(a));
    //var a = tess.showAll();
    //console.log(a);
    fs.readFile("./views/index.html", "utf-8", function(err, buf) {
        res.end(buf);
    });
}