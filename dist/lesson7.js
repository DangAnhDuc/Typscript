"use strict";
var isDone = false;
console.log(isDone);
var decimal = 15;
console.log(decimal);
var color = "blue";
console.log(color);
var age = 10;
var sentence = "\n    Hello, my shirt color is " + color + ". Age is " + (age + 1) + "\n";
console.log(sentence);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
//# sourceMappingURL=lesson7.js.map