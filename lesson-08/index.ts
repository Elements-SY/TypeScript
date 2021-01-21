// any类型
function identity1(arg: any): any {
   return arg;
}


// 泛类型
function identity<T>(arg: T): T {
   return arg;
}

let output1 = identity<string>("myString");  // type of output will be 'string'

let output2 = identity<number>(123);  // type of output will be 'number'


/*
 从上述我们发现，any类型与泛类型的区别在于泛类型可以在使用时来指定参数的类型，
 而any类型不用在使用的时候指定参数的类型，在声明时就已经定义好了。
 两则的类型区别一个是声明时和使用时定义。
*/ 