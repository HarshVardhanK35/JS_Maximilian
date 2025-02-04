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


// 2. Creating UserNames
// ---

// ex:
// --- single_user
// const account1 = {
//   owner: "Jonas Schmedtmann",
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// --- accounts_array
// const accounts = [account1, account2, account3, account4];

const createUsernames = function (accs) {
  accs.forEach ((acc) => {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((part) => {
        return part[0]
      }).join('')
  })
}
createUsernames(accounts)


// 3. Calculate and Display the Balance
// ---

// const account1 = {
//   owner: "Jonas Schmedtmann",
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

const calcDisBalance = (acc) => {
  const balance = acc.movements.reduce ((acc, mov) => {
    return acc + mov;
  }, 0)
  acc.balance = balance
  labelBalance.textContent = `${acc.balance} EUR`
}


// 4. Calculate and Display the Summary
// ---
const calcDisplaySummary = (acc) => {

  const incomes = acc.movements.filter((mov) => {
    return mov > 0
  }).reduce((acc, inc) => {
    return acc + inc
  }, 0)
  labelSumIn.textContent = `${incomes}€`

  const out = acc.movements.filter((mov) => {
    return mov < 0
  }).reduce((acc, out) => {
    return acc + out
  }, 0)
  labelSumOut.textContent = `${Math.abs(out)}€`

  const interest = acc.movements.filter((mov) => {
    return mov > 0;
  }).map((deposit) => {
    return (deposit * acc.interestRate) / 100 // 1.2% interest rate
  })
  // new rule: if the interest is greater than or equal to 1, then only we will add that interest to the summary
  .filter((int, ind, arr) => {
    // console.log(arr)
    return int >= 1;
  })
  .reduce((acc, int) => {
    return acc + int;
  })
  labelSumInterest.textContent = `${interest}€`
}

// Bonus: Update the UI
const updateUI = (acc) => {
  // display current balance
  calcDisBalance(acc)

  // display summary
  calcDisplaySummary(acc)

  // display movements
  displayMovements(acc.movements)
}

// 5. Implementing Login
// ---
let currentAccount;
btnLogin.addEventListener('click', (e) => {
  
  // prevent form from submitting...
  e.preventDefault()

  // find the account with login account username
  currentAccount = accounts.find((acc) => {
    return acc.username === inputLoginUsername.value.toLowerCase().trim()
  })
  // console.log(currentAccount)

  // check the pin associated with curr.acc and the pin entered
  if(currentAccount?.pin === +inputLoginPin.value){

    // emptying form fields
    inputLoginUsername.value = inputLoginPin.value = ''
    inputLoginPin.blur() // to remove focus

    // display UI and welcome message 
    labelWelcome.textContent = `Welcome, ${currentAccount.owner.split(' ')[0]}!`
    containerApp.style.opacity = 1;

    // Update the UI 
    updateUI(currentAccount)

    // console.log(currentAccount)
  }
})


// 6. Implementing Transfers
// --- 
btnTransfer.addEventListener('click', (e) => {
  e.preventDefault();

  const amount = +(inputTransferAmount.value)
  const receiverAcc = accounts.find((acc) => {
    return acc.username === inputTransferTo.value
  })
  // console.log(amount, receiverAcc)

  // currentAccount variable is defined inside implementation of login
  // check that receiver's username and currentAccount holder username are not equal (we can use optional chaining for this ?.)
  // check that amount greater than 0 and currentAcc balance must be greater than amount that has to transferred
  if(amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username) {     

    // operating with transfers
    currentAccount.movements.push(-amount)
    receiverAcc.movements.push(amount)

    // Update The UI
    updateUI(currentAccount)
  }
  // clean the input fields
  inputTransferAmount.value = inputTransferTo.value = ''
  inputTransferAmount.blur()
})

// 8. Loan Request
// ---
btnLoan.addEventListener('click', (e) => {
  e.preventDefault()

  // rule: to avail loan amt., there must be one deposit with at least 10% of requested loan amt
  const amount = +inputLoanAmount.value

  if(amount > 0 && currentAccount.movements.some((mov) => {
  return (mov >= (0.1 * amount))
  })) {
    
    // add amount to the user movements
    currentAccount.movements.push(amount)

    // update UI
    updateUI(currentAccount)
  }
  // clear the input fields
  inputLoanAmount.value = ''
  inputLoanAmount.blur()
})

// 7. Delete an account 
// --- 
btnClose.addEventListener('click', (e) => {
  e.preventDefault()

  if(inputCloseUsername.value.toLowerCase().trim() === currentAccount.username && +inputClosePin.value === currentAccount.pin) {
    // console.log("closed")

    const index = accounts.findIndex((acc) => {
      return acc.username === currentAccount.username
    })

    // delete the account
    accounts.splice(index, 1)

    // hide UI
    containerApp.style.opacity = 0;
  }
})

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
// console.log(arr.splice(0, 1))
// console.log(arr)
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

const checkDogs = (dogsJulia, dogsKate) => {

  let newDogsJulia = dogsJulia.slice();
  
  newDogsJulia.splice(0, 1)
  newDogsJulia.splice(-2)

  const dogs = [...newDogsJulia, ...dogsKate]; // we can use ".concat()" method also on 2 arrays

  dogs.forEach((dogsAge, i) => {
    if (dogsAge >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dogsAge} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  })
}
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])


// ------------------------------------------------------------------------------------------------------------------------------------
// 5. Data Transformation: Map, Filter and Reduce

// MAP
// MAP is similar to forEach method but the main difference is that MAP creates a new array based on the original array
// performs some operation on each element of the original array and then returns a new array with the results of those operations
// ---

// FILTER
// Filters the elements on a certain condition and prepares a new array with the elements that satisfy that condition and returns that new array
// ---

// REDUCE
// reduce is used to reduces or accumulates all the elements of the array into a single value 
// (eg: sum of all elements into a value, average of all elements, etc.)
// REDUCE has an accumulator and the current element and this keeps adding the current element to the accumulator


// ------------------------------------------------------------------------------------------------------------------------------------
// 6. The map Method

const movements1 = [200, 450, -400, 3000, -650, -130, 70, 1300];
const rupToUsd = 0.012;

// using map method
const movementsUSD = movements1.map((movement) => { // using functional programming which creates a new array 
  return movement * rupToUsd;
})
// console.log(movementsUSD)

// using for-of method
const movementsUSDfor = [];
for(const movement of movements1) {
  movementsUSDfor.push(movement * rupToUsd) // manually creating a new array while looping through the original array
}
// console.log(movementsUSDfor)

// with map method also we have three arguments like forEach method that are: current element, current index and the entire array
// ---
const movementsDescriptions = movements1.map((movement, i, arr) => {
  
  if (movement > 0) {
    return `Movement ${i + 1}: You deposited ${(movement)}`
  }
  else {
    return `Movement ${i + 1}: You withdrew ${Math.abs(movement)}`
  }
  // or we can use ternary operator
  // return `Movement ${i + 1}: You ${movement > 0 ? "deposited" : "withdrew"} ${Math.abs(movement)}`;
})
// console.log(movementsDescriptions)

// Note: 
// each of the element is logged to the console after every operation while using for method, this is called "side effects"
// but with map every string is added into a new array and logged to the console at once 


// ------------------------------------------------------------------------------------------------------------------------------------
// 7. The filter Method

// filter method is used to filter the elements of an array based on a certain condition .. and it returns a new array with the elements that satisfy that condition
// ---
const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];
const depositsOnly = movements2.filter ((mov) => {
  if (mov > 0){
    return mov;
  }
})
// console.log(depositsOnly)

// make an array similarly for withdrawals ..

// NOTE:
// advantages of using these higher order functions like map, filter, reduce in JS is that .. 
// we can chain different methods together (with string and array methods together and separately also) .. 
// this cannot be achieved with for, forEach and for-of looping ..


// ------------------------------------------------------------------------------------------------------------------------------------
// 8. The reduce Method

// reduce method is used to reduce or accumulate all the elements of an array into a single value 
//  - (ex: adding up all the elements of an array into a value.)
// reduce method has an accumulator and the current element and this keeps adding the current element to the accumulator
// ---
// reduce method has two arguments: the callback fn. and the initial value of the accumulator
// the callback fn. has four arguments: accumulator, current element, current index and the entire array
// ---
const movements3 = [200, 450, -400, 3000, -650, -130, 70, 1300];
const totalBal = movements3.reduce((acc, cur, ind, arr) => {
  return acc + cur
}, 0)
// console.log(totalBal)

// with reduce method we can do more stuff not only simple additions and multiplications etc.,
// in the below example, we are trying to get the largest element from an array ..
// ---
const max = movements3.reduce ((acc, cur, ind) => {
  if (acc > cur) {
    return acc
  }
  else {
    return cur
  }
}, movements3[0])
// console.log(max)


// ------------------------------------------------------------------------------------------------------------------------------------
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and 
calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: 
  - if the dog is <= 2 years old, humanAge = 2 * dogAge. 
  - If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAge = (ages) => {
  
  const humanAges = ages.map((humanAge) => {
    return (humanAge <= 2 ? 2 * humanAge : 16 + (4 * humanAge))
  })
  const adultAges = humanAges.filter((humanAge) => {
    return humanAge > 18
  })
  const avg = adultAges.reduce((acc, cur, ind, arr) => {
    return (acc + cur)
  }, 0) / arr.length
  return avg
}

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])
// console.log(avg1, avg2)


// ------------------------------------------------------------------------------------------------------------------------------------
// 9. Chaining Methods

// chaining methods is a powerful feature of higher order functions in JS and it is used to chain multiple methods together
// ---
const movements4 = [200, 450, -400, 3000, -650, -130, 70, 1300];
const rupToUsd1 = 1.1; 

const totalDepositsUSD = movements4
.filter((mov) => {
  return mov > 0
})
.map((mov) => {
  return mov * rupToUsd1
})
.reduce((acc, curMov) => {
  return acc + curMov
}, 0)
// console.log(totalDepositsUSD)

// NOTE:
// 1. chaining methods is a great way to write clean and readable code but chaining too many methods can raise performance issues
// 2. Bad Practice: to chain methods that mutate the original array (like splice, reverse, etc.) --- avoid mutating arrays


// ------------------------------------------------------------------------------------------------------------------------------------
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
// already done ...

const calcAverageHumanAge1 = (ages) => {
  
  const humanAges = ages.map((humanAge) => {
    return (humanAge <= 2 ? 2 * humanAge : 16 + (4 * humanAge))
  }).filter((humanAge) => {
    return humanAge > 18
  }).reduce((acc, cur, ind, arr) => {
    return (acc + cur / arr.length)
  }, 0) 
  return humanAges
}

const avg11 = calcAverageHumanAge1([5, 2, 4, 1, 15, 8, 3])
const avg22 = calcAverageHumanAge1([16, 6, 10, 5, 6, 1, 4])
// console.log(avg11, avg22)


// ------------------------------------------------------------------------------------------------------------------------------------
// 10. The find Method

// find method is used to find the first element in the array that satisfies a certain condition and returns that element .. it requires a boolean condition
// ---
const movements5 = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWithdrawal = movements5.find((mov) => {
  return mov < 0
})
// console.log(firstWithdrawal)

// using find method
const account = accounts.find((acc) => {
  return acc.owner === "Jessica Davis"
})
// console.log(account)

// using for-of method
for (const account of accounts) {
  if (account.owner === "Jessica Davis") {
    // console.log(account)
  }
}


// ------------------------------------------------------------------------------------------------------------------------------------
// 11. Implementing Login

// The default behavior of submit in form of a HTML doc is to reload the page and we can prevent that by using "e.preventDefault()" method 
// btnLogin.addEventListener('click', (e) => {
//   e.preventDefault()
//   console.log('Login')
// })


// ------------------------------------------------------------------------------------------------------------------------------------
// 12. FindIndex Method

// findIndex returns the index of the found element not the element like find method
// similar to find.. findIndex has access to current index and current array
// ---
// as an example and explanation of syntax, I have demonstrated the application fo findIndex() by deleting the account of the user


// ------------------------------------------------------------------------------------------------------------------------------------
// 13. The findLast and findLastIndex methods

// these methods start searching from the last index {findLast: "searches for element"; findLastIndex: "searches for last index"} 
// both are similar to find and findIndex...
// ---
// ex: 
const movements6 = [200, 450, -400, 3000, -650, -130, 70, 1300];

// findLast
const lastElement = movements6.findLast((mov) => {
  return (mov < 0)
})
// console.log(lastElement)

// use-case: "Your latest large movement was X moments ago"  // -> this searches from the last occurred transactions 

// findLastIndex -> largeMovementIndex that is greater than 1000
const largeMovementIndex = movements6.findLastIndex((mov) => {
  return (Math.abs(mov) > 1000)
})
// console.log(`The latest large movement was ${movements.length - largeMovementIndex} moments ago`)


// ------------------------------------------------------------------------------------------------------------------------------------
// 14. Some and Every

// SOME: 
// similar to includes method ".includes()" -> returns 'true' if the passed element is there inside an array and -1 if not
// includes returns true only passed arg is exactly equal and present in the given array -> "testing for equality"
// ---
// but SOME takes a cb fn. -> test for a condition instead
// ---
// to check any deposits, we check for positive movements in the array (greater than 0) .. as for equality '===' we can use "includes"
// ---

const anyDeposits = movements6.some((mov) => {
  return mov > 0
})

// Note:
// a real-time application was implemented back in the BANKIST application (at requesting loan section)


// ------------------------------------------------------------------------------------------------------------------------------------
// EVERY:
// true is returned, if all elements in the array satisfies a condition .. 
// so to check whether an account has all positive movements that is all are deposits ..

const hasDeposits = account4.movements.every((mov) => {
  return (mov > 0)
})
// console.log(hasDeposits)


// ------------------------------------------------------------------------------------------------------------------------------------
// 15. Flat and flatMap:

// FLAT:
// if there are nested arrays, ex: [[[1, 2, 3], 4, 5], [6, 7, [8, 9]], [11, 21]]
// the flat method.. flattens the array into single array without any nested arrays
// flat always works by "1" level 'default' but we can 'specify the level by passing the args'
// ---

const arr1 = [[1, 2, 3], 4, 5, [6, 7 ]]   // level-1 of nesting
// console.log(arr1.flat())  // (7) [1, 2, 3, 4, 5, 6, 7]

const arrDeep = [ [ [1, 2] , 3, 4], [5, [6, 7, 8] ] ]  // level-2 of nesting
// console.log(arrDeep.flat(2))     // (8) [1, 2, 3, 4, 5, 6, 7, 8]

// without chaining
// const accountMovements = accounts.map((acc) => {
//   return acc.movements
// })
// const allMovements = accountMovements.flat()
// console.log(allMovements)

// const sumOfMovements = allMovements.reduce((acc, mov) => {
//   return acc + mov
// }, 0)
// console.log(sumOfMovements)

// with chaining of methods
const totalOfAccMovements = accounts
.map((acc) => {
  return acc.movements
}).flat()
.reduce((acc, mov) => {
  return acc + mov
}, 0)
// console.log(totalOfAccMovements)

// FLATMAP:
// if there is a use of map 1st and flat at second, we use flatMap() method to replace both usage of map() and flat()
// ---
// .map((acc) => {
//   return acc.movements     // replaced with flatMap()
// }).flat()
// ---
// flatMap() just goes 1 level deep.. if we want to go deep than 1 we can use 'flat' and 'map' separately

const totalOfAccMovements1 = accounts
.flatMap((accMov) => {return accMov.movements})
.reduce((acc, mov) => {
  return acc + mov
}, 0)
// console.log(totalOfAccMovements1)


// ------------------------------------------------------------------------------------------------------------------------------------
// Coding Challenge #4
/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). 
  - HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? 
  - Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.
*/

// TEST DATA:
// ---
const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];

// 1. Store the the average weight of a "Husky" in a variable "huskyWeight"
// ---
const huskyWeight = breeds.find((breed) => {
  return breed.breed === "Husky"
}).averageWeight
// console.log(huskyWeight)

// 2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
// ---
const dogBothActivities = breeds.find((breed) => {
  return breed.activities.includes("running") && breed.activities.includes("fetch")
}).breed
// console.log(dogBothActivities)

// 3. Create an array "allActivities" of all the activities of all the dog breeds
// ---
// using map() and flat() separately
const allActivities = breeds.map((breed) => {
  return breed.activities
}).flat()
// console.log(allActivities)

// using flatMap() 
const allActivities1 = breeds.flatMap((breed) => {
  return breed.activities
})
// console.log(allActivities1)

// 4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions).
// --- a set to make unique
const setOfAllActivities = [...new Set(allActivities)]
// console.log(setOfAllActivities)

// 5. Many dog breeds like to swim. What other activities do these dogs like? 
// Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
// ---
const breedsIncludeSwimming = breeds
.filter((breed) => {
  return breed.activities.includes("swimming")
})
.flatMap((breedsActivities) => {
  return breedsActivities.activities
})
const swimmingAdjacent = [... new Set(breedsIncludeSwimming.filter((activities) => {
  return (activities !== 'swimming')
}))]
// console.log(swimmingAdjacent)

// 6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
// ---
const breedsWithWeightAbove10 = (breeds.every((breed) => {
  return breed.averageWeight >= 10
}))
// console.log(breedsWithWeightAbove10)

// 7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".
// ---
const activeBreeds = (breeds.some((breed) => {
  return breed.activities.length >= 3
}))
// console.log(activeBreeds)

// BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.
// ---
const breedsWeightsLikeFetch = breeds.filter((breed) => {
  return breed.activities.includes("fetch")
}).map((breed) => {
  return breed.averageWeight
})
const heaviestBreedsLikeToFetch = Math.max(...breedsWeightsLikeFetch)
// console.log(heaviestBreedsLikeToFetch)