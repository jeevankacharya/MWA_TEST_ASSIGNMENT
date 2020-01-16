// Create a web server that's going to send a response of big file (bigger than 500MB) to any client that sends a request to
//    your specified server:port.
// Solve this question in three different ways and inspect the loading time in the browser, try to send many requests at the 
//  same time to observe performance differences, and write down your observations.

// Use readFileSync
// Use readFile
// Use streams API



var http = require('http'),
    fileSystem = require('fs'),
    path = require('path');

//Use readFile
http.createServer(function (req, res) {

    var filePath = path.join(__dirname, 'big.file');
    fileSystem.readFile(filePath, { encoding: 'utf-8' }, function (err, data) {
        if (err) throw err;
        res.write(data)
        res.end()
    })
}).listen(8080)


//use readFileSync
http.createServer(function (req, res) {
    var filePath = path.join(__dirname, 'big.file');
    fileSystem.readFileSync(filePath, 'utf-8', function (err, data) {
        if (err) throw err;
        res.write(data)
        res.end()
    })
}).listen(8081)


//use streams API
http.createServer(function (req, res) {
    var filePath = path.join(__dirname, 'big.file');

    const readable = fileSystem.createReadStream(filePath,'utf-8');
    readable.on('data',function (chunk) {
        res.write(chunk);
        
    })
}).listen(8082)

