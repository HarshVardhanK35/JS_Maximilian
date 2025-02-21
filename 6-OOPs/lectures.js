//! !! OBJECT ORIENTED PROGRAMMING !!
//? ---------------------------------

/**
 * ! ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 * ! 1. What is Object Oriented Programming?
 * ? ---------------------------------------
 * NOTE: All examples are based on traditional OOPs
 * 
 * * a paradigm that is based on the concept of objects.. (paradigm : style of the code => how we write and organize the code) .. we use objects to model (describe) real-world or abstract features 
 * 
 * * Objects contain 'data: properties' & 'code / functions: methods'; so using Objects we can pack data and behavior/fns into a block 
 * - objects are self-contained pieces / blocks of code | where objects are building blocks of applications, which interact with each other
 * 
 * * The interactions between objects are made through a public Interface -> API - Application Programming Interface | 
 *   - methods inside this interface that is code outside of objects can access and communicate with the object
 * 
 * - this paradigm was developed to organize the code to make it flexible and maintained easily
 * 
 * - till now we have been using objects as loose collections of data and without making them to interact with each other and also we didn't generate objects programmatically
 * * but in OOPs we code to generate new Objects without simply using object literals 
 * 
 * - In traditional OPPs, we use CLASSES to generate objects {classes are type of blueprints: blueprint is a plan with set of rules} .. 
 *   - so with these classes as blueprint we can build objects with set of rules and logic inside it!
 * 
ex - class:
---
User {
    // properties
    userName
    password
    email

    // methods
    login(pwd) {.. login-logic ..}
    sendMessage(str) {.. logic ..}
}
 * - here in the above ex., everything is packed {properties and methods} it just contains description of user-details but not the real-world data of the user (username not the value)
* - using this class a new Object is constructed .. every object that was Constructed from a class which is called "INSTANCE" of that Class and process is called "INSTANTIATION"
 * 
ex - instance: 
---
-----------------OBJECT(1)-----------------
{
    // properties
    userName = "Harsha"
    password = "13e2#f31*gh%4aa3f"
    email = "harsha@email.com"

    // methods
    login (pwd) {.. login-logic ..}
    sendMessage (str) {.. logic ..}
}
-----------------OBJECT(2)-----------------
{
    // properties
    userName = "Harsha"
    password = "13e2#f31*gh%4aa3f"
    email = "harsha@email.com"

    // methods
    login (pwd) {.. login-logic ..}
    sendMessage (str) {.. logic ..}
}
 * - Instance(s) is a real object(s) that was built from a class which now can be used in the code (as class is not an object)
 *   - this instance is like a real-house that will be built from a blueprint that was created .. so with the use of this same blueprint we can build as many objects as we can on our need
 * 
 * ? how do we create classes - at FIRST?
 * ---
 * There are four fundamental principles which helps us to create a good class: ABSTRACTION, ENCAPSULATION, INHERITANCE, POLYMORPHISM
 * 
 * ! 1. ABSTRACTION: 
 * ---
 * * ignoring the details that are not matter to us .. implementing an overview instead of messing with the insider details that may be unnecessary
 * ex: 
 * - in JS, we don't need to know how addEventListener works behind the scenes, we just need to know how to use it!
 * - we don't need to know how the car-engine works, we just need to know how to drive the car!
 * - a phone, we don't need to know how the phone works, we just need to know how to use it!
 * 
 * ! 2. ENCAPSULATION:
 * ---
 * * keep some methods and properties private inside a class, that means they are not accessible from outside of the class but only inside of the class
 * 
THEORETICAL example - encapsulation:
---
User {
    // properties
    userName
    PRIVATE password
    PRIVATE email

    // methods
    login(pwd) {
        this.password
    }
    sendMessage(str) {.. logic ..}

    PRIVATE method1() {.. logic ..}     // .. as these methods were used inside the obj where it were declared but not outside of those classes 
}
 * - this is an hypothetical example, as PRIVATE keyword does not exist in JS | 
    - these properties with PRIVATE can not be accessible outside the obj where it was declared 
    - however they can be accessible inside the class
 * - this prevents external environment to accidentally manipulate the internal PRIVATE properties / state
 * 
 * - In an API, all methods are not private they made public for interaction .. so API methods are not encapsulated
 * 
 * ? Why Encapsulation?
 * ---
 * - even if we change the logic inside private methods, it could not break the code. (because private methods are not used anywhere outside the class where it had been declared)
 * 
 * ! 3. INHERITANCE
 * ---
 * * making all properties and methods of a certain class available to it's child class, forming a hierarchial relationship between classes. this allows us to 'reuse common logic' and helps to model real-world relationships 
 * 
User {
    userName
    password
    email

    login(pwd) {.. login-logic ..}
    sendMessage(str) {.. logic ..}
}
--------------------------------------------- >>> ADMIN is an EXTENDED USER
Admin {
    userName
    password
    email
    permissions     // additional property

    login(pwd) {.. login-logic ..}
    sendMessage(str) {.. logic ..}
    deleteAllUsers() {.. logic ..}      // additional method
}
 * - in above example, there are similarities between User and 'Admin' classes .. as Admin has lot properties common to 'User' class has! 
 * - as User and Admin classes has similar properties .. so, Inheritance can be used here and one class inherit from other then we have one parent and child class
 * - class which "inherits" from other is child.. so a child class "extends" it's parent class .. 
 * - so child class inherits some prop & logic from parent and additionally of it's own props & logic .. 
 * 
 * ! 4. POLYMORPHISM
 * --- 
 * - "MANY SHAPES"
 * * a child class can "overwrite" a method it inherited from a parent class 
ex: 

                                        <CHILD>
                                        Author {
                                            // properties
                                            userName
                                            private password
                                            private email

                                            // methods
                                            login(pwd) {.. more-diff-login-logic ..}
                                            sendMessage(str) {.. logic ..}
                                        }
                                    /
                                INHERITANCE
                                / 
                <PARENT>
                User {
                    // properties
                    userName
                    private password
                    private email

                    // methods
                    login(pwd) {.. login-logic ..}
                    sendMessage(str) {.. logic ..}
                }
            /
        INHERITANCE
        /
<CHILD>
Admin {
    // properties
    userName
    private password
    private email

    // methods
    login(pwd, key) {.. diff-login-logic ..}         // extra params needed (key)
    sendMessage(str) {.. logic ..}
}                        
 * 
 * - if we focussed on LOGIN method, there are differences in logic used for LOGIN method as ADMIN-user requires more secure one (which has 2-factor authentication)
 * - as they (author & admin) inherits same LOGIN method from User (main) class .. so, how logic would change? 
 * ? HOW
 * ---
 * - in each inherited classes just write a new method .. which is also called 'LOGIN' - so, own 'LOGIN' method overwrites the method which was inherited from User class. 
 * 
 * 
 * ! ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 * ? NOTE: 
 * - OOPs are implemented differently using JS
 * 
 * ! 2. OOPs in JS
 * ---------------
 * ? CLASSICAL OOPS: "CLASSES"
 * ---
 * 1. class is a blueprint, these classes are used to create objects which are called 'instances' | the process of creating instances is called "INSTANTIATION"
 * 2. In classical OOP, Behavior (methods) are copied from the classes to all it's instances
 * 
 * 
 *  ---------------------------
 * ? OOP with JS: "PROTOTYPES"
 * --
 *          PROTOTYPE
 *              |
 *              ^   PROTOTYPAL INHERITANCE | Arrow Pointing Upwards: Indication of Delegation
 *              |
 *            Object
 * --
 * 1. all objects linked to a prototype obj; so that each obj has a prototype | 
 *   - prototype objects contains methods and properties so that all the objects linked to that prototype can access and use |
 *   - this behavior is called "PROTOTYPAL INHERITANCE"
 * 
 * ? PROTOTYPAL INHERITANCE:
 * - all the objects linked to a certain prototype object can use the methods and props that are defined on that prototype
 *   - objects inherit methods and props from a prototype, so this is why it is called "prototypal inheritance"
 * ? NOTE: prototypal - inheritance (which is an instance inheriting from a class) is different from class - inheritance (which is one class inheriting another class) 
 * 
 * 2. Objects "delegate" behavior (methods) to the linked prototype object (behavior: term used to indicate methods)
 * - technically, objects delegate their behavior to the prototype
 * 
 * NOTE:
 * - we have seen this type of prototypal inheritance behavior before so many times while implementing Arrays
 * - each time we are able to use .map on arrays cause of this inheritance (actually it is called "Array.prototype.map()")
 * - Array.prototype is the prototype object of all arrays that we create in JS .. this object contains all the methods that we can use on arrays!
 * - each time an array created .. inturn it is linked to prototype and therefore, it has access to all those methods 
 * - each time a new array created inherits the methods from "Array.prototype" | so 'map' has not defined from the num array but on the "Array.prototype"
 * 
 * ! Question: How to implement OOPS in JS programmatically?
 * ---
 * - there are three diff ways / techniques of doing this:
 * 
 * * 1. Constructor Functions
 * ---
 * - creating objects from functions,
 * - with this built-in objects were implemented in JS (Arrays, Maps, Sets, etc)
 * 
 * * 2. ES6 Classes
 * ---
 * - Modern way of doing OOP in JS, "SYNTACTIC SUGAR" over constructor fns, a layer of abstraction over constructor fns
 * - simpler way to do OOPs in JS, BTS ES6 classes actually implemented with constructor fns. so these also use prototypal inheritance
 * 
 * * 3. Object.create()
 * ---
 * - easiest way to link an object to a prototype object
 * - however, Object.create() is not used as much as the other two ways
 * 
 * ! ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 * ! 3. Constructor Functions and the New Operator
 * -----------------------------------------------
 * - we can use constructor functions to create objects using a fn. so the diff between normal and constructor fn is that we call a constructor fn with "new" operator
 * 
 * - rules:
 * 1. constructor fn naming shall be started with a capital 
 * 2. do not use arrow fns. to create constructor fns .. cause these do not have access to 'this' keyword (their own 'this' keyword) => only fn expressions and declarations
 * 3. constructor fns must be called with "new" keyword
 * 4. the props on the Obj must be created with exact variable name passed as parameter | (may be or may not be the same param name)
 * 
const Person = function (name, birthYear) {...}
new Person ("Harsha", 2001)
 * 
 * ? "new" operator and working of "new" behind the scene:
 * - we call a constructor function with "new fnName (param1, param2)" 
 * 
 * BTS
 * ---
 * 1. new empty object is created "new {}"
 * 2. function is called, and 'this' keyword is set to newly created object => this = {} => 'this' points to new Object that was created
 * 3. this created object is linked to a 'prototype' => {} linked to a prototype 
 * 4. NO NEED of RETURN statement inside the constructor fn. 'new' keyword take care of that and Object which was created is returned 'AUTOMATICALLY'
 * 
const Person = function (name, birthYear) {
    console.log(this)                               // logging this to the console .. returns: "Person {}"
}
    here, as demonstrated 'this' pointed to the object - Person {} 
--------------------------------------------------------------------------------------------------------------
 * ex
const Person = function (name, birthYear) {
    this.name = name
    this.birthYear = birthYear                          // defined props with same name matching to the parameters declared (as per convention)

    // NO NEED OF RETURN STATEMENT
}
const harsha = new Person ("Harsha", 2001)
console.log(harsha)                                 // returns: Person {name: 'Harsha', birthYear: 2001}
 * 
 * - "this.name" creates a property on the object that was returning from the "Person" constructor fn. (same with "this.birthYear")
 * 
 * Note: 
 * - Now, with this constructor function as blueprint we can create as many objects as we need {const vardhan = new Person('Vardhan', "2001")}
 * 
 * ! technically, the object created from a 'class' are called as an "instance" .. but here we did not create 'CLASSES' to instantiate an object
 * ! as JS does not have classes before 'ES6' .. we used constructor fns. to create objects here .. so initially JS has 'constructor fns' to simulate 'classes'
 * 
 * ? so we can say that 'harsha' is an instance of 'Person' => `const harsha = new Person ("Harsha", 2001)`
 * - to check an object is an instanceof a cons. fn. or not ? we have an operator to check this! => clg(harsha instanceof Person) => returns: a boolean {true / false}
 * - 'this.name' and 'this.birthYear' are the "instance properties"
 * 
---
 * ! CREATING METHODS
---------------------
const Person = function (name, birthYear) {

    // instance properties
    this.name = name
    this.birthYear = birthYear

    // methods
    this.calcAge = function () {
        console.log(new Date().getFullYear() - this.birthYear)  // But this is not a GOOD PRACTICE: to create a method directly inside a cons. fn.
    }
}
const harsha = new Person ("Harsha", 2001)
console.log(harsha)
 *                          * this is a bad practice: to create direct method inside a cons.fn. cause if we created 100 or 1000s of objects 
 *                              * and all these objects would carry out this function .. and every time we create a new object would get this method => if we 100 objects.. we have 100 copies of same fns
 *                                  * so, we use prototype and prototypal inheritance to avoid this practice!
 * 
 * ! ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 * ! 4. Prototypes
 * ---------------
 * Intro:
 * - Each and every fn. in JS has already a property called "Prototype".. so, each object created from a cons.fn. has access to all methods and props (that we define on constructors prototype property)
 *   - all the objects that are created with cons. fn. will inherit, and gets access to all the methods and props that are defined on this proto prop
 * 
 * ! Adding method to Prototype Property:                                               # IMPLEMENTING BASIC PROTOTYPAL INHERITANCE
 * ---
 * using previous example:
 
const Person = function (name, birthYear) {
    this.name = name
    this.birthYear = birthYear  
}

// setting a methods to prototype property as "Person.prototype.methodName = function () {...}"
// as "Person.prototype" is an Object .. so we can add methods to this object
---
Person.prototype.calcAge = function(){
    return (new Date().getFullYear() - this.birthYear);
}

// calling methods
---
const harsha = new Person ("Harsha", 2001)
console.log(harsha.calcAge())
 * 
 * - after logging the object "harsha" to the console, we can see that there is no method called "calcAge" on the object .. but we can still call this method on the object
 * - this is because the object "harsha" has access to the method that was defined on the prototype property of the constructor function .. this is "PROTOTYPAL INHERITANCE"
 * 
 * NOTE:
 * ---
 * - we solved the problem of 'N' copies of methods .. when we instantiate 'N' objects from a cons. fn. (when we add calcAge() directly into the constructor fn., without using "cons.fn.prototype = method")
 * 
 * ! HOW AND WHY THIS ACTUALLY WORKS?
 * ---
 * - any object always has access to methods and props from it's prototype.. and here prototype of object: 'harsha' is Person prototype
 * 
 * - confirmation: each object has a special prop called "__proto__" .. (which points to the prototype of the object)
 *  ex: console.log(harsha.__proto__) => returns: {calcAge: ƒ, constructor: ƒ} .. this is the prototype of the object 'harsha'
 * 
 * - this above example explains us that prototype of harsha object is the prototype property of the constructor fn.: Person
 *  ex: console.log(harsha.__proto__ === Person.prototype) => returns: true
 * 
 * ! CONFUSION:
 * ! SHOULDN'T PERSON.PROTOTYPE BE THE PROTOTYPE OF PERSON (in Person.prototype => the prototype here, is not the prototype of the constructor fn.: Person)
 * ? no, it is not the prototype of Person!!! but it is the prototype of all the objects that are created with the Person constructor fn.
 * ? CONFIRMED-1: harsha.__proto__ === Person.prototype => {returns: true}
 * ? CONFIRMED-2: clg (Person.prototype.isPrototypeOf(Person)) => {returns: false} => here, isPrototypeOf() used to check if the prototype of the object is the prototype of the constructor fn. or not
 * 
 * ! Where does the "__proto__" come from for a Object: harsha?
 * ---
 * - as per 3rd point of bts of "new", this created object is linked to a 'prototype' => {} linked to a prototype 
 *   - it is stated that: 'new' operator create "__proto__" prop for any instance created from a cons. fn. and sets the value to the prototype property of that constructor fn.: Person
 * 
 * ! Setting a Property on Prototype (Not Only a Method):
 * ---
 * - we can set a property on prototype as well .. so that all the objects that are created from the constructor fn. will inherit this property

const Person = function (name, birthYear) {
    // instance properties
    this.name = name
    this.birthYear = birthYear
}

// setting a method on prototype
Person.prototype.calcAge = function() {
    return(new Date(). getFullYear() - this.birthYear)
}

// setting a property on prototype
Person.prototype.species = 'Homo Sapiens'

// creating objects
const harsha = new Person ("Harsha", 2001)

// logging the object: "harsha"
console.log(harsha)

Result:
---
Person {name: 'Harsha', birthYear: 2001}
    birthYear: 2001
    name: "Harsha"
    [[Prototype]]: Object
        > calcAge: ƒ ()
        > species: "Homo Sapiens"
        > constructor: ƒ (name, birthYear)
        > [[Prototype]]: Object
 * 
 * - from now on whatever the object that will be created from the cons.fn. will inherit the prototype properties and methods
 *   - visible under __proto__ object of the object that will be created 
 * 
 * * to check own properties of an object created from a constructor function
 * - use "".hasOwnProperty()""
ex: 
console.log(harsha.hasOwnProperty('name'))  // returns: true
console.log(harsha.hasOwnProperty('species'))   // returns: false
 * 
 * - species property is not inside of the object 'harsha', it has access to it on "__proto__" because of it's prototype
 * 
 * ! ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 * ! 5. Prototypal Inheritance and Prototype Chain
 * -----------------------------------------------
 * 
 * Explanation:
 * ---
 * 1. till now we defined a Constructor Function: 'Person' 
 * 2. we set a method: calcAge() on the prototype of the constructor fn.: Person => which is 'Person.prototype' (which is an Object)
 * 
 * - so, this Person.prototype also refers back to the 'Person' constructor fn. itself (which points back to person itself)

        Person = fn(name, year) {
            this.name = name
            this.year = year
        }
                            \\ .prototype ⬇️ POINTS-DOWN
                             \\
                              \\ .constructor ⬆️ POINTS-UP

                                Person.prototype.calcAge = function() {
                                    return(new Date(). getFullYear() - this.birthYear)
                                }
 * - This 'prototype' is not for the 'Person', but for all the objects that are created from the 'Person' constructor fn.
 * 
 * - Using 'new' operator we create an object: 
 *  1. first, an empty object will be created .. 
 *  2. "this" refers to the empty object (inside the fn. call) .. inside execution context 'this' is the new empty object ("this === {}")
 *      - that is why we set the properties on 'this' (this.name = name, this.birthYear = birthYear)
 *  3. new object is linked to the constructor fn.'s prototype property (so, Person.prototype is now the new object's prototype => which is denoted with __proto__)
 *  
 * NOTE:
 *   - this whole process just works with 'Constructor Functions' and 'ES6 Classes' but not with 'Object.create()' syntax
 *  
 * * every time we call Object.someMethod(), JS looks for that fn. on the Object if it is not defined inside the Object, then it looks for it into it's prototype / __proto__
 * * getting access of methods and props from a prototype is called "PROTOTYPAL INHERITANCE / DELEGATION" (... simply an object inherited / delegated a behavior / method to it's prototype ...)
 * 
 * ! Prototype Chain:
 * ---
 * ? The ability of looking up for methods and props from a prototype is called "PROTOTYPE CHAIN"
 * 
 * - in JS, all objects have a prototype: so, Person.prototype itself a prototype and it is an object too.. so it must also have a prototype
 *   - the prototype of 'Person.prototype' is "Object.prototype" 
 *   - (which happens BTS, where Person.prototype is created with 'Object' constructor so, it has Object.prototype as it's prototype)
 * 
 * - so, Objects: 'harsha' which was created from Person constructor fn. and has Person.prototype as it's prototype..
 *   - similarly, Person.prototype is created with Object Constructor fn. and has Object.prototype as it's prototype
 * 
 * * so, this entire series of links between 'prototypes' is called "PROTOTYPE CHAIN" (where Object.prototype is the top of this chain)
 *   - where __proto__ of Object.prototype points to "null" as it is the end of the chain !!!
 * 
 * PROTOTYPE CHAIN == SCOPE CHAIN 
 *   => in proto chain, JS looks for the props and methods whereas in scope chain JS looks for the variables/scopes
 * 
ex for a method lookup in a proto chain: 
---
harsha.hasOwnProperty('name')

 * ? Searching For hasOwnProperty() a Built-in Method:
 * ---
- JS, tries to find "hasOwnProperty()" method on the Object: 'harsha' itself (but JS cannot find this method on the Object created)
    - so it looks for "hasOwnProperty()" on it's __proto__ that is: "Person.prototype" if it cannot find there .. 
        - then it searches inside the __proto__ of Person.prototype and definitely finds there which is the top level of the chain that is: "Object.prototype" 

        Check Using: 
        console.log(harsha.__proto__) // Person.prototype
        console.log(harsha.__proto__.__proto__) // Object.prototype
        console.log(harsha.__proto__.__proto__.__proto__) // returns: null (so, Object.prototype is on top)

- !!! From any level the methods can not be copied they simply gets inherited !!!
 * 
 * ! ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 * ! 5. Prototypal Inheritance on Built-In Objects
 * -----------------------------------------------
 * - Prototypal Inheritance on Built-In Objects: such as Arrays 
 * 
const arr = [3, 4, 3, 6, 7, 5, 6, 7, 9]
console.log(arr.__proto__) // this returns all the methods that can be used on an array // inherited from prototype of Array constructor function
 * 
 * - this arr.__proto__ returns a bunch of methods (but any array created does not have all these methods but every array inherit them from it's prototype)
 * 
 * ? From Where Does Every Array Inherit These Methods?
 * ---
 * * every array created in code inherit methods like: (map, reduce, filter, concat, etc.,) from a common constructor fn. that is Array constructor fn. (which is common for every array)
 * 
clg(arr.__proto__ === Array.__proto__)  // returns: true => which means every array inherits methods from prototype of Array constructor fn. 
 * 
 * ! Addition of New Method to the Prototypes of an Array Constructor
 * ---
 * - we can add a new method to the prototype of an Array constructor and every array that was created in the code gets access to it by inheritance
 * 
// adding a method to the prototype of Array constructor
Array.prototype.unique = function () {
    return [...new Set(this)]
}

console.log(arr.unique()) // returns: (6) [3, 4, 6, 7, 5, 9]
 * 
 * ! from above code, we extended prototype of a built-in object: Array => however this is not a good idea
 * 
 * - so, DOM elements are also objects and they have '__proto__' on them

// select an element, h1
const h1 = dom.querySelector('h1')
console.log(h1)
 * - with this we can see different levels of prototypes of elements on DOM tree
 * 
 * ! ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 * ! 6. Coding Challenge #1
 * ------------------------
 * 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h
 * 
// create a constructor fn. on the name of Car
const Car = function(make, speed) {
    this.make = make
    this.speed = speed
}

// create a prototype: accelerate on constructor fn.
Car.prototype.accelerate = function(){
    this.speed = this.speed + 10
    return this.speed
}

Car.prototype.brake = function() {
    this.speed = this.speed - 5
    return this.speed
}

// Instantiate two objects
const bmw = new Car('BMW', 120)
const mercedes = new Car('Mercedes', 95)

console.log(bmw)
console.log(mercedes)

console.log(bmw.accelerate())
console.log(bmw.brake())
 * 
 * ! ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 * ! 7. ES6 Classes
 * ----------------
 * 
 * - the modern way of implementing OOPs in JS | whereas syntax is different => there are two ways of implementing this... "Class Declaration" and "Class Expression"
 * - as classes are similar to functions that's why we have two types of syntaxes: declaration and expression
 * 
 * Class Expression:
 * ---
const Person = class{...}
 * 
 * Class Declaration:
 * ---
class PersonCl{
    constructor(firstName, birthYear) {     // add a constructor method in the Class: "PersonCl" | this takes 
        this.firstName = firstName
        this.birthYear = birthYear
    } 
}
 * - add a method: constructor(param1, param2) | this works as a fn. and arguments passed to it will be taken as properties while creating instance from the class
 * - when we create a new instance, constructor inside the class will be called and returns a new object with property values passed as arguments
 * 
 * ! Including Methods Inside a Class (Outside Constructor Fn. of That Class):
 * ---
class PersonCl{
    constructor(firstName, birthYear) {
        this.firstName = firstName
        this.birthYear = birthYear
    }

    // Fn. declared here... are to be added on to the ".prototype" property of "PersonCl"
    calcAge() {
        return (new Date().getFullYear() - this.birthYear)
    }
}
 * - the fns. that were declared inside a class and outside constructor fn. are taken into the prototypes of the objects (objects that will be created as instances from a class)
 * - by this way the methods are created on the prototypes of the instances created from a class 
ex: check out: 
---
console.log(vardhan.__proto__ === PersonCl.prototype)   // returns: true
 * 
 * - no need to use "PersonCl.prototype.methodName = function() {...}" to add methods to the prototype of the class we can simply declare them inside the class .. 
 *   - we can also follow this: "PersonCl.prototype.methodName = function() {...}" 
 * 
 * ! Important Things to Know About Classes:
 * ---
 * 1. classes are NOT hoisted! 
 * 2. just like functions, classes are also 1st- class citizens (which means that we can pass these classes into a fn. and return them from fns => cause classes are fs. BTS)
 * 3. class body (all the code inside the class) executed each time in "STRICT mode"
 * 
 * ! ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 * ! 8. Setters and Getters
 * ------------------------
 * ? 1. Getters and Setters in Objects:
 * ---
 * - every object in JS, can have setters and getter properties.. we call these special properties as "ACCESSOR PROPERTIES" (while other normal properties are "DATA" properties)
 * - these are basically functions that get and set a value, but outside of the object .. they are used as properties
 * 
 * ! we transform a method into a property using "get" and "set" keywords
 * 
const account = {
    owner: 'Harsha',
    movements: [200, 300, 400, 500, 300],

    // ACCESSOR PROPERTIES
    get latest() {
        return this.movements.slice(-1).pop()       // normal method with 'get' at the beginning
    },

    set latest(mov) {
        this.movements.push(mov)        // normal method with 'set' at the beginning
    }
}
console.log(account.latest) // returns: 300
account.latest = 50         // setters can not be called as methods like this: "latest(50)"
 * 
 * rules:
 * ---
 * - these can be called on an object with simply as a property name (without any parenthesis)
 * - any setter method must have a parameter at least
 * 
 * ? Getter and Setters in Classes:
 * ---
class PersonCl{
    constructor(firstName, birthYear) {
        this.firstName = firstName
        this.birthYear = birthYear
    }

    calcAge() {
        return (new Date().getFullYear() - this.birthYear)
    }

    // getter
    get age() {
        return (new Date().getFullYear() - this.birthYear)
    }

    // setters
    set fullName(name) {
        // console.log(name)
        if(name.includes(' ')){
            this._fullName = name
        }
        else {
            alert(`${name} is not a full name!`)
        }
    }
    get fullName() {
        return this._fullName
    }
}
const vardhan = new PersonCl('harsha vardhan', 2001)
vardhan._fullName = 'Harsha Vardhan'
console.log(vardhan)
 * 
 * ! ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 * ! 9. Static Methods
 * -------------------
 * - static methods are attached to the constructor function itself, not to the prototype 
 * ---
 * Array.from() 
 * => Array is the constructor function and from() is the static method
 * ex:
 * - Array.from(document.querySelectorAll('h1')) => returns: an array of all the 'h1' elements
 * - However, we can not use from like this: [1, 3, 5].from() .. even [1, 3, 5] is an array 
 * 
 * * So, here from() is attached to the entire 'Array Constructor' but not on the prototype of the Array Constructor, therefore all the arrays do not inherit this method
 * 
 * ? Static Methods in Constructor Functions:
 * ---
const Person = function (name, birthYear) {

    // instance properties
    this.name = name
    this.birthYear = birthYear
}

// adding a static method on to a cons. fn.
Person.greet = function() {
    console.log('Hey there! 👋')
}

// calling the static method from a cons. fn...
Person.greet() // returns: Hey there! 👋

// creating an instance and calling the static method on the instance... 
const harsha = new Person ("Harsha", 2001)
!!! harsha.greet() // returns an error: harsha.greet is not a function !!!
 * 
 * ? Static Methods on Classes:
 * ---
class PersonCl{
    constructor(firstName, birthYear) {
        this.firstName = firstName
        this.birthYear = birthYear
    }

    // instance methods
    calcAge() {
        return (new Date().getFullYear() - this.birthYear)
    }

    // static method
    static greet() {
        console.log('Hey there! 👋')
    }
}

// calling the static method on the class itself
PersonCl.greet() // returns: Hey there! 👋

// creating an instance and calling the static method on the instance...
const vardhan = new PersonCl('Harsha Vardhan', 2001)
!!! vardhan.greet() // returns an error: vardhan.greet is not a function !!!
 * 
 * ! ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 * ! 10. Object.create()
 * ---------------------
 * - we can use Object.create() to manually set a prototype of an object to any other object that we want!
 * 
 * steps:
 * 1. create a prototype object that would be the prototype for all the objects (we manually set prototype using: Object.create())
 * 2. create a new object using that prototype object (using Object.create())
 * 3. add properties to the new object (if needed!)
 * 
const PersonProto = {
    calcAge(){
        return (new Date().getFullYear() - this.birthYear)
    },
}

const steve = Object.create(PersonProto)
steve.fullName = 'Steve Jobs'
steve.birthYear = 1955

console.log(steve)

// without hardcoding the fullName and birthYear props... create a method which create an object with these props
PersonProto.init = function(fullName, birthYear){
    this.fullName = fullName
    this.birthYear = birthYear
}

const stark = Object.create(PersonProto)
stark.init('Tony Stark', 1970)

console.log(stark)

// check the prototype of object created: "steve" and PersonProto are equal or not?
console.log(steve.__proto__ === PersonProto) // returns: true
 * 
 * Summary:
 * ---
 * Automatic: 
 * - with the constructor fn. new operator is used which automatically sets the prototype of the instances to the constructor's prototype property
 * 
 * Manual: 
 * - we can set the prototype of an object manually using Object.create() method to any Object that we want
 * 
 * ? the prototype chains work exactly similar here, but the difference is that we don't need 'constructors' and 'classes'
 * ? we need Object.create() to implement inheritance between classes !!!
 * 
 * Conclusion:
 * ---
 * - Object.create(): creates a new object and the prototype of the object will be the object that we passed as an argument to the Object.create()
 * 
 * ! ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 * ! 11. Coding Challenge #2
 * -------------------------
 * 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
 * ? -------------------------------------------------------
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
 * 
 * ! ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 * 
 * 
 * 
 * 
*/