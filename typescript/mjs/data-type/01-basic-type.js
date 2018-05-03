//Boolean
var free = true;
//Number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
//string
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month.";
//array
var list = [1, 2, 3];
var list1 = [1, 2, 3];
//Tuple
var x;
x = ['abc', 4];
x[3] = 'world';
console.log(x);
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
//Any
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
//void
function warnUser() {
    alert("This is my warning message");
}
//Null and Undefined
var u = undefined;
var n = null;
//Never?????????
// Function returning never must have unreachable end point
function error(message) {
    throw new Error(message);
}
//Type assertions
var someValue = "this is a string";
var strLength = someValue.length;
var strLength1 = someValue.length;
