console.clear();

// Innovation Module P1: 3. Functions
// frank@smidyo.com


// We have been using "console.log()" quite a bit so far. This is a
// function. Functions are bits of code that can be called over and over,
// without having to write the same thing multiple times. A function may
// take data, and it may return data. Let's make a simple multiplying
// function.

function multiply(factor1, factor2) {
  let product = factor1 * factor2;
  return product;
}

// We can now call our brand new function.

console.log(multiply(5, 5));

// Let's turn the for loop from the last exercise into a function.

function emphasize(sentence, amount, adjective) {
  sentence = sentence + ", which is";
  for (let i = 0; i < amount; i++) {
    sentence = sentence + " very";
  }
  return sentence + " " + adjective;
}

console.log(emphasize("You came to this programming course", 5, "nice") + "!");

// Values have their own functions as well. Strings have the slice()
// function, which returns a section of the string. We also use the
// Number() function to convert the string to a number, getting rid of
// extra leading zeroes.

function birthDateFromID(id) {
  let day = Number(id.slice(0, 2));
  let month = Number(id.slice(2, 4));
  let year = id.slice(4, 6);

  return day + "." + month + ".19" + year;
}

let id = "091293-127k";
console.log("My birth-date is " + birthDateFromID(id));

// We can also nest functions inside other functions

function emphasizedBirthDateFromID(id) {
  let birthDate = birthDateFromID(id, 5);
  return "I was born " + emphasize(birthDate, 50, "long ago") + ".";
}

console.log(emphasizedBirthDateFromID(id));
