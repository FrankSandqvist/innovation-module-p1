/* eslint-disable */
console.clear();

// Innovation Module P1: 2. Flow Control
// frank@smidyo.com

// Flow control is the the general concept of how we control the
// sequence of how our code is executed.


//
// IF / ELSE STATEMENT
// ******************************************************************
//

// What if we want our code to run only depending on whether a
// something is true or not? Then we can use an if/else statement.

if (true) {
  console.log("I always run.")
}

// Let's make a virtual bouncer.

let wantsToGoToBar = false;
let age = 20;
let legalDrinkingAge = 18;

if (wantsToGoToBar) {
  let yearsUnder = legalDrinkingAge - age;
  if (yearsUnder <= 0) {
    console.log("Welcome! Have a 🍺!")
  } else if (yearsUnder === 1) {
    console.log("✋ Come back in 1 year.")
  } else {
    console.log(
      "✋ Come back in " + yearsUnder + " years."
    )
  }
}

//
// TERNARY OPERATOR
// ******************************************************************
//

// Ternary operators can be thought of as compact if statements. They
// cannot contain code, but they can allow you to pick between two
// values in a compact way.

let squareMeters = 24;
let houseType = squareMeters > 150 ? 'Large house' : 'Small house';
console.log(squareMeters + 'm2: ' + houseType);

// This can make our bouncer code before a bit more compact, by
// allowing us to pick from the singular or plural ending more easily.

if (wantsToGoToBar) {
  let yearsUnder = legalDrinkingAge - age;
  if (yearsUnder <= 0) {
    console.log("Welcome! Have a 🍺!")
  } else {
    let ending = yearsUnder === 1 ? ' year.' : ' years.';
    console.log("✋ Come back in " + yearsUnder + ending)
  }
}

//
// WHILE LOOP
// ******************************************************************
//

// Let's get loopy. The simplest form of loop is the "while" loop.
// A while loop runs as long as the expression given returns true.

/*
This will lock up your computer. (don't)
while(true) {}
*/

let dayOfMonth = 1;
let bankAccountBalance = 3000;
let dailySpend = 35;
while (dayOfMonth <= 30) {
  bankAccountBalance = bankAccountBalance - dailySpend;
  console.log("Day " + dayOfMonth + ": " + bankAccountBalance + "€");
  dayOfMonth = dayOfMonth + 1;
}

//
// FOR LOOP
// ******************************************************************
//

// A for-loop does essentially the same thing as a while-loop, but
// it's a bit more compact.
//
// for (
//   setup loop;
//   condition to continue;
//   do this after every loop
// ) {}

let sentence = "Hello";
let loudness = 15;
for (let i = 0; i < loudness; i++) {
  sentence = sentence + "!";
}
console.log(sentence);