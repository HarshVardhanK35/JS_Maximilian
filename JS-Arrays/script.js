"use strict";

// ------------------------------------------------------------------------------------------------------------------------------------
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// BANKIST APP
// ---

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
displayMovements(account1.movements);

// ------------------------------------------------------------------------------------------------------------------------------------
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// ------------------------------------------------------------------------------------------------------------------------------------
// 1. Simple Array Methods

let arr = ["a", "b", "c", "d", "e"];

// SLICE
// slice method does not mutate the original array instead it returns a new array with the sliced elements
// ---
// console.log(arr.slice(2)); // ["c", "d", "e"]
// console.log(arr.slice(2, 4)); // ["c", "d"] --- with the end index not included
// console.log(arr.slice(-2)); // ["d", "e"] --- negative index starts from the end of the array
// console.log(arr.slice(1, -2)); // ["b", "c"] --- negative index starts from the end of the array

// SPLICE
// splice method does mutate the original array and returns the removed elements
// ---
// console.log(arr.splice(2)); // ["c", "d", "e"]
// arr.splice(-1); // ["a", "b", "c", "d"]
// arr.splice(1, 2); // ["a", "d"] --- with the end index not included
// console.log(arr);

// REVERSE
// reverse method mutates the original array and returns the reversed array
// ---
const arr2 = ["j", "i", "h", "g", "f"];
// console.log(arr2.reverse()); // ["f", "g", "h", "i", "j"]
// console.log(arr2); // ["f", "g", "h", "i", "j"]

// CONCAT
// concat method does not mutate the original array instead it returns a new array with the concatenated arrays
// ---
const letters = arr.concat(arr2);
// console.log(letters); // ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
// console.log([...arr, ...arr2]); // we can also use the spread operator to concatenate arrays

// JOIN
// join method does not mutate the original array instead it returns a string with the elements joined by the specified separator
// --- returns type is 'string'
// console.log(letters.join(" - ")); // a - b - c - d - e - f - g - h - i - j


// ------------------------------------------------------------------------------------------------------------------------------------
// 2. The new At Method (ES2022)

// The 'AT' method is a new method that is introduced in ES2022 and it is used to access elements in an array
// we have to specify the index of the element that we want to access
// a replica or an alternative for bracket notation that is => console.log(letters[0]); // "a"
// ---
// console.log(letters.at(0)); // "a" 

// the 'AT' method is useful when we want to access elements in an array with a negative index
// a replica for .slice() method that is => console.log(letters.slice(-1)); // ["j"] and we can access that element with its index that is '0'
// ---
// console.log(letters.at(-1)); // "j"

// use cases for 'AT' method: best when we use to access with negative index and while method chaining
// this 'AT' is also used on strings


// ------------------------------------------------------------------------------------------------------------------------------------
// 3. Looping Arrays: forEach Method

// forEach method is used to loop through the elements of an array and it is a higher order fn.
// it takes a callback fn. as an argument and it is called for each element in the array
// ---
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// positive values are deposits and negative values are withdrawals

// we used to have for-of loop to loop through the elements of an array and forEach method is a better alternative 
// ---
// for (const movement of movements) { // --- to get index also: for (const [ind, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement} at index ${ind}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)} at index ${ind}`);
//   }
// }

// forEach method is a higher order fn. and it takes a callback fn. as an argument and it is called for each element in the array
// forEach loops over the array and for every iteration the callback fn. is applied / executed
// as forEach calls this callback fn., in each iteration it passes the current element as an arg, the current index and the entire array
// ---
// movements.forEach((crrEle) => {
//   if (crrEle > 0) {
//     console.log(`You deposited ${crrEle}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(crrEle)}`);
//   }
// })
// BTS
// 0: function(200)
// 1: function(450)
// 2: function(-400) ... 

// in forEach we can access the 'index' and 'current array' in addition to 'current element'
// but the order of these arguments is fixed and we cannot change that (order: important)
// ---
// movements.forEach((crrEle, ind, arr) => {
//   if (crrEle > 0) {
//     console.log(`Movement ${ind + 1}: You deposited ${crrEle}`);
//   } else {
//     console.log(`Movement ${ind + 1}: You withdrew ${Math.abs(crrEle)}`);
//   }
// })

// NOTE: 
// 1. in 'for-of' we get the index at '1st' and in 'forEach' we get the index at '2nd' position
// 2. "continue" and "break" statements do not work in 'forEach' method and these works on 'for-of' loop


// ------------------------------------------------------------------------------------------------------------------------------------
// 4. forEach With Maps and Sets

// forEach method can also be used with Maps and Sets and it works in the same way as it works with arrays
// ---

// Map
// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

currencies.forEach((value, key, map) => {
  // console.log(`${key}: ${value}`);
})

// Set
// as sets do not have keys or indexes, so the first two arguments are the same
// but to avoid confusion JS lang developers has followed the three arguments pattern for sets also
// so use throwaway variables like '_' which indicate that we are not going to use '_' in the callback fn. parameters
// ---
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
currenciesUnique.forEach((value, _, map) => {
  // console.log(`${value}: ${value}`); // res: USD: USD, GBP: GBP, EUR: EUR (which indicate that sets have only values and no keys)
})


// ------------------------------------------------------------------------------------------------------------------------------------
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, 
  - and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. 
    - A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, 
  - not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array 
    - (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") 
  - or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

