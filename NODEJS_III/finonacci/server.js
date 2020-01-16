// Create a **Reactive HTTP server** that receives a number passed in the request as query parameter as 
//following: `http://localhost:4000/?n=10` and returns a `JSON` object contains the Fibonacci number of `n`.  
// **Example**: `?n=10` should return a `JSON` object: `{fib: 55}`  

// **Note:** Calculating Fibonacci is considered an intense CPU work, design your code so you don't block the main event-loop of the master process. 

const { Subject } = require('rxjs')
const http = require('http')
const { fork } = require('child_process')
var url = require('url')
const subject = new Subject();
const querystring = require('querystring');


function computefib(reqres) {
    const parsed = url.parse(reqres.req.url);
    const query = querystring.parse(parsed.query);

    if (query.n == null) {
        reqres.res.end(JSON.stringify({ fib: "Invalid query" }))
    } else {
        const compute = fork('fibonacci.js')
        compute.send(query.n)
        compute.on('message', data => {
            reqres.res.end(JSON.stringify({ fib: data.toString() }))
        })
    }
}

subject.subscribe(computefib)


http.createServer((req, res) => {


    subject.next({ req: req, res: res });

}).listen(8080)


