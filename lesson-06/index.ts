let isDone: boolean = false;

let nickName: string = `Gene`;

let age: number = 37;

let sentence: string = `Hello, my name is ${ nickName }.

I'll be ${ age + 1 } years old next month.`;

// 在元素类型后面加上[] 数字类型
let arr1: number[] = [1, 2];

// 或者使用数组泛型 string类型
let arr2: Array<string> = ['1', '2'];

// 或者使用数组泛型 任意类型
let arr3: Array<any> = [1, '2',{name: '张三'}];

// 元组 Tuple
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK

// 枚举;enum类型是对JavaScript标准数据类型的一个补充
enum Color {Red, Green, Blue}

let c: Color = Color.Green;

// void类型像是与any类型相反，它表示没有任何类型。
function warnUser(): void {
   console.log("This is my warning message");
}


let unusable: void = undefined;

// Null 和 Undefined
let u: undefined = undefined;

let n: null = null;