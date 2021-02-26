var mysql = require("mysql");
const { connect } = require("../routes");

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'testuser',
    password: 'fbehddls1',
    database: 'test'
});


class test {
    constructor() {
        this.sql = "select * from test_table";
        connection.query(this.sql, function(err, result) {
            this.a = result;
        });

    }
    showAll() {
        connection.query(this.sql, function(err, result) {
            console.log(result);
        });
    }
}



module.exports = test;