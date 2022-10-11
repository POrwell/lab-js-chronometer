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
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
