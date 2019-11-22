var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./hackathon.db');

db.exec("CREATE TABLE IF NOT EXISTS test (name TEXT); INSERT INTO test VALUES ('allo');");


app.get('/', function (req, res) {
    db.get("SELECT * FROM test", [], (err, row) => {
        if (err)
            res.send(err.stack);
        else
            res.send(row.name);
    });
});

app.listen(3000);