var mysql = require("mysql");
const { connect } = require("../routes");

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'testuser',
    password: 'fbehddls1',
    database: 'test'
});


class tess2 {
    constructor(a) {
        this.sql = "insert into test_table (id, password, name, age) values (?,?,?,?)";
        console.log(typeof(a));
        /*
        this.qu = [req.body.uid, req.body.upassword, req.body.uname, parseInt(req.body.uage)];
        connection.query(this.sql, this.qu, function(err, result) {
            if (err) throw err;
            else console.log("haha");
        });
        */
    }
}