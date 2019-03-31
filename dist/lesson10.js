"use strict";
var getPercent = function () { return 2; };
var getBonus = function (value, tax) {
    if (value === void 0) { value = 10; }
    if (tax === void 0) { tax = getPercent() * 0.1; }
    console.log(value + tax);
};
getBonus(undefined, 50);
getBonus();
//# sourceMappingURL=lesson10.js.map