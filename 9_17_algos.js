/*
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
*/

const cents1 = 25
const expected1 = { quarter: 1 }

const cents2 = 50
const expected2 = { quarter: 2 }

const cents3 = 9
const expected3 = { nickel: 1, penny: 4 }

const cents4 = 99
const expected4 = { quarter: 3, dime: 2, penny: 4 }

function fewestCoinChange(cents) {
  // code here
  // set currency values and change object
    var quarter = 25
    var dime = 10
    var nickel = 5
    var penny = 1
    var currencyArr = [quarter, dime, nickel, penny]
    var change = {}
  // divide cents by different currency
    var remainder = 0
    var count = 0
    for (let i = 0; i < currencyArr; i ++) {
        count = cents / currencyArr[i]
        remainder = count % 1
    }
  // increment currency in object for every division 
  return change 
}

function fewestCoinChange(cents) {
    // code here
    change = {
        'quarter':0,
        'dime': 0,
        'nickle':0,
        'penny':0
    }
  
        while(cents >= 25){
          change['quarter'] += 1
          cents -= 25
        }
        while(cents >= 10){
          change['dime'] += 1
          cents -= 10
        }
        while(cents >= 5){
          change['nickle'] += 1
          cents -= 5
        }
        while(cents >= 1){
          change['penny'] += 1
          cents -= 1
        }
    return change
  }

/* ******************************************************************************** */

/*
  Missing Value

  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
*/

const nums1 = [3, 0, 1]
const expected1 = 2

const nums2 = [3, 0, 1, 2]
const expected2 = null
// Explanation: nothing is missing

/*
  Bonus: now the lowest value can now be any integer (including negatives),
  instead of always being 0.
*/

const nums3 = [2, -4, 0, -3, -2, 1]
const expected3 = -1

const nums4 = [5, 2, 7, 8, 4, 9, 3]
const expected4 = 6

function missingValue(nums) {
    // code here
    let temp = 0;
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(nums[i] < nums[j]){
                temp = nums[j]
                nums[j] = nums[i]
                nums[i] = temp
            }
        }
    } //[0,1,2,3]
    for(let i = 0; i < nums.length - 1; i++){
        if ((nums[i]+1) != nums[i+1]) {
          return nums[i] + 1
        } 
    return null
  }
}
  console.log(missingValue(nums1))
  console.log(missingValue(nums2))
  console.log(missingValue(nums3))
  console.log(missingValue(nums4))