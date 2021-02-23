import connection from '../routes/controller';

class test {
    constructor() {
        this.sql = "select * from test_table";

    }
    showAll() {
        connection.query(this.sql, function(err, result) {
            console.log(result);
        });
    }
}

module.exports = test;