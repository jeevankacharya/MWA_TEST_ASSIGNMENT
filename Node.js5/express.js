var express = require('express')
const superagent = require('superagent');
const { flatMap, mergeMap, switchMap, map ,toArray } = require('rxjs/operators');
const { from, of } = require('rxjs');


var app = express()
app.set('strict routing', true)
app.set('x-powered-by', false)
app.set('case sensitive routing', true);
app.disable('etag')

var port = 8080

app.get('/users', function (request, response) {

  superagent
    .get('https://randomuser.me/api/?results=10')
   .end((err, result) => {
       if (err) throw err;

      response.status(200)
      response.set('Content-Type', 'application/json')
      var data = result.body.results.flatMap(function (result) {
          return [{ "firstname": result.name.first, "lastname": result.name.last }];
      });
      
      response.set('Cache-Control', 'public, max-age=86400');
      response.links({
          next: 'https://randomuser.me/api/?results=20',
          last: 'https://randomuser.me/api/?results=30'
      })
      response.send(data)

      response.end()
    });


}).listen(port)