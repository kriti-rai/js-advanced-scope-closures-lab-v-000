function produceDrivingRange(blockRange) {
  return function(x, y) {
    let d1 = parseInt(x, 10);
    let d2 = parseInt(y, 10);
    let range = d2 - d1;
    if (range > blockRange) {
      return (range - blockRange) + " " + "blocks out of range";
    } else {
      return "within range by " + (blockRange - range);
    }
  };
}

function produceTipCalculator(percentage) {
  return function(fare) {
    return fare * percentage;
  };
}

function createDriver() {
  let driverId = 0;
  return class Driver {
    constructor(name) {
      this.name = name
      this.id = ++driverId;
    }
  };
}
