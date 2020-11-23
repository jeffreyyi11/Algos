// Recursion

// Base case(s)
// return value or function call
// Forward movement
// Call Stack
// Pass by value/reference

/* ******************************************************************************** */

/*
  Recursively sum an arr of ints
*/

// const nums1 = [1, 2, 3]
// const expected1 = 6

// add params if needed for recursion


function sumArr2(nums) {
    if (nums.length == 0) {
        return 0
    } else {
    return (nums[0] + sumArr2(nums.splice(1))) // 1 + sum([2,3])
  }                                            // 1 + (2 + sum[3])
                                              // 1 + (2 + 3)
}
console.log(sumArr2([1,2,3]))

/* ******************************************************************************** */

/*
  Recursive Sigma

  Input: integer
  Output: sum of integers from 1 to Input integer

*/

// const num1 = 5
// const expected1 = 15
// // Explanation: (1+2+3+4+5)

// const num2 = 2.5
// const expected2 = 3
// // Explanation: (1+2)

// const num3 = -1
// const expected3 = 0

function recursiveSigma(num) {
    num= Math.floor(num)
    if(num < 1){
        return 0;
    }else{
        return (num + recursiveSigma(num - 1))
    }
}
console.log(recursiveSigma(5))