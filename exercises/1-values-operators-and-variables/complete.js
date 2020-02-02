/* eslint-disable */
console.clear();

// Innovation Module P1: 1. Values, Operators and Variables
// frank@smidyo.com


//
// COMMENTS
// ******************************************************************
//

// This is how you write comments.

/*
You can also write multi-line comments, like this.
It's good for long sections of text, since you don't have to keep
adding // to the beginning of every line.
*/



//
// TEXT AND NUMBERS
// ******************************************************************
//

// Let's start with the basics. Strings (which is just text),
// numbers, and booleans (true or false).

"My text";
"Frank Sandqvist";

100;
3.14159265359;

true;
false;

// The quotes tell Javascript that what is being typed is in fact a
// text. The following three statements are strings, not numbers or
// booleans.

"100";
"100 people";
"true";


//
// OPERATORS
// ******************************************************************
//

// We can do interesting things with our data, such as math,
// modifying the text, and much more. Below are some basic examples.
// These are called operators.

"Nykarleby" + "Innovation" + "Center"; // === "NykarlebyInnovationCenter"
"Innovation Module P" + 1; // === "Innovation Module P1"
2 + 2; // === 4
45000 * (40 / 100); // === 18000
1 / 0; // === Infinity
!true; // === false
!false; // === true

// There are also operators for comparing two values. These always
// output a boolean.

true === false // === false
100 > 10 // === true
"same" === "same" // === true
"same" !== "same" // === false
"same" === "Same" // === false


//
// VARIABLES
// ******************************************************************
//

// We can store these in so-called "variables". A variable stores a
// value, and is given its own name.

let myFirstName = "Frank";
let pi = 3.14159265359;
let flipFlop = true;
let counter = 0;

// We can also leave them unassigned.
let notAssigned;

// Variables can be named anything, but it's recommended
// toNameThemLikeThis, and to not use any special characters.

let ஐ = "test"; // ஐ works, but not recommended
let MinVARIABÄL = "test"; // also not recommended

// Variables can be changed at any time.

flipFlop = false;

// You can always refer to variables in places that expect data of
// that type. They can also refer to themselves.

let myLastName = "Sandqvist";
let myFullName = myFirstName + " " + myLastName; // === "Frank Sandqvist"
flipFlop = !flipFlop; // === true
counter = counter + 1;


//
// OUTPUTTING
// ******************************************************************
//

// OK, so this is all good, but worthless on its own. How do we get
// our code to put something on the screen? The simplest way of doing
// this is calling the function console.log(). This will spit out
// your data to the console.

console.log("Hello world!");
console.log(flipFlop);
console.log(pi === 4);
console.log(notAssigned);
console.log("My counter is: " + counter);
console.log(
  "My name is " + myLastName + ". " +
  myFirstName + " " + myLastName + "."
);