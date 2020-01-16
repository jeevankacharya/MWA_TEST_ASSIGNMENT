// Write an asynchronous Node program that has a function checkSystem() that checks if the system memory size is at least 4 GB and the processor has more than 2 cores (use os core module).

// When you call the function, you should receive an immediate message on the console Checking your system…
// If the system doesn't have enough memory we should print a message to the console: This app needs at least 4 GB of RAM
// If the system doesn't have at least 2 cores, print this message to the console: Processor is not supported
// If the system has enough specs, print the following message System is checked successfully.


var os = require('os');

async function checkSystem() {
    
    //core count
    corecount = os.cpus().length;
    console.log(corecount)
    //total memory
    totalmemory = Math.round(os.totalmem/Math.pow(1024,3))
    //free space
    // freeSpace = Math.round(os.freemem()/Math.pow(1024,3))

   if(await corecount>1 && await totalmemory>4){

    console.log('System is checked successfully')
   }else{

    if(corecount<2){
        console.log("Processor is not supported")

    }
    if(totalmemory<4){
        console.log("This app needs at least 4 GB of RAM")

    }
   }
}

checkSystem();
process.nextTick(() => console.log('Checking System........'));
