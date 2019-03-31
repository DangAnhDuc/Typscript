"use strict";
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.run = function () {
        console.log("Person is runnuning");
    };
    return Person;
}());
var p1 = new Person();
console.log(p1.run());
//# sourceMappingURL=lesson17.js.map