var mysql = require("mysql");
const { connect } = require("../routes");
var bodyParser = require('body-parser');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'testuser',
    password: 'fbehddls1',
    database: 'test'
});


class tess2 {
    constructor(req) {
        this.sql = "insert into test_table (id, password, name, age) values (?,?,?,?)";
        this.qu = [req.body.uid, req.body.upassword, req.body.uname, req.body.uage];
        connection.query(this.sql, this.qu, function(err, result) {
            if (err) throw err;
            else console.log("haha");
        });
    }
}

module.exports = tess2;