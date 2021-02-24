var mysql = require("mysql");

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
        connection.query(sql, function(err, result) {
            return result;
        });
    }
}

module.exports = test;