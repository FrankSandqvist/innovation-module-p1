// Innovation Module P1: 4. Libraries
// frank@smidyo.com


// The power of programming really becomes apparent when you
// introduce libraries to the mix. Libraries are just code that
// someone else wrote to make your life easier, as a library can make
// doing an otherwise complex task easy as pie. Let's take a quick
// look at the library "two.js", that allows you to draw on your
// screen.

// Two.js can in this case be accessed through the variable "Draw".
// Let's try out its function makeCircle().

let x = 100;
let y = 100;
let diameter = 80;
let circle = new Two.Ellipse(x, y, diameter, diameter);
Paper.add(circle);
Paper.update();

// Let's fill it...

circle.stroke = "none";
circle.fill = "yellow";
Paper.update();

// ...and add a text!

let text = new Two.Text("What lives here?", 100, 100);
text.family = "Merriweather";
Paper.add(text);
Paper.update();

// Now, let's create a function that updates the text.

function updateText(whatLivesHere) {
  text.value = whatLivesHere + " lives here";
  Paper.update();
}

// The following calls this function every time we update the text
// input.

document.getElementById("input").onchange = function(e) {
  updateText(e.target.value);
};
