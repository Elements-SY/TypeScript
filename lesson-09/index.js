var Days1;
(function (Days1) {
    Days1[Days1["Sun"] = 0] = "Sun";
    Days1[Days1["Mon"] = 1] = "Mon";
    Days1[Days1["Tue"] = 2] = "Tue";
    Days1[Days1["Wed"] = 3] = "Wed";
    Days1[Days1["Thu"] = 4] = "Thu";
    Days1[Days1["Fri"] = 5] = "Fri";
    Days1[Days1["Sat"] = 6] = "Sat";
})(Days1 || (Days1 = {}));
;
console.log(Days1["Sun"] === 0); // true
console.log(Days1["Mon"] === 1); // true
console.log(Days1["Tue"] === 2); // true
console.log(Days1["Sat"] === 6); // true
console.log(Days1[0] === "Sun"); // true
console.log(Days1[1] === "Mon"); // true
console.log(Days1[2] === "Tue"); // true
console.log(Days1[6] === "Sat"); // true
var Days2;
(function (Days2) {
    Days2[Days2["Sun"] = 7] = "Sun";
    Days2[Days2["Mon"] = 1.5] = "Mon";
    Days2[Days2["Tue"] = 2.5] = "Tue";
    Days2[Days2["Wed"] = 3.5] = "Wed";
    Days2[Days2["Thu"] = 4.5] = "Thu";
    Days2[Days2["Fri"] = 5.5] = "Fri";
    Days2[Days2["Sat"] = 6.5] = "Sat";
})(Days2 || (Days2 = {}));
;
console.log(Days2["Sun"] === 7); // true
console.log(Days2["Mon"] === 1.5); // true
console.log(Days2["Tue"] === 2.5); // true
console.log(Days2["Sat"] === 6.5); // true
