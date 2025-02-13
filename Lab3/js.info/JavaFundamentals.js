'use strict';
// Varibles
let admin;
let nname;
nname ="John";
admin = nname;
alert(admin);

const EARTH = 'Earth';
let currentUser;

const birthday = '18.04.1982';
// const age = someCode(birthday);
// alert(age);

// Datatypes
let namee = "Ilya";

alert( `hello ${1}` ); // hello 1

alert( `hello ${"name"}` ); // hello name

alert( `hello ${namee}` ); // hello Ilya

// Interaction
let res = prompt("What's ur name?", 'name');
alert(`Hello, ${res}`);

// Basic operators
let a = 1, b = 1;
let c = ++a; // 2 a=2
let d = b++; // 1 b=2

a = 2;
let x = 1 + (a *= 2); // x=5 a=4

// "" + 1 + 0    10
// "" - 1 + 0    -1
// true + false  1
// 6 / "3"       2
// "2" * "3"     6
// 4 + 5 + "px"  9px
// "$" + 4 + 5   $45
// "4" - 2       2
// "4px" - 2     NaN
// "  -9  " + 5  "  -9  5"
// "  -9  " - 5  -14
// null + 1      1
// undefined + 1 NaN
// " \t \n" - 2  -2

a = prompt("First number?", 1);
b = prompt("Second number?", 2);

alert(+a + +b); // 12

// Comparisons
// 5 > 4                  true
// "apple" > "pineapple"  false
// "2" > "12"             true
// undefined == null      true
// undefined === null     false
// null == "\n0\n"        false
// null === +"\n0\n"      false

// Conditional branches
if ("0") {
    alert( 'Hello' );
} //Yes, because it is not empty string

let offName = prompt('What is the “official” name of JavaScript?', "");
if(offName == "ECMAScript"){
    alert("Right!");
} else{
    alert("You don’t know? ECMAScript!");
}

let num = prompt("Number:" );
if(num>0){
    alert("1");
} else if(num < 0){
    alert("-1");
} else{
    alert("0");
}

// let result;
// // if (a + b < 4) {
// //   result = 'Below';
// // } else {
// //   result = 'Over';
// // }
// result = (a + b < 4) ? "Below" : "Over";

let message;
// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }
// message = (login == 'Employee') ? 'Hello' :
//             (login == 'Director') ? 'Greetings' :
//             (login == '') ? 'No login' :
//             "";

// Logical operators
alert( null || 2 || undefined ); // 2

alert( alert(1) || 2 || alert(3) ); // 1 2

alert( 1 && null && 2 ); //null

alert( alert(1) && alert(2) ); // 1 undefined

alert( null || 2 && 3 || 4 ); // 3

// if(age <= 90 && age >= 14)

// if(!(age <= 90 && age >= 14))
// if(age > 90 && age < 14)

if (-1 || 0) alert( 'first' ); // first
if (-1 && 0) alert( 'second' );// 
if (null || -1 && 1) alert( 'third' );// third

namee = prompt("Who is there?" , "");
if(namee == "Admin"){
    let password = prompt("Enter password:", "");
    if(password == "TheMaster"){
        alert("Welcome!");
    } else if(password){
        alert("Wrong password");
    } else{
        alert("Canceled");
    }
} else if(namee){
    alert("I don't you");
} else{
    alert("Canceled");
}

// Loops
// What is the last value alerted by this code? Why?

let i = 3;

while (i) {
  alert( i-- );
}
// 1. 1 is printed then i is 0 so condition is false

i = 0;
while (++i < 5) alert( i ); //1 2 3 4

i = 0;
while (i++ < 5) alert( i ); //1 2 3 4 5

for (let i = 0; i < 5; i++) alert( i ); // 0 1 2 3 4

for (let i = 0; i < 5; ++i) alert( i ); // 0 1 2 3 4

for(let i = 2; i<10; i++){
    if(i % 2) continue;
    alert(i);
}

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
// }
i = 0;
while(i<3){
    alert( `number ${i}!` );
    i++;
}

while(true){
    let num = prompt("Enter number greater than 100" , "");
    if(!num || num>100){
        break;
    }
}
do {
    num = prompt("Enter a number greater than 100?", 0);
  } while (num <= 100 && num);

let n = 10;
nextPrime:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime;
  }

  alert( i ); // a prime
}

// switch (browser) {
//     case 'Edge':
//       alert( "You've got the Edge!" );
//       break;
  
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Okay we support these browsers too' );
//       break;
  
//     default:
//       alert( 'We hope that this page looks ok!' );
//   }
if(browswer === 'Edge'){
    alert( "You've got the Edge!" );
} else if(browswer === 'Chrome' 
    || browswer === 'Firefox' 
    || browswer === 'Safari' 
    || browswer === 'Opera'){
    alert( 'Okay we support these browsers too' );
} else{
    alert( 'We hope that this page looks ok!' );
}

// let a = +prompt('a?', '');
// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }
// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }
switch(+a){
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
}

function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Did parents allow you?');
    }
  }
// NO differences
  function checkAge(age) {
    if (age > 18) {
      return true;
    }
    // ...
    return confirm('Did parents allow you?');
  }

//   function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Did parents allow you?');
//     }
//   }

// 1. ?
function checkAge(age){
    return (age>18) ? true : confirm('Did parents allow you?');
}
// 2. ||
function checkAge(age){
    return age>18 || confirm("Did parents allow you?");
}

function min( a, b){
    return (a<b) ? a : b;
}
// <!-- Arrow functions -->
// Replace Function Expressions with arrow functions in the code below:

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );

ask(
    "Do you agree?", 
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
)

