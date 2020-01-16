// Create a simple Node script that converts www.mum.edu domain name to the equivalent IP address.
// Use dns core module, resolve4()
// Note: convert the callback function of resolve4() to a Promise object using promisify and then use async/await


const { promisify } = require('util')
const dns = require('dns');
const lookUpIP = promisify(dns.lookup);

async function resolve4() {
  lookUpIP('www.mum.edu')
    .then(result => console.log( result.address));
  // result output is { address: '104.20.23.46', family: 4 }
}

resolve4();