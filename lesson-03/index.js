function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Jane", lastName: "User" };
greeter(user);
function createSquare(config) {
    return { color: "white", area: 100 };
}
var mySquare = createSquare({ color: "red", width: 100 });
var p1 = {
    x: 10,
    y: 20
};
p1.x = 5; // error!
console.log(p1)
/*
 TypeScript具有ReadonlyArray<T>类型，它与Array<T>相似，
 只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改：
*/
var a = [1, 2, 3, 4];
var ro = a;
ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
a = ro; // error!
console.log(a)
/*
 上面代码的最后一行，
 可以看到就算把整个ReadonlyArray赋值到一个普通数组也是不可以的。
 但是你可以用类型断言重写：
*/
a = ro;
