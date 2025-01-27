/**
 * SETS
 * ------- syn: new Set( type: iterable )
 * collection of unique values .. no duplicates and can have mixed of data types .. order is irrelevant
 * new Set () ... takes in an "iterable" ... commonly an array is passed !!!
 * as strings are also iterables ('johannes') .. they can also be passed .. but they are splitted into an array of characters !
 *    - Set(5) {'j', 'o', 'n', 'a', 'e', 's'}
 * sets has no indices and there is no way of getting values out of the set using it's index.
 *
 * methods on sets:
 * -------------------
 * .size() // returns the number of elements that were present in the array
 * .has() // returns a 'true' ? "when there an element is there inside the set that we passed" : false
 * .add() // passed val is already there ? add does not work : adds value into the set
 * .delete() // "passed arg is there in the set" ? delete works : 'if console.logged returns a false'
 * .clear() // does not take any arg but clears all the elements from the set
 *
 * looping:
 * -----------
 * looping works! --- apply for-of on the set
 *
 */

// SETS
const arr = ['jonas', 'Udemy', 'teaching']
const set = new Set(arr)

// console.log(set) // re: Set(4) {1, 2, 3, 4}

// Methods on Sets { .size, .add(), .delete() }

// .size
// there is nothing that .size expects .. so no arg shall be passed!
// returns the actual size of the set : neglecting the duplicates

// console.log(new Set( ['Jonas', 'Max', 'Colt', 'Mead'] ) .size)

// console.log(set.delete(5)) // re: false "if passed element is not there"


// looping
for (const ele of arr) {
  // console.log(ele)
}

// spread operator use-case
const newSet = new Set([...arr])
// console.log(newSet)


/**
 * SETS - part.2
 * ----------------
 * new methods that were introduced in new era of JS .. (ES-2025)
 *
 * .intersection: (returns a set with the common elements from two sets)
 *    - syn: set1.intersection(set2)
 * .union: (returns a set of elements not the common ones .. removes the duplicates from two sets)
 * .difference: returns the unique elements from 1st array 
 * .symmetricDifference: returns the unique elements from both the arrays.. opposite of intersection
 *
 */

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// tip: to get an array from a set .. use spread operator
// console.log([...commonFoods]) // return: (2) ['tomatoes', 'garlic']

// console.log(italianFoods.intersection(mexicanFoods)) // return: Set(2) {'tomatoes', 'garlic'}
const intersectionFoods = italianFoods.intersection(mexicanFoods)
const unionFoods = italianFoods.union(mexicanFoods)

// the other way to remove duplicates and mix all the elements .. make an arr with of all ele with spread and assign it to set
const bothFoods = [...italianFoods, ...mexicanFoods]
const unionHC = new Set(bothFoods)

const differenceFoods = italianFoods.difference(mexicanFoods)
const symmetricDiffFoods = italianFoods.symmetricDifference(mexicanFoods)

// console.log(intersectionFoods) // Set(2) {'tomatoes', 'garlic'}
// console.log(unionFoods) // Set(10) {'pasta', 'gnocchi', 'tomatoes', 'olive oil', 'garlic', …}
// console.log(unionHC) // result is same as unionFoods
// console.log(differenceFoods) // Set(4) {'pasta', 'gnocchi', 'olive oil', 'basil'}
// console.log(symmetricDiffFoods) // Set(8) {'pasta', 'gnocchi', 'olive oil', 'basil', 'tortillas', …}


/**
 * MAPS
 * -------
 * Maps are DS where we can map values to keys
 *  - just like objects, data is stored in key value pairs
 * 
 * Diff. between Maps and Objects is: we can have only strings as keys but in maps we can have any type for keys
 * 
 * create an empty map with syn: new Map()
 * to add values, we use .set() method
 * to read values, we use .get() method
 * 
 * .has() // checks whether the passed arg is present in the map or not .. returns true or false
 * .delete() // passed arg ... will be a key and assigning values will also be deleted from the map
 * .size // a property, that returns the actual size or the number of key-value pairs that are present in the map
 */

const restaurant = new Map() // syn

restaurant.set('name', 'quant pizzas') // key of type: string

// set can take any type of value for keys .. ex: if restaurant has two branches in same locations
restaurant.set(1, 'abc street, vzm')
restaurant.set(2, 'xyz street, vzm')

// .set not only sets a key-value pair on to a map but also returns the complete map on logging it to the console!
// console.log(restaurant.set())

// .get() method... returns the values on passing correct key value with correct data type
// here the data type is important, we will get correct output only when 1 is used instead of '1' otherwise we get undefined

// console.log(restaurant.get('name'))
// console.log(restaurant.get(1)) 

// use-case (1)
restaurant.set('open', 5)
restaurant.set('close', 22) // ... setting opening and closing hours of rest.

restaurant.set(true, 'we are open')
restaurant.set(false, 'we are close') // ... works based on the condition either true or false

const checkInTime = 24;
// console.log(restaurant.get( checkInTime > restaurant.get('open') && checkInTime < restaurant.get('close')))

// use-case (2)
// restaurant.set([1, 2], 'arrays') and restaurant.get([1, 2]) are not same .. [1, 2] has different reference points
// these two arrays in 'set' and 'get' reference to different addresses
// so, create an array constant and use that instead (because array constant refers to same address)
const arr0 = [1, 2]
restaurant.set(arr0, 'array things')
// console.log(restaurant.get(arr0))

/**
 * Maps - Part (2)
 * ------------------
 * 1. conversion of objects to maps
 * 2. iteration on maps (as maps are also iterables)
 * 3. 
 */

const restaurant1 = {
  name: 'classico italiano',
  location: 'via angelo Tavanti, Firenze',
  categories: ['italian', 'pizzeria', 'vegetarian', 'organic'],
  starterMenu: ['focaccia', 'bruschetta', 'garlic bread', 'caprese salad'],
  mainMenu: ['pizza', 'pasta', 'risotto'],
  openingHrs: {
    thu: { open: 7, close: 22},
    fri: { open: 5, close: 23},
    sat: { open: 5, close: 24}
  },
}

// --- conversion of object to map
// console.log(restaurant1.openingHrs)
const convertedMap = new Map(Object.entries(restaurant1.openingHrs))
// console.log(convertedMap)

// --- A Map
const question = new Map([
  ['question', 'what is the best language?'],
  [1, 'JavaScript'],
  [2, 'Python'],
  [3, 'Java'],
  ['correct', 1],
  [true, 'Correct!'],
  [false, 'Try again!']
]) 

// --- iterate over map
console.log('Choose any option...')
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Option ${key}: ${value}`)
  }
}
const option = +prompt('Choose an option (must be 1 or 2 or 3)')
console.log(question.get(question.get('correct') === option))