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
 * .delete() // "passed argv is there in the set" ? delete works : 'if console.logged returns a false'
 * .clear() // does not take any argv but clears all the elements from the set
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
 *
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
const commonFoods = italianFoods.intersection(mexicanFoods)
const fusionFoods = italianFoods.union(mexicanFoods)

console.log(fusionFoods)

// the other way to remove duplicates and mix all the elements .. make an arr with of all ele with spread and assign it to set
const bothFoods = [...italianFoods, ...mexicanFoods]
const unionHC = new Set (bothFoods)
console.log(unionHC)

