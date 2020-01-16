// Build a pseudo-class named Gym that emits a boom event every 1 second.
// Add a method rest() to stop the interval.
// Create an instance of Gym and bind to the boom event, printing Athlete is working out every time it gets one.

const EventEmitter = require('events');

class Gym extends EventEmitter{
    constructor(){
        super()
    }

     boom() {
        setInterval(()=>this.emit('boom'),1000)

    }
}


function rest(data){
}

const gym = new Gym();
gym.boom();
gym.on('boom',()=>console.log("Athlete is working out every time"))
