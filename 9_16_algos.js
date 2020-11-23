/*
  Array: Remove Duplicates

  Given a SORTED array of integers, dedupe the array
  Because array elements are already in order, all duplicate values will be grouped together.

  Ok to use a new array

  Bonus: do it in O(n) time (no nested loops, new array ok)
  Bonus: Do it in-place (no new array)
  Bonus: Do it in-place in O(n) time and no new array
  Bonus: Keep it O(n) time even if it is not sorted
*/

// const nums1 = [1, 1, 1, 1]
// const expected1 = [1]

// const nums2 = [1, 1, 2, 2, 3, 3]
// const expected2 = [1, 2, 3]

// const nums3 = [1, 1, 2, 3, 3, 4]
// const expected3 = [1, 2, 3, 4]

function removeDuplicates(nums) {
    // code here
    var nodup = []
    var numobj = {}
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in numobj) {
            continue
        } else {
            numobj[nums[i]] = 1
        }
    }
    for (key in numobj) {
        nodup.push(parseInt(key))
    }
    return nodup
  }
  
console.log(removeDuplicates([1, 1, 2, 3, 3, 4]))

  function removeDuplicates2(nums) {
    // code here
    return Array.from(new Set(nums));
}


console.log(removeDuplicates2(nums1))
/* ******************************************************************************** */

/*
  Array: Mode

  Create a function that, given an array of ints,
  returns the int that occurs most frequently in the array.

  What if there are multiple items that occur the same number of time?
    - return all of them (in an array)
    - what if all items occur the same number of times?
      - return empty array
*/

// const nums1 = []
// const expected1 = []

// const nums2 = [1]
// const expected2 = [1]

// const nums3 = [5, 1, 4]
// const expected3 = []

// const nums4 = [5, 1, 4, 1]
// const expected4 = [1]

// const nums5 = [5, 1, 4, 1, 5]
// const expected5 = [5, 1]
//  - order doesn't matter

// find all modes if more than one
function mode(nums) {
    // code here
    var maxcounts = []
    var freqtable = {}
    var maxfreq = 0
    if (nums.length = 0) {
        return nums
    }
    if (nums.length = 1) {
        return nums
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in freqtable) {
            freqtable[nums[i]] += 1
            if (freqtable[nums[i]] > maxfreq) {
                maxfreq = freqtable[nums[i]];
            }
        } else {
            freqtable[nums[i]] = 1
        }
    }
      for (var k in freqtable) { 
        if (freqtable[k] == maxfreq) {
        maxcounts.push(k)
        }
    }
    return maxcounts
}

console.log(mode([5, 1, 4, 1, 5]))