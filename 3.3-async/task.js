class AlarmClock {
      
  constructor() {
    this.alarmCollection = [];    
    this.timerId = null;
  }

  addClock(time, fn, id) {
    if (!arguments[2]) {
      throw new Error('не передан Id');
    };
    if (this.alarmCollection.some(elem => elem.id == id)) {
      return console.error("Звонок с таким Id уже существует");
    }
    this.alarmCollection.push({id: id, time: time, callback: fn});
  };

  removeClock(id) {
    let elemByIdIndex;
    const elemById = this.alarmCollection.filter((elem, ind) => {
      if(elem.id == id) {
      elemByIdIndex = ind;
    };
  });
    return this.alarmCollection.splice(elemByIdIndex, 1);
  };

  getCurrentFormattedTime() {
    const now = new Date();
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  start() {
    if (this.timerId == null) {
      const isAlarm = () => {
        this.alarmCollection.forEach(elem => this.checkClock(elem));
      };
      this.timerId = setInterval(isAlarm, 30000);
    }
  };

  stop() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
  };
  };

  printAlarms() {
    console.log(`Печать всех будильников в количестве ${this.alarmCollection.length}`)
    this.alarmCollection.forEach(elem => console.log(`${elem.id} ${elem.time}`))
  };

  clearAlarms() {
    this.stop();
    this.alarmCollection.splice(0, this.alarmCollection.length);
  };

  checkClock(alarm) {
    if (alarm.time == this.getCurrentFormattedTime()) {
      return alarm.callback();
    }
  };
};


let phoneAlarm = new AlarmClock();
phoneAlarm.addClock("09:00", () => console.log("пора вставать!"), 2);
phoneAlarm.addClock("09:01", () => {console.log("Давай, вставай уже!"); phoneAlarm.removeClock(2)}, 3);
console.log(phoneAlarm.getCurrentFormattedTime());