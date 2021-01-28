class AlarmClock {
      
  constructor() {
    this.alarmCollection = [];    
    this.timerId;
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
    return this.alarmCollection.delete(this.alarmCollection.filter(elem => elem.id == id));
  };

  getCurrentFormattedTime() {
    const now = new Date();
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  start() {

  };

  stop() {

  };

  printAlarms() {
    console.log(`Печать всех будильников в количестве ${this.alarmCollection.length}`)
    this.alarmCollection.forEach(elem => console.log(`${elem.id} ${elem.time}`))
  };

  clearAlarms() {

  };
};


let phoneAlarm = new AlarmClock();
phoneAlarm.addClock("09:00", () => console.log("пора вставать!"), 2);
phoneAlarm.addClock("09:01", () => {console.log("Давай, вставай уже!"); phoneAlarm.removeClock(2)}, 3);
console.log(phoneAlarm.getCurrentFormattedTime());