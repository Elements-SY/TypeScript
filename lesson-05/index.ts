class Puppy {
   move(distanceInMeters: number = 0) {
       console.log(`Animal moved ${distanceInMeters}m.`);
   }
}

class Dog extends Puppy {
   bark() {
       console.log('Woof! Woof!');
   }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();


class Animal {
   name: string;
   constructor(theName: string) { 
      this.name = theName;
   }
   move(distanceInMeters: number = 0) {
       console.log(`${this.name} moved ${distanceInMeters}m.`);
   }
}


// extends只能继承来自原型上的成员，而不能继承构造器内的成员，
// 所以必须要使用super来继承
class Snake extends Animal {
   constructor(name: string) { 
      super(name); 
   }
   move(distanceInMeters = 5) {
       console.log("Slithering...");
       super.move(distanceInMeters);
   }
}

class Horse extends Animal {
   constructor(name: string) { 
      super(name); 
   }
   move(distanceInMeters = 45) {
       console.log("Galloping...");
       super.move(distanceInMeters);
   }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

