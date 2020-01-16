const EventEmitter = require("events");

class Gym extends EventEmitter {
  constructor() {
    super();
    this.boom;
  }

  tick() {
    this.boom = setInterval(() => this.emit("boom", "Hello"), 1000);
  }

  reset() {
    clearInterval(this.boom);
  }
}

const gym = new Gym();
gym.on("boom", res => console.log("Athlete is working out " + res));
gym.tick();

//uncomment to stop the setInterval
//gym.reset();
