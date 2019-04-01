"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person2 = /** @class */ (function () {
    function Person2(name) {
        console.log(name + 'Person constrcutor');
    }
    Person2.prototype.getId = function () {
        return 10;
    };
    return Person2;
}());
var Employee2 = /** @class */ (function (_super) {
    __extends(Employee2, _super);
    function Employee2(name) {
        var _this = _super.call(this, name) || this;
        console.log(name + "Employee constructor");
        return _this;
    }
    Employee2.prototype.getId = function () {
        return _super.prototype.getId.call(this);
    };
    return Employee2;
}(Person2));
var emp12 = new Employee2("Anh Duc");
console.log(emp12.getId());
//# sourceMappingURL=lesson19.js.map