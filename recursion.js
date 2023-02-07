/** product: calculate the product of an array of numbers. */
//[1,2,3,4]
function product(nums) {
  if (nums.length === 0) return 1; //base case
  return nums[0] * product(nums.slice(1)); //progress
}

/** longest: return the length of the longest word in an array of words. */
//longest(["hello", "hi", "hola"]);  // 5
function longest(words) {
  if (words.length === 0) return 0; //base case
  return Math.max(words[0].length, longest(words.slice(1))); //progress
}

/** everyOther: return a string with every other letter. */
//everyOther("hello");  // "hlo"
function everyOther(str) {
  if (str.length === 0) return ""; //base case
  return str[0] + everyOther(str.slice(2)); //progress
}

/** find: return boolean depending on if val exists in array or not. */
// let animals = ["duck", "cat", "pony"];

// find(animals, "cat");  // true
// find(animals, "porcupine");   // false
function find(arr, val) {
  if (arr.length === 0) return false; //base case
  return arr[0] === val || find(arr.slice(1), val); //progress
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val) {

}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val) {

}

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }


module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};
