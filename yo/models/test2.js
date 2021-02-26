var mysql = require("mysql");
const { connect } = require("../routes");

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'testuser',
    password: 'fbehddls1',
    database: 'test'
});


class tess2 {
    constructor(req) {
        this.sql = "insert into test_table (id, password, name, age) values (?,?,?,?)";
        this.qu = [req.body.userId, req.body.userPW, req.body.userName, parseInt(req.body.userAge)];
        connection.query(this.sql, this.qu, function(err, result) {
            if (err) throw err;
            else console.log("haha");
        });
    }
}


module.exports = tess2;