class SmartCalculator {
  constructor(initialValue) {
    this.value = initialValue;
  }

  add(number) {
    this.value += " + " + number;
    return this;
  }
  
  subtract(number) {
    this.value += " - " + number;
    return this;
  }

  multiply(number) {
    this.value += " * " + number;
    return this;
  }

  devide(number) {
    this.value += " / " + number;
    return this;
  }

  pow(number) {
    this.value += " ^ " + number;
    return this;
  }

  calculate() {
    let num = 0;
    this.value = this.value.split(' ');
    while (this.value.length > 1) {
      for (let op = this.value.length - 1; op >= 0; op--) {
        if (this.value[op] === "^") {
          num = Math.pow(this.value[op - 1], this.value[op + 1]);
          this.value.splice(op, 2);
          this.value[op - 1] = num;
          op++;
        }
      }
      for (let op = 0; op < this.value.length; op++) {
        if (this.value[op] === "*") {
          num = this.value[op - 1] * this.value[op + 1];
          this.value.splice(op, 2);
          this.value[op - 1] = num;
          op--;
        }
      }
      for (let op = 0; op < this.value.length; op++) {
        if (this.value[op] === "/") {
          num = Math.round(this.value[op - 1] / this.value[op + 1]);
          this.value.splice(op, 2);
          this.value[op - 1] = num;
          op--;
        }
      }
      for (let op = 0; op < this.value.length; op++) {
        if (this.value[op] === "-") {
          num = this.value[op - 1] - this.value[op + 1];
          this.value.splice(op, 2);
          this.value[op - 1] = num;
          op--;
        }
      }
      for (let op = 0; op < this.value.length; op++) {
        if (this.value[op] === "+") {
          num = parseInt(this.value[op - 1]) + parseInt(this.value[op + 1]);
          this.value.splice(op, 2);
          this.value[op - 1] = num;
          op--;
        }
      }
    }
    return this.value[0];
  }

  valueOf() {
    return this.calculate();
  }
}

module.exports = SmartCalculator;
