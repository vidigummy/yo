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
            return toString(typeof(result));
        });
    }
}

class tess2 {
    constructor(id, password, name, age) {
        this.sql = "insert into test_table (id, password, name, age) values (?,?,?,?)";
        this.qu = { id, password, name, age };
        connection.query(this.sql, this.qu, function(err, result) {
            if (err) throw err;
            else console.log("haha");
        });
    }
}

module.exports = test;