interface Pramas {
   b: number
}

function keepWholeObject(wholeObject: Pramas) {
   let { b } = wholeObject
}

type C = { a: string, b?: number }
function f({ a, b }: C): void {
   // ...
}