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
    }, 10);
  }

  getMinutes() {
    const roundedTime = Math.floor(this.currentTime / 6000);
    return roundedTime;
  }

  getSeconds() {
    const roundedTime = Math.floor(this.currentTime % 60);
    return roundedTime;
  }

  getCentiseconds() {
    const roundedTime = (this.currentTime % 6);
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
    const secsSplit = this.computeTwoDigitNumber(this.getSeconds())
    const centisecSplit = this.computeTwoDigitNumber(this.getCentiseconds());
    return `${minsSplit}:${secsSplit}.${centisecSplit}`
  }
}

