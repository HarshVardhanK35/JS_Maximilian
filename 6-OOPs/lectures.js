//! !! OBJECT ORIENTED PROGRAMMING !!
//? ---------------------------------

/**
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
 *  - methods inside this interface that a code outside of objects can access and communicate with the object
 * 
 * - this paradigm was developed to organize the code to make it flexible and maintained easily
 * 
 * - till now we have been using objects as loose collections of data and without making them to interact with each other and also we didn't generate objects programmatically
 * * but in OOP we code to generate new Objects without simply using object literals 
 * 
 * - In traditional OPPs, we use CLASSES to generate objects {classes are type of blueprints: blueprint is a plan with set of rules} .. 
 *  - so with these classes as blueprint we can build objects with set of rules and logic inside it!
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
 * 
 * - using this class a new Object is constructed .. every object that was Constructed from a class which is called "INSTANCE" of that Class
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
 * - an Instance(s) is a real object(s) that was built from a class which now can be used in the code (as class is not an object)
 *  - this instance is like a real-house that was built from a blueprint that was created .. so with the use of this same blueprint we can built as many objects as we can that we need
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
THEORETICAL ex - encapsulation:
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

    PRIVATE method1() {.. logic ..}     // .. as these methods are used inside the obj where it were declared but not outside of those classes 
}
 * - this is an hypothetical example, as PRIVATE keyword does not exist in JS | 
    - these properties with PRIVATE can not be accessible outside the obj where it was declared 
    - however they can be accessible inside the class
 * - this prevents external environment to accidentally manipulate the internal properties / state
 * 
 * - In an API, all methods are not private they made public for interaction .. so API methods are not encapsulated
 * 
 * ? Why Encapsulation?
 * ---
 * - even if we change the logic inside private methods, it could not break the code. (because of private methods are not used anywhere outside the declared class)
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
 * - in above example, there are similarities between User and Admin classes .. as Admin has lot properties common to User class has! 
 * - as User and Admin classes has similar properties .. so, Inheritance can be used here and one class inherit from other then we have one parent and child class
 * - class which "inherits" from other is child and where child class "extends" parent class .. 
 * - so child class inherits some prop & logic from parent and additionally of it's own props & logic .. 
 * 
 * ! 4. POLYMORPHISM
 * --- 
 * - "MANY SHAPES"
 * * a child class can "overwrite" a method it inherited from a parent class 
ex: 

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
 * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
 *  - prototype objects contains methods and properties so that all the objects linked to that prototype can access and use |
 *  - this behavior is called "PROTOTYPAL INHERITANCE"
 * 
 * ? PROTOTYPAL INHERITANCE:
 * - all the objects linked to a certain prototype object can use the methods and props that are defined on that prototype
 *  - objects inherit methods and props from a prototype, so this is why it is called "prototypal inheritance"
 * ? NOTE: prototypal inheritance (which is an instance inheriting from a class) is different from class: inheritance (which is one class inheriting another class) 
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
 * 
 * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 * ! 3. Constructor Functions and the New Operator
 * -----------------------------------------------
 * - we can use constructor functions to create objects using a fn. so the diff between normal and constructor fn is that we call a constructor fn with "new" operator
 * 
 * - rules:
 * 1. constructor fn naming shall be started with a capital 
 * 2. do not use arrow fns. to create constructor fns .. cause these do not have access to 'this' keyword (their own 'this' keyword) => only fn expressions and declarations
 * 3. 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */