const express=require('express');
const bodyParser=require('body-parser');
var lectureRouter=require('./routes/lectures');
const mongo= require('./mongo');

let app =express();

let port =3030;

app.listen(port);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/lectures',lectureRouter);

module.exports=app;
