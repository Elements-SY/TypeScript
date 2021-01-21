class Greeter {
    greeting: string;
    // constructor(message: string) {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");