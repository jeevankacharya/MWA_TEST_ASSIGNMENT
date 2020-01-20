const MongoClient = require('mongodb').MongoClient
const client = new MongoClient('mongodb://localhost:27017', { useUnifiedTopology: true })

var database;

client.connect(function (err) {
  exports.mongodatabase = client.db('homework07')
  console.log("Running")
})
