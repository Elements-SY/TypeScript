interface Person {
   firstName: string;
   lastName: string;
}

function greeter(person: Person) {
   return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };

greeter(user);

// 合并接口
interface Box {
   height: number
   width: number
 }
 
interface Box {
   scale: number
   width: number // 类型相同 OK
}
 
let box: Box = {height: 5, width: 6, scale: 10}


/*
 可选属性：
 可选属性的接口与普通的接口定义差不多，只是在可选属性名字定义的后面加一个?符号。

 可选属性的好处之一是可以对可能存在的属性进行预定义，
 好处之二是可以捕获引用了不存在的属性时的错误。 
 比如，我们故意将createSquare里的color属性名拼错，就会得到一个错误提示：

*/ 
interface SquareConfig {
   color?: string;
   width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
   return {color: "white", area: 100};
}

let mySquare = createSquare({ color: "red", width: 100 });


/*
 只读属性：
 一些对象属性只能在对象刚刚创建的时候修改其值。 
 你可以在属性名前用readonly来指定只读属性:
 你可以通过赋值一个对象字面量来构造一个Point。 
 赋值后，x和y再也不能被改变了。
 记住，只读属性只是在编译上给予提示警告，但是
 不会因为强制修改而不能通过。
*/ 

interface Point {
   readonly x: number;
   readonly y: number;
}

let p1: Point = { 
   x: 10, 
   y: 20 
};

p1.x = 5; // error!



/*
 TypeScript具有ReadonlyArray<T>类型，它与Array<T>相似，
 只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改：
*/

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
a = ro; // error!

/*
 上面代码的最后一行，
 可以看到就算把整个ReadonlyArray赋值到一个普通数组也是不可以的。 
 但是你可以用类型断言重写：
*/

a = ro as number[];