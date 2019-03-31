"use strict";
var displayColors = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(colors);
};
var message = "hello";
displayColors(message, "Red");
displayColors(message, "Red", "Green");
displayColors(message, "Red", "Green", "Blue");
//# sourceMappingURL=lesson11.js.map