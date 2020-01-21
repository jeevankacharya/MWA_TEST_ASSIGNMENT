
const mongo= require('../mongo');

const {ObjectID} =require('mongodb');

let find= function(req,res,next){
    mongo.mongodatabase.collection('lectures').find().toArray(function(err,results){
        res.json(results);
    });
}

let findOne= function(req,res,next){
    let query = { "_id": ObjectID(req.params.id) };
    mongo.mongodatabase.collection('lectures').findOne(query, (err, result) => {
        if (err) return console.log(err);
        res.json(result);
    });
}

var addLecture = function (req, res, next) {
    mongo.mongodatabase.collection('lectures').insertOne(req.body, (err, result) => {
        if (err) return console.log(err);
        res.json(req.body);
    })
}

var deleteLecture = function (req, res, next) {
    var query = { "_id": ObjectID(req.params.id) };
    mongo.mongodatabase.collection('lectures').deleteOne(query, (err, result) => {
        if (err) return console.log(err)
        res.json({ message: "Deleted Sucessfully" })
    })
}

var search = function (req, res, next) {

    var query = { "lecture": req.params.q };
    mongo.mongodatabase.collection('lectures').find(query).toArray(function (err, results) {
        if (err) return console.log(err);
        res.json(results)
    })
}
module.exports={find: find, findOne: findOne, addLecture: addLecture, deleteLecture: deleteLecture, search: search}
