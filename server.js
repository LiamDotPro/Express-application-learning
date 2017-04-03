/**
 * Created by li on 03/04/2017.
 */

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
    console.log("User requested something");
});

app.listen(3000);

console.log("Server started");