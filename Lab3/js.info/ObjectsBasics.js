let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
let schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false

const user = {
  name: "John",
};


user.name = "Pete"; //yes, of course

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
alert(sum);

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);


menu = {
  width: 400,
  height: 600,
  title: "My menu",
};

function makeUser() {
    return {
      name: "John",
      ref: this,
    };
  }

let user = makeUser();

alert(user.ref.name); // error

let calculator = {
sum() {
    return this.a + this.b;
},

mul() {
    return this.a * this.b;
},

read() {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
},
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

let ladder = {
step: 0,
up() {
    this.step++;
    return this;
},
down() {
    this.step--;
    return this;
},
showStep() {
    alert(this.step);
    return this;
},
};

ladder.up().up().down().showStep().down().showStep();


function makeUser() {
return {
    name: "John",
    ref: this,
};
}

let user = makeUser();

alert(user.ref.name); // error

let calculator = {
sum() {
    return this.a + this.b;
},

mul() {
    return this.a * this.b;
},

read() {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
},
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

let ladder = {
step: 0,
up() {
    this.step++;
    return this;
},
down() {
    this.step--;
    return this;
},
showStep() {
    alert(this.step);
    return this;
},
};

ladder.up().up().down().showStep().down().showStep();

let obj = {};

function A() {
  return obj;
}
function B() {
  return obj;
}

alert(new A() == new B()); // true

function Calculator() {
  this.read = function () {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += +prompt("Сколько нужно добавить?", 0);
  };
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);