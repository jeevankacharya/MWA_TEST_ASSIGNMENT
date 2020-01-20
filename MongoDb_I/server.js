const express = require('express');
const bodyParser = require('body-parser')
var lectureRouter = require('./routes/lectures')
const mongo = require('./mongo')

var app = express();

app.listen(8080);



app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json()); //for json validator

app.use('/lectures', lectureRouter)

module.exports = app;

