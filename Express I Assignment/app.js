var express = require('express')
const superagent = require('superagent');
const { map } = require('rxjs/operators');
const { Observable } = require('rxjs');
const querystring = require('querystring')

var app = express()
app.set('strict routing', true)
app.set('x-powered-by', false)
app.set('case sensitive routing', true);
app.disable('etag')

var port = 8080

app.get('/users', function (req, res) {
  Observable.create(async observer => {
    const query = {
      results: req.query.results || 10,
      page: req.query.page || 1
    };
    const url = `https://randomuser.me/api/?${querystring.stringify(query)}`;
    const response = await superagent.get(url)
    observer.next(response.body)
    observer.complete()
  }).pipe(
    map(({ results }) => results),
    map(data => data.map(({ name }) => name).map(({ first, last }) => ({ first, last }))
    )
  ).subscribe(result => {
    res.status(200)
    res.set('Content-Type', 'application/json')
    res.set('Cache-Control', 'public, max-age=86400');
    res.links({
      next: 'https://randomuser.me/api/?results=20',
      last: 'https://randomuser.me/api/?results=30'
    })
    res.json({ result });
  }, err => res.end(),
    _ => res.end())
}).listen(port)

/* ----------------------------------------------------------------------------------------------------------------------------------------*/
/* without using rxjs*/
/* ----------------------------------------------------------------------------------------------------------------------------------------*/



// app.get('/users', function (request, response) {

//   superagent
//     .get('https://randomuser.me/api/?results=10')
//     .end((err, result) => {
//       if (err) throw err;

//       response.status(200)
//       response.set('Content-Type', 'application/json')
//       var data = result.body.results.flatMap(function (result) {
//         return [{ "firstname": result.name.first, "lastname": result.name.last }];
//       });

//       response.set('Cache-Control', 'public, max-age=86400');
//       response.links({
//         next: 'https://randomuser.me/api/?results=20',
//         last: 'https://randomuser.me/api/?results=30'
//       })
//       response.send(data)

//       response.end()
//     });


// }).listen(port)
