/** product: calculate the product of an array of numbers. */
//[1,2,3,4]

function product(nums, i=0) {
  if (nums.length === i) return 1; //base case
  return nums[i] * product(nums, i + 1); //progress
}

/** longest: return the length of the longest word in an array of words. */
//longest(["hello", "hi", "hola"]);  // 5

function longest(words, i=0) {
  if (words.length === i) return 0; //base case
  return Math.max(words[i].length, longest(words, i + 1)); //progress
}

/** everyOther: return a string with every other letter. */
//everyOther("hello");  // "hlo"

function everyOther(str, i=0) {
  if (str.length <= i) return ""; //base case
  return str[i] + everyOther(str, i + 2); //progress
}

/** find: return boolean depending on if val exists in array or not. */
// let animals = ["duck", "cat", "pony"];

// find(animals, "cat");  // true
// find(animals, "porcupine");   // false

function find(arr, val, i=0) {
  if (arr.length === i) return false; //base case
  return arr[i] === val || find(arr, val, i + 1); //progress
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, left=0, right=str.length-1) {
  if (right < left) return true; //base case

  return str[left] === str[right] &&
    isPalindrome(str, left + 1, right - 1); // progress
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i=str.length-1) {
  if (i === -1) return ''; // base case
  return str[i] + revString(str, i - 1); // progress
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if (arr.length === i) return -1; // base case
  return (arr[i] === val) ? i : findIndex(arr, val, i + 1) // progress
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, strings=[]) {
  for (let key in obj) { // base case & progress
    const val = obj[key]
    if (typeof val === 'object' && !Array.isArray(val) && val !== null) {
      gatherStrings(obj[key], strings);
    } else if (typeof val === 'string') {
      strings.push(val);
    }
  }

  return strings;
}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val, left=0, right=arr.length) {
  if (arr.length === 0) return false; // base case
  if (left > right) return false; // base case

  const idxToCompare = Math.floor((left + right) / 2);
  if (val === arr[idxToCompare]) return true;

  if (val < arr[idxToCompare])  {
    return binarySearch(arr, val, left, idxToCompare - 1); // progress
  } else {
    return binarySearch(arr, val, idxToCompare + 1, right); // progress
  }
}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val, left=0, right=arr.length - 1) {
  if (left > right) return -1; // base case

  mid = Math.floor((left + right) / 2);
  if (arr[mid] === val) return mid;

  if (arr[mid] > val) {
    return binarySearchIndex(arr, val, left, mid - 1) // progress
  } else {
    return binarySearchIndex(arr, val, mid + 1, right) // progress
  }
}

//arr = [1], left = 0, right = 0, mid = 0

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
