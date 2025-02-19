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
console.log(harsha.calcAge())

// console logging the instance
console.log(harsha.hasOwnProperty('name'))
console.log(harsha.hasOwnProperty('species'))