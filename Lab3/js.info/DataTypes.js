let str = "Привет";

str.test = 5;

alert(str.test);

let value1 = +prompt("First value:");
let value2 = +prompt("Second value:");
let sum = value1 + value2;
alert(sum);

function readNumber() {
  let num;

  do {
    num = prompt("Введите число", 0);
  } while (!isFinite(num));

  if (num === null || num === "") return null;

  return +num;
}

alert(`Число: ${readNumber()}`);

function random(min, max) {
  return min + Math.random() * (max - min);
}

alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

alert(randomInteger(1, 3));

let newStr = str[0].toUpperCase() + str.slice(1);

function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes("viagra") || lowerStr.includes("xxx");
}

alert(checkSpam("buy ViAgRA now"));
alert(checkSpam("free xxxxx"));
alert(checkSpam("innocent rabbit"));

function truncate(str, maxlength) {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
}

function extractCurrencyValue(str) {
  return +str.slice(1);
}

let fruits = ["Яблоки", "Груша", "Апельсин"];

let shoppingCart = fruits;
shoppingCart.push("Банан");

alert(fruits.length); // 4

let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
alert(styles.shift());
styles.unshift("Рэп", "Регги");

let arr = ["a", "b"];

arr.push(function () {
  alert(this);
});

arr[2](); // a, b, function()

function sumInput() {
  let numbers = [];

  while (true) {
    let value = prompt("Введите число", 0);

    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

alert(sumInput());

function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) {
    partialSum += item; 
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) partialSum = 0; 
  }

  return maxSum;
}

alert(getMaxSubSum([-1, 2, 3, -9])); // 5
alert(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
alert(getMaxSubSum([-2, -1, 1, 2])); // 3
alert(getMaxSubSum([100, -9, 2, -3, 5])); // 100
alert(getMaxSubSum([1, 2, 3])); // 6
alert(getMaxSubSum([-1, -2, -3])); // 0

function camelize(str) {
    return str
      .split("-") 
      .map(
        (word, index) =>
          index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(""); 
  }

function filterRange(arr, a, b) {

return arr.filter((item) => a <= item && item <= b);
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert(filtered); // 3,1 

alert(arr); // 5,3,8,1 

function filterRangeInPlace(arr, a, b) {
for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    if (val < a || val > b) {
    arr.splice(i, 1);
    i--;
    }
}
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);

alert(arr); // [3, 1]

let arr2 = [5, 2, 1, -10, 8];

arr2.sort((a, b) => b - a);

alert(arr2);

function copySorted(arr) {
    return arr.slice().sort();
  }
  
  let arr = ["HTML", "JavaScript", "CSS"];
  
  let sorted = copySorted(arr);
  
  alert(sorted);
  alert(arr);
  
function Calculator() {
this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
};

this.calculate = function (str) {
    let split = str.split(" "),
    a = +split[0],
    op = split[1],
    b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
    return NaN;
    }

    return this.methods[op](a, b);
};

this.addMethod = function (name, func) {
    this.methods[name] = func;
};
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map((item) => item.name);

alert(names); // Вася, Петя, Маша

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];

let usersMapped = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

alert(usersMapped[0].id); // 1
alert(usersMapped[0].fullName); // Вася Пупкин

function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
  }
  
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [vasya, petya, masha];

sortByAge(arr);


alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя

function shuffle(array) {
array.sort(() => Math.random() - 0.5);
}

let arr2 = [1, 2, 3];
shuffle(arr2);
alert(arr2);

function unique(arr) {
    return Array.from(new Set(arr));
  }
  
function aclean(arr) {
let map = new Map();

for (let word of arr) {
    // разбиваем слово на буквы, сортируем и объединяем снова в строку
    let sorted = word.toLowerCase().split("").sort().join(""); // (*)
    map.set(sorted, word);
}

return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr));

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

alert(keys); // name, more

let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" },
  ];
  
let readMessages = new WeakSet();


readMessages.add(messages[0]);
readMessages.add(messages[1]);

readMessages.add(messages[0]);

alert("Read message 0: " + readMessages.has(messages[0])); // true

messages.shift();

let messages2 = [
{ text: "Hello", from: "John" },
{ text: "How goes?", from: "John" },
{ text: "See you soon", from: "Alice" },
];

let readMap = new WeakMap();

readMap.set(messages[0], new Date(2017, 1, 1));

function sumSalaries(salaries) {
let sum = 0;
for (let salary of Object.values(salaries)) {
    sum += salary;
}

return sum; // 650
}

let salaries = {
John: 100,
Pete: 300,
Mary: 250,
};

alert(sumSalaries(salaries)); // 650

function count(obj) {
return Object.keys(obj).length;
}

let user = {
    name: "John",
    years: 30,
  };

let { name, years: age, isAdmin = false } = user;

alert(name); // John
alert(age); // 30
alert(isAdmin); // false

function topSalary(salaries) {
let max = 0;
let maxName = null;

for (const [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
    max = salary;
    maxName = name;
    }
}

return maxName;
}

let d = new Date(2012, 1, 20, 3, 12);
alert(d);

function getWeekDay(date) {
  let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

  return days[date.getDay()];
}

let date = new Date(2014, 0, 3); // 3 января 2014 года
alert(getWeekDay(date)); // ПТ

function getLocalDay(date) {
  let day = date.getDay();

  if (day == 0) {
    day = 7;
  }

  return day;
}

function getDateAgo(date, days) {
    let dateCopy = new Date(date);
  
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
  }
  
  let date = new Date(2015, 0, 2);
  
  alert(getDateAgo(date, 1)); // 1, (1 Jan 2015)
  alert(getDateAgo(date, 2)); // 31, (31 Dec 2014)
  alert(getDateAgo(date, 365)); // 2, (2 Jan 2014)
  
  function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }
  
  alert(getLastDayOfMonth(2012, 0)); // 31
  alert(getLastDayOfMonth(2012, 1)); // 29
  alert(getLastDayOfMonth(2013, 1)); // 28
  
  function getSecondsToday() {
    let now = new Date();
  
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
    let diff = now - today; 
    return Math.round(diff / 1000); 
  }
  
  alert(getSecondsToday());
  
  function getSecondsToTomorrow() {
    let now = new Date();
  
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  
    let diff = tomorrow - now;
    return Math.round(diff / 1000); 
  }
  
  function formatDate(date) {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;
  
    year = year.toString().slice(-2);
    month = month < 10 ? "0" + month : month;
    dayOfMonth = dayOfMonth < 10 ? "0" + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;
  
    if (diffSec < 1) {
      return "прямо сейчас";
    } else if (diffMin < 1) {
      return `${diffSec} сек. назад`;
    } else if (diffHour < 1) {
      return `${diffMin} мин. назад`;
    } else {
      return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`;
    }
  }

  let user = {
    name: "Василий Иванович",
    age: 35,
  };
  
  let user2 = JSON.parse(JSON.stringify(user));
  
  let room = {
    number: 23,
  };
  
  let meetup = {
    title: "Совещание",
    occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
    place: room,
  };
  
  room.occupiedBy = meetup;
  meetup.self = meetup;
  
  alert(
    JSON.stringify(meetup, function replacer(key, value) {
      return key != "" && value == meetup ? undefined : value;
    })
  );
  
  /*
    {
      "title":"Совещание",
      "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
      "place":{"number":23}
    }
    */