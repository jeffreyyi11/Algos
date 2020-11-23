/*
  Balance Index

  Here, a balance point is ON an index, not between indices.

  Return the balance index where sums are equal on either side
  (exclude its own value).

  Return -1 if none exist.

*/

// const nums1 = [-2, 5, 7, 0, 3]
// const expected1 = 2

// const nums2 = [9, 9]
// const expected2 = -1

// nums3 = [

function balanceIndex(nums) {
    if (nums.length < 3){
        return -1;
    }
    let leftSum, rightSum, i;
    // Phase 1: Store the sum of all elements as the right sum
    rightSum = 0;
    for (i = 0; i < nums.length; i++){
        rightSum += nums[i];
    }
    // Phase 2: Gradually build the left sum and deplete the right sum moving left to right
    // If at an index the two sides are equal, return that index;
    leftSum = 0;
    for (i = 0; i < nums.length; i++){
        rightSum -= nums[i];
        if (leftSum == rightSum){
            return i;
        }
        leftSum += nums[i];
    }
    return -1;
}

/* ******************************************************************************** */

/*
  Balance Point

  Write a function that returns whether the given
  array has a balance point BETWEEN indices,
  where one side’s sum is equal to the other’s.
*/

// const nums1 = [1, 2, 3, 4, 10]
// const expected1 = true
// // Explanation: between indices 3 & 4

// const nums2 = [1, 2, 4, 2, 1]
// const expected2 = false

function balancePoint(nums) {
    let i, bound, leftSum, rightSum;
    rightSum = 0;
    for (i = 0; i < nums.length; i++){
        rightSum += nums[i];
    }
    leftSum = 0;
    bound = nums.length - 1;
    for (i = 0; i < bound; i++){
        leftSum += nums[i];
        rightSum -= nums[i];
        if (leftSum == rightSum){
            return true;
        }
    }
    return false;
}