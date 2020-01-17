const http = require('http');
const url = require('url');
const {fork} = require("child_process");

const port = 4000;
http.createServer((req,res)=>{
    const num=url.parse(req.url,true).query.n;

    const childProcess=fork("fibonacci.js");
    childProcess.on("message",r=>{
        const obj ={fib:r};
        res.end(JSON.stringify(obj));
    });
}).listen(port);