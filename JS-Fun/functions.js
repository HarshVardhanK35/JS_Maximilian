// --- 1. default parameters: An ES6 feature
// default values are taken only when the value is not passed
// to skip a value, pass undefined while calling the function (eg: bookingDetails('LH230', undefined, 100)) 

const bookingList = [];

const bookingDetails = function (flightNum, numPassengers = 230, price = 99) { // price = 99 * numPassengers can also be possible
    
    // numPassengers = numPassengers ?? 230 // old-way of assigning values .. nullish coalescing operator

    const booking = {
        flightNum: flightNum,
        numPassengers: numPassengers,
        price: price
    }
    // console.log(booking)
    bookingList.push(booking)
}

bookingDetails('LH230', 5)


// ------------------------------------------------------------------------------------------------------------
// --- 2. How passing arguments works: value / primitives vs reference

const flight = 'LH234'
const passenger = {
    name: 'Jonas',
    passport: 234234234
}
const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999'
    passenger.name = 'Mr. ' + passenger.name

    if (passenger.passport === 234234234) {
        // alert('Check-in')
    } else {
        // alert('Wrong passport')
    }
}

checkIn(flight, passenger)
// console.log(flight, passenger) // flight is not changed, but passenger is changed

// explanation: 
// flight is a primitive value, so it is passed by value, so the original value is not changed
// passenger is an object, so it is passed by reference, so the original object is changed

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 10000000000)
}
newPassport(passenger)
checkIn(flight, passenger)

// we can observer how two functions manipulate the same object .. this is called "side-effects"
// explanation:
// newPassport function changes the passport number of the passenger object and checkIn function checks the passport number and alerts accordingly

// summary:
// there are 2 terms in programming while dealing with functions: "passing by value" and "passing by reference"
// JS does not have passing by reference, but it has passing by values
// we can pass a reference to the function, but we do not pass by reference


// ------------------------------------------------------------------------------------------------------------
// --- 3. First-class and higher-order functions

// First-class functions: 
// - JS treats functions as first-class citizens simply values, and functions are just another type of object
// - since functions are values, we can store them in variables, object (properties), and arrays 
// - we can pass functions as arguments to other functions and return functions from functions 
// - we can call methods on functions since they are objects (eg: .bind, .apply, .call)

// Higher-order functions:
// 1. A function that receives another function as an argument, that returns a new function, or both
// example: addEventListener etc., as this receives another function as an argument
//  -- we usually say that functions which are passed in are "callback functions"
// 2. function that returns a new function.  

// difference between first-class and higher-order functions:
// 1st class functions are just features... they are values


// ------------------------------------------------------------------------------------------------------------
// --- 4. Functions accepting callback functions

const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase()
}
// - converts a sentence to a single word (removes spaces and converts to lowercase)
// console.log(oneWord("Hi there, How are you?")) // res: hithere,howareyou?

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ')
    return [first.toUpperCase(), ...others].join(' ')
}
// - converts the first word of a sentence to uppercase
// console.log(upperFirstWord("Harsha Vardhan")) // res: HARSHA Vardhan


// Higher-order function 
const transformer = function (str, fn) {
    console.log(`Original String: ${str}`)
    console.log(`Transformed String: ${fn(str)}`)
    console.log(`Transformed by: ${fn.name}`)
}

// transformer('JavaScript is the best', upperFirstWord)
// transformer('JavaScript is the best', oneWord)

// - calls them later! transformer is a higher-order function that accepts a callback function as an argument (that's upperFirstWord and oneWord)

// simpler example:
const high5 = function () {
    console.log('👋')
}

// document.body.addEventListener('click', high5) // used in-built function (addEventListener) 

// another in-built function calling high5: 
// ['Jonas', 'Martha', 'Adam'].forEach(high5) // high5 is a callback function here

// Advantages of callback functions:
// ---
// - abstraction: hides the details of some code implementation
// - 'transformer' function does not really care about how transformation of string is done, it just transforms the input string


// ------------------------------------------------------------------------------------------------------------
// --- 5. Functions returning functions
// this is useful when we use functional programming paradigms 

const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`)
    }
}

greet('Hey')('Jonas') // Hey Jonas

// explanation:
// greet('Hey') returns a function, which is then called with 'Jonas' as an argument


// re-writing the above function using arrow functions
// ---
const greet1 = (greeting) => {
    return (name) => {
        console.log(`${greeting} ${name}`)
    }
}

greet1('Hey')('Jonas') // Hey Jonas

