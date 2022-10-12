class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback) {
        printTimeCallback()
      };
    }, 1000);
  }


  getMinutes() {
    const roundedTime = Math.floor(this.currentTime / 60);
    return roundedTime;
  }

  getSeconds() {
    const roundedTime = this.currentTime % 60;
    return roundedTime;
  }

  computeTwoDigitNumber(value) {
    const valueAsString = JSON.stringify(value);
    if (valueAsString.length === 2) {
      return valueAsString;
    }
    else {
      return "0" + valueAsString;
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0;
  }

  split() {

    const minsSplit = this.computeTwoDigitNumber(this.getMinutes())
    const secsSplit = this.computeTwoDigitNumber(this.getSeconds());
    return `${minsSplit}:${secsSplit}`;
  }
}
