// console.log("Strings")


/**
 * --- Strings Part-1
 * 
 * methods on strings:
 * ---
 * whenever we call methods on strings JS automatically converts strings into objects as methods can not be applied on the primitives 
 * this process of conversion is called "BOXING"
 * ex: new String(str) --- converts into an object
 * ---
 * - indexOf() and lastIndexOf() 
 *  : takes a character and checks whether the passed character is present in the string or not and returns "index- position"
 *  : else returns '-1'
 *  : indexOf start searching from index:0 and lastIndexOf starts searching for character from last index of that str(str.length)
 * 
 * - slice()
 *  : slice extracts a part of a string from given index value (that is sub-string)
 *  : if arg passed are only one, then it extracts from that index to last index .. (4) => (4, str.length)
 *  : if two were passed, then it extracts str from 1st value to 2nd value - 1 of the string .. (4, 7) => (4, 7-1)
 * 
 * - .toUpperCase() and .toLowerCase()
 * 
 * - .replace('', '') case-sensitive method; takes two chars and replaces the 1st char in the string with second char (only 1st appearance)
 * - .replaceAll('', '') this also works as .replace() but it does for all appearances in string
 * 
 * - 'replaceAll' is introduced recently and before 'replace' is only used to replace a part of strings with regular expressions
 *  - .replace(/doors/g, 'gates')
 * 
 * boolean methods:
 * - .includes('') returns true if the passed char is present in the string
 * - .startsWith('') returns true if the string starts with the passed char
 * - .endsWith('') returns true if the string ends with the passed char
 * 
 * 
 */

// example for replace() using regular expressions:


const checkMidSeat = (seat) => {
    const s = seat.slice(-1)
    if(s === 'A' || s === 'F'){
        console.log('lucky! u got window seat!')
    }
}
checkMidSeat('11A')

