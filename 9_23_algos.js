/*
  Recursively reverse a string
  helpful methods:

  str.slice(beginIndex[, endIndex])
  returns a new string from beginIndex to endIndex exclusive
*/

// const str1 = "abc"
// const expected1 = "cba"

// const str2 = ""
// const expected2 = ""

function reverseStr(str) {
    if (str.length == 0) {
        return str;
    } else {
        let newstr = ""
        return newstr + reverseStr(str.slice(str.length - 1))
    }
}

console.log(reverseStr('abc'))
/* ******************************************************************************** */

/*
  Recursive Binary Search

  Input: SORTED array of ints, int value
  Output: bool representing if value is found

  Recursively search to find if the value exists, do not loop over every element.

  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
*/

// const nums1 = [1, 3, 5, 6];
// const searchNum1 = 4;
// const expected1 = false;

// const nums2 = [4, 5, 6, 8, 12];
// const searchNum2 = 5;
// const expected2 = true;

// const nums3 = [3, 4, 6, 8, 12];
// const searchNum3 = 3;
// const expected3 = true;

// add params if needed for recursion
function binarySearch(sortedNums, searchNum) {}