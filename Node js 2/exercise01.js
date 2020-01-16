const dns = require("dns");
const { promisify } = require("util");

const url = "www.mum.edu";
const promise = promisify(dns.resolve4);

async function hostToIpAddress() {
  await promise(url).then(ip =>
    console.log(`The IP address of ${url} is ${ip}`)
  );
}

hostToIpAddress();
