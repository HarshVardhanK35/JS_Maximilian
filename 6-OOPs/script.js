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

Person.prototype.species = 'Homo Sapiens'

// creating objects
const harsha = new Person ("Harsha", 2001)

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
}

const vardhan = new PersonCl('vardhan', 2001)
console.log(vardhan.__proto__ === PersonCl.prototype)