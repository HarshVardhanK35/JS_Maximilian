const Person = function (name, birthYear) {

    // instance properties
    this.name = name
    this.birthYear = birthYear

    // methods
    // this.calcAge = function () {
    //     console.log(new Date().getFullYear() - this.birthYear)      // Methods are not used to set like this!
    // }
}
// console.log(Person.prototype)

Person.prototype.calcAge = function() {
    return(new Date(). getFullYear() - this.birthYear)
}

// adding a static method on to a cons. fn.
Person.greet = function() {
    console.log('Hey there! 👋')
}

Person.prototype.species = 'Homo Sapiens'

// calling static method on cons. fn.: 'Person'
// Person.greet()

// creating objects
const harsha = new Person ("Harsha", 2001)

// calling a static method on instance: 'harsha'
// console.log(harsha.greet())

// calling methods
// console.log(harsha.calcAge())

// console logging the instance
// console.log(harsha.hasOwnProperty('name'))
// console.log(harsha.hasOwnProperty('species'))


const arr = [3, 4, 3, 6, 7, 5, 6, 7, 9]
// console.log(arr.__proto__) // this returns all the methods that can be used on an array // inherited from prototype of Array constructor function

// adding a method to the prototype of Array constructor
Array.prototype.unique = function () {
    return [...new Set(this)]
}
// console.log(arr.unique()) // returns: (6) [3, 4, 6, 7, 5, 9]

// ! -----------------------------------------------------------------------------
// Coding Challenge #1
// -------------------
// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

const Car = function(make, speed) {
    this.make = make
    this.speed = speed
}

Car.prototype.accelerate = function(){
    this.speed = this.speed + 10
    return this.speed
}

Car.prototype.brake = function() {
    this.speed = this.speed - 5
    return this.speed
}

const bmw = new Car('BMW', 120)
const mercedes = new Car('Mercedes', 95)

// console.log(bmw) 
// console.log(mercedes)

// console.log(bmw.accelerate())
// console.log(bmw.brake())

class PersonCl{
    constructor(firstName, birthYear) {
        this.firstName = firstName
        this.birthYear = birthYear
    }

    calcAge() {
        return (new Date().getFullYear() - this.birthYear)
    }

    // static method
    static greet() {
        console.log('Hey there! 👋')
    }
}
// console.log(PersonCl)
// PersonCl.greet()

const vardhan = new PersonCl('harsha vardhan', 2001)


// console.log(vardhan.__proto__ === PersonCl.prototype)

// Getters and Setters in Objects
const account = {
    owner: 'Harsha',
    movements: [200, 300, 400, 500, 300],

    get latest() {
        return this.movements.slice(-1).pop()
    },
}
// console.log(account.latest)

const PersonProto = {
    calcAge(){
        return (new Date().getFullYear() - this.birthYear)
    },
    // init(fullName, birthYear){
    //     this.fullName = fullName
    //     this.birthYear = birthYear
    // }
}
const steve = Object.create(PersonProto)

steve.fullName = 'Steve Jobs'
steve.birthYear = 1955

// console.log(steve)

PersonProto.init = function(fullName, birthYear){
    this.fullName = fullName
    this.birthYear = birthYear
}
const stark = Object.create(PersonProto)

stark.init('Tony Stark', 1970)
// console.log(stark)

// console.log(steve.__proto__)

// ! -----------------------------------------------------------------------------
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

class CarCl{
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    // methods
    accelerate() {
        this.speed = this.speed + 10
        return this.speed
    }
    brake() {
        this.speed = this.speed - 5
        return this.speed
    }

    // getter
    get speedUS() {
        return this.speed / 1.6
    }

    // setter
    set speedUs(speed) {
        this.speed = speed * 1.6 
    }
}
// create an instance
const ford = new CarCl('Ford', 120)

// using getters
console.log(ford.speedUS) // returns: 75

// using setters
ford.speedUs = 50
console.log(ford) // returns: CarCl {make: "Ford", speed: 80}