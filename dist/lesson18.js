"use strict";
var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.name = name;
        console.log(this.name + " constructor");
    }
    Person1.talk = function () {
        console.log("This person is talking");
    };
    Person1.prototype.run = function () {
        console.log("Person is running");
    };
    return Person1;
}());
var p = new Person1("duc");
p.run();
Person1.talk();
//# sourceMappingURL=lesson18.js.map