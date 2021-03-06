const { LOADIPHLPAPI } = require('dns');
var express = require('express');
var bodyParser = require('body-parser');


var app = express();
var methodOverride = require('method-override');
var http = require('http').createServer(app);
var port = 3000;

app.use(express.static(__dirname + "/views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

const routes = require("./routes/");
app.use(routes);


http.listen(port, function() {
    console.log('h');
});