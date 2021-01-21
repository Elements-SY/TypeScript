// 枚举使用 enum 关键字来定义：
enum Days1 {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

console.log(Days1["Sun"] === 0); // true
console.log(Days1["Mon"] === 1); // true
console.log(Days1["Tue"] === 2); // true
console.log(Days1["Sat"] === 6); // true

console.log(Days1[0] === "Sun"); // true
console.log(Days1[1] === "Mon"); // true
console.log(Days1[2] === "Tue"); // true
console.log(Days1[6] === "Sat"); // true


enum Days2 {Sun = 7, Mon = 1.5, Tue, Wed, Thu, Fri, Sat};

console.log(Days2["Sun"] === 7); // true
console.log(Days2["Mon"] === 1.5); // true
console.log(Days2["Tue"] === 2.5); // true
console.log(Days2["Sat"] === 6.5); // true