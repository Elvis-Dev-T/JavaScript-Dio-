"use strict";
//Advanced JS


//alert("Hello!");

//alert("Hello"); //With "Semicolon"
//alert("Hello") //There is not "Semicolon"
//[1, 2].forEach(alert);


//alert("Hello")

//let message = "Hello World";
//alert(message);

//let user = 'John', age = 25, message = 'Hello';
//console.log("Your name is: " + user + " Your age is: " + age + " and he is trying to say: " + message);

//let $ = "hey!"
//let _ = "How are you!"
//alert($ + _);


/*
let admin, name; // can declare two variables at once

name = "John";

admin = name;

alert( admin ); // "John"
*/

//alert(1/0);

//typeof undefined // "undefined"

//typeof 0 // "number"

//typeof 10n // "bigint"

//typeof true // "boolean"

//typeof "foo" // "string"

//typeof Symbol("id") // "symbol"

//typeof Math // "object"  (1)

//typeof null // "object"  (2)

//typeof alert // "function"  (3)

//------------------------------------------------------------------------

//let age = prompt('How old are you?', 100);

//alert(`You are ${age} years old!`); // You are 100 years old!

//let result = prompt("Let's see now", "Good function");

//alert(`You say that ${result}`)


//let test = prompt("Test");
//alert(`${test}`);

//"use strict";

//let age = prompt("How old are you?")
//let year = new Date()
//alert(`You were born around ${year.getFullYear()-age}`)

//let name = prompt("Put your name", "My Name");
//alert(`${name}`)


//----------------------------------  Types On JavaScript

//let value = true;
//alert(typeof value);



//value = String(value);
//alert(typeof value);

//alert( "80" / "10" ); Automatically conversion

//let str = "123";
//alert( typeof str);

//let num = Number(str);
//alert(typeof num);   

//----------------------------------------
//TERMS "UNARY", "BINARY", "OPERAND"

//let x = 1;

//x = -x;
//alert( x ); // -1, unary negation was applied / an operand



//let x = 1, y = 3;
//alert( y - x ); // 2, binary minus subtracts values / two operands

//Note that if any of the operands is a string, then the other one is converted to a string too.

//------------------------------------------------------------------------------------
//IMPORTANT  The binary + is the only operator that supports strings in such a way.
//------------------------------------------------------------------------------------

//alert( '1' + 2 ); // "12"
//alert( 2 + '1' ); // "21"

//See, it doesn’t matter whether the first operand is a string or the second one.

//Here’s a more complex example:

//alert(2 + 2 + '1' ); // "41" and not "221";

//Here, operators work one after another. The first + sums two numbers, so it returns 4,
//then the next + adds the string 1 to it, so it’s like 4 + '1' = '41'

//alert('1' + 2 + 2); // "122" and not "14"

//-------------------------------------------------------------------------------------

//alert( 6 - '2' ); // 4, converts '2' to a number
//alert( '6' / '2' ); // 3, converts both operands to numbers

//let apples = "2";
//let oranges = "3";

//alert( apples + oranges ); // "23", the binary plus concatenates strings

//alert( +apples + +oranges); //Short way to convert Strings to Number;

//let x = 2 * 2 + 1;

//alert( x ); // 5

//let a = 1;
//let b = 2;

//let c = 3 - (a = b + 1);

//alert( a ); // 3
//alert( c ); // 0
//alert( b ); // 2

//let a, b, c;

//a = b = c = 2 + 2;

//alert( a ); // 4
//alert( b ); // 4
//alert( c ); // 4

//let a = "10", b = "10";

//alert(+a + +b);


/*
let counter = 1;
let a = ++counter; // (*)

alert(a); // 2


let counterTwo = 1;
let b = counterTwo++; // (*) changed ++counter to counter++

alert(`${b}`); // 1

*/

//for (let begin = 0; begin <= 10; begin++)
//console.log(begin);

//let a = 1, b = 1;

//let c = ++a; // ?
//console.log(c);
//let d = b++; // ?
//console.log(d);

//let a = 2;

//let x = 1 + (a *= 2);
//console.log(x);

/*
let a = "" + 1 + 0;
console.log(a);

let b = "" - 1 + 0;
console.log(b);

let c = true + false;
console.log(c);

let d = 6 / "3";
console.log(d);

let e = "2" * "3";
console.log(e);

let f = 4 + 5 + "px";
console.log(f);

let g = "$" + 4 + 5;
console.log(g);

let h = "4" - 2;
console.log(h);

let i = "4px" - 2;
console.log(i);

let j = "  -9  " + 5;
console.log(j);

let k = "  -9  " - 5;
console.log(k);

let l = null + 1;
console.log(l);

let m = undefined + 1;
console.log(m);

let n = " \t \n" - 2;
console.log(n);
*/

//let a = prompt("First number?", 1);
//let b = prompt("Second number?", 2);

//alert(+a + +b); // 12

//alert( 'Beeeee' > 'Beee' );

/*
let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a === b); // true!
*/

//alert( 0  == false  );



/*
let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}
*/

//let accessAllowed = (age > 18) ? true : false; GOOD PRACTICE;
//let accessAllowed = age > 18 ? true : false; BAD PRACTICE;

/*
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' : (age < 18) ? 'Hello!' : (age < 100) ? 'Greetings!' :  'What an unusual age!';

alert( message );
*/

//CHALLENGE

/*
let challenge = prompt("What's the “official” name of JavaScript?")
if(challenge == "ECMAScript"){
    alert("You're right");
} else {
    alert("Why dont try again?");
};
*/

/*
let officialNameOfJavaScript = prompt("What's the “official” name of JavaScript?");
let returning = (officialNameOfJavaScript == "ECMAScript") ? "You're Right" :  "Why dont try again?";
alert(returning);
*/


/*
let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
*/


/*
let a = prompt("Give a value");
let b = prompt("Give another value");

let challenge = (a + b < 4) ? "Below" : "Over";
alert(challenge);
*/


//let message = (login == "Employee")  ? "Hello" : (login == "Director") ? "Greetings" : (login == "") 
//? "No login" : '';


/*
let entrada = prompt("Digite seu nome");

let retornoDaEntrada = (entrada == "Eliélvis") ? "Heyy man!" : (entrada == " ") ? "Não te conheço" : 'Não te conheço';
alert(retornoDaEntrada);
 */

//-----------------------------------------

//Operators logics

//let hour = 9;
//if (hour < 10 || hour > 18){
//  alert("The office is closed.");
//}

//let hour = 12;
//let isWeekend = true;

//if (hour < 10 || hour > 18 || isWeekend){
//  alert("The office is closed");
//}

//if (1 && 0) { // evaluated as true && false
//  alert( "won't work, because the result is falsy" );
//}

//alert( null || 2 || undefined );

/*
age = prompt("Put your age")
if(age < 14 && age > 90) {
      alert("Inclusively");
}

*/

/*
let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}
*/


//result = (a !== null && a !== undefined) ? a : b;
//alert(result);

//let height = null,   width = null;

//let area = (height ?? 100) * (width ?? 50);
//alert(area);


//const a = 1, b = 2, c = 3


